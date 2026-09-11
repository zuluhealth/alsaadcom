"use server";

import { requirePartnerSession } from "./session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PORTAL_SESSION_COOKIE, inviteModeEnabled, previewModeEnabled, sealSession, sessionCookieOptions } from "./auth";
import { getActiveInvite, recordOpen, verifyToken } from "./invites";

export interface AccessFormState { error?: string; }

export async function enterPortal(_prevState: AccessFormState, formData: FormData): Promise<AccessFormState> {
  // Enforce on the action itself: hiding a form does not disable its endpoint.
  if (!previewModeEnabled()) return { error: "Access requires a valid invitation." };
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const organization = String(formData.get("organization") || "").trim();
  if (!fullName || fullName.length > 150) return { error: "Enter a name of up to 150 characters." };
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "A valid work email is required." };
  if (organization.length > 200) return { error: "Organization must be at most 200 characters." };
  if (formData.get("ndaAccepted") !== "on") return { error: "You must acknowledge the confidentiality terms." };
  (await cookies()).set(PORTAL_SESSION_COOKIE, sealSession("partner", {
    preview: true, email, fullName, organizationName: organization,
    ndaAcceptedAt: new Date().toISOString(),
  }), sessionCookieOptions());
  redirect("/portal");
}

export async function acceptInvite(_prevState: AccessFormState, formData: FormData): Promise<AccessFormState> {
  if (!inviteModeEnabled()) return { error: "Partner access is currently unavailable." };
  const id = verifyToken(String(formData.get("token") || ""));
  const invite = id ? await getActiveInvite(id) : null;
  if (!invite) return { error: "This access link has expired or been withdrawn." };
  if (formData.get("ndaAccepted") !== "on") return { error: "You must acknowledge the confidentiality terms." };
  await recordOpen(invite.id);
  (await cookies()).set(PORTAL_SESSION_COOKIE, sealSession("partner", {
    inviteId: invite.id, ndaAcceptedAt: new Date().toISOString(),
  }), sessionCookieOptions());
  redirect("/portal");
}

export async function signOut(): Promise<void> {
  (await cookies()).delete(PORTAL_SESSION_COOKIE);
  redirect("/partner-login");
}

export interface InquiryFormState {
  ok?: boolean;
  error?: string;
}

export async function submitPartnerInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  await requirePartnerSession();
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const organization = String(formData.get("organization") || "").trim();
  const domain = String(formData.get("domain") || "").trim();
  const country = String(formData.get("country") || "").trim();
  const principal = String(formData.get("principal") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (fullName.length > 150 || email.length > 254 || organization.length > 200 ||
      domain.length > 100 || country.length > 100 || principal.length > 200 || message.length > 5000) {
    return { error: "One or more fields exceed the allowed length." };
  }
  if (!fullName) {
    return { error: "Full name is required." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "A valid work email is required." };
  }

  console.log(
    "[partner-inquiry]",
    JSON.stringify({
      fullName,
      email,
      organization,
      domain,
      country,
      principal,
      message,
      at: new Date().toISOString(),
    }),
  );

  return { ok: true };
}
