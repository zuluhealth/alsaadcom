"use client";

import { useActionState } from "react";
import { acceptInvite, type AccessFormState } from "@/lib/portal/actions";
import s from "./page.module.scss";

const initialState: AccessFormState = {};

export default function AcceptForm({
  token,
  name,
  email,
}: {
  token: string;
  name: string;
  email: string;
}) {
  const [state, formAction, pending] = useActionState(
    acceptInvite,
    initialState,
  );

  return (
    <form action={formAction} className={s.form}>
      <input type="hidden" name="token" value={token} />

      <div className={s.field}>
        <span className={s.fieldLabel}>{"// RECIPIENT"}</span>
        <p className={s.recipientName}>{name}</p>
      </div>

      <div className={s.field}>
        <span className={s.fieldLabel}>{"// WORK EMAIL"}</span>
        <p className={s.recipientEmail}>{email}</p>
      </div>

      <label className={s.checkboxRow}>
        <input type="checkbox" name="ndaAccepted" className={s.checkbox} />
        <span className={s.checkboxLabel}>
          I acknowledge that Tier-1 portal content is confidential, shared for
          partner evaluation only, and not for redistribution.
        </span>
      </label>

      {state.error ? (
        <p className={s.error} role="alert">
          [ ! ] {state.error}
        </p>
      ) : null}

      <button type="submit" className={s.submitButton} disabled={pending}>
        <span className={s.submitButtonFill} aria-hidden="true" />
        <span className={s.submitButtonContent}>
          {pending ? "[ VERIFYING… ]" : "[ ENTER THE BRIEFING ROOM → ]"}
        </span>
      </button>
    </form>
  );
}
