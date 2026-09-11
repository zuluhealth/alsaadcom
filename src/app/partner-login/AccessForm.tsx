"use client";

import { useActionState } from "react";
import { enterPortal, type AccessFormState } from "@/lib/portal/actions";
import s from "./page.module.scss";

const initialState: AccessFormState = {};

export default function AccessForm() {
  const [state, formAction, pending] = useActionState(enterPortal, initialState);

  return (
    <form action={formAction} className={s.form}>
      <div className={s.field}>
        <label htmlFor="fullName" className={s.fieldLabel}>
          {"// FULL NAME *"}
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className={s.input}
        />
      </div>

      <div className={s.field}>
        <label htmlFor="email" className={s.fieldLabel}>
          {"// WORK EMAIL *"}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={s.input}
        />
      </div>

      <div className={s.field}>
        <label htmlFor="organization" className={s.fieldLabel}>
          {"// ORGANIZATION"}
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className={s.input}
        />
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
