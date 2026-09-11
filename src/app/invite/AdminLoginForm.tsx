"use client";

import { useActionState } from "react";
import { adminLogin, type AdminLoginState } from "./actions";
import s from "./page.module.scss";

const initialState: AdminLoginState = {};

export default function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(
    adminLogin,
    initialState,
  );

  return (
    <form action={formAction} className={s.form}>
      <div className={s.field}>
        <label htmlFor="passphrase" className={s.fieldLabel}>
          {"// ADMIN PASSPHRASE"}
        </label>
        <input
          id="passphrase"
          name="passphrase"
          type="password"
          required
          autoComplete="current-password"
          className={s.input}
        />
      </div>

      {state.error ? (
        <p className={s.error} role="alert">
          [ ! ] {state.error}
        </p>
      ) : null}

      <button type="submit" className={s.submitButton} disabled={pending}>
        <span className={s.submitButtonFill} aria-hidden="true" />
        <span className={s.submitButtonContent}>
          {pending ? "[ VERIFYING… ]" : "[ AUTHENTICATE → ]"}
        </span>
      </button>
    </form>
  );
}
