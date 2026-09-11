"use server";

import { revalidatePath } from "next/cache";
import {
  createInvite,
  inviteModeEnabled,
  isAdminAuthed,
  loginAdmin,
  logoutAdmin,
  makeInviteUrl,
  reactivateInvite,
  revokeInvite,
} from "@/lib/portal/invites";
import { getOrigin } from "@/lib/portal/origin";
import { takeAdminLoginAttempt } from "@/lib/portal/rate-limit";

export interface AdminLoginState {
  error?: string;
}

export interface CreateInviteState {
  error?: string;
  link?: string;
  name?: string;
}

const VALID_DAYS = new Set([7, 14, 30, 90]);

export async function adminLogin(
  _prevState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  if (!inviteModeEnabled()) return { error: "Invite mode is not configured." };
  if (!(await takeAdminLoginAttempt())) return { error: "Sign-in is temporarily unavailable. Try again in 15 minutes." };
  const passphrase = String(formData.get("passphrase") || "");
  if (!passphrase) {
    return { error: "Passphrase is required." };
  }
  const ok = await loginAdmin(passphrase);
  if (!ok) {
    return { error: "Incorrect passphrase." };
  }
  revalidatePath("/invite");
  return {};
}

export async function adminLogout(): Promise<void> {
  await logoutAdmin();
  revalidatePath("/invite");
}

export async function createInviteAction(
  _prevState: CreateInviteState,
  formData: FormData,
): Promise<CreateInviteState> {
  if (!inviteModeEnabled() || !(await isAdminAuthed())) {
    return { error: "Not authorized." };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const organization = String(formData.get("organization") || "").trim();
  const days = Number(formData.get("days") || 0);

  if (name.length > 150 || email.length > 254 || organization.length > 200) {
    return { error: "Name, email or organization exceeds the allowed length." };
  }
  if (!name) {
    return { error: "Name is required." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Email is required." };
  }
  if (!VALID_DAYS.has(days)) {
    return { error: "Select a valid validity window." };
  }

  const invite = await createInvite({
    name,
    email,
    organization: organization || undefined,
    days,
  });

  const origin = await getOrigin();
  revalidatePath("/invite");
  return { link: makeInviteUrl(invite.id, origin), name: invite.name };
}

export async function revokeInviteAction(formData: FormData): Promise<void> {
  if (!inviteModeEnabled() || !(await isAdminAuthed())) return;
  const id = String(formData.get("id") || "");
  if (id) await revokeInvite(id);
  revalidatePath("/invite");
}

export async function reactivateInviteAction(
  formData: FormData,
): Promise<void> {
  if (!inviteModeEnabled() || !(await isAdminAuthed())) return;
  const id = String(formData.get("id") || "");
  if (id) await reactivateInvite(id);
  revalidatePath("/invite");
}
