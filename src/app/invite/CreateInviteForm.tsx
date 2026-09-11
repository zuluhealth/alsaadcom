"use client";

import { useActionState } from "react";
import {
  createInviteAction,
  type CreateInviteState,
} from "./actions";
import CopyButton from "./CopyButton";
import s from "./page.module.scss";

const initialState: CreateInviteState = {};

export default function CreateInviteForm() {
  const [state, formAction, pending] = useActionState(
    createInviteAction,
    initialState,
  );

  return (
    <div className={s.createBlock}>
      <form action={formAction} className={s.form}>
        <div className={s.formGrid}>
          <div className={s.field}>
            <label htmlFor="inv-name" className={s.fieldLabel}>
              {"// NAME *"}
            </label>
            <input
              id="inv-name"
              name="name"
              type="text"
              required
              className={s.input}
            />
          </div>

          <div className={s.field}>
            <label htmlFor="inv-email" className={s.fieldLabel}>
              {"// EMAIL *"}
            </label>
            <input
              id="inv-email"
              name="email"
              type="email"
              required
              className={s.input}
            />
          </div>

          <div className={s.field}>
            <label htmlFor="inv-org" className={s.fieldLabel}>
              {"// ORGANIZATION"}
            </label>
            <input
              id="inv-org"
              name="organization"
              type="text"
              className={s.input}
            />
          </div>

          <div className={s.field}>
            <label htmlFor="inv-days" className={s.fieldLabel}>
              {"// VALIDITY"}
            </label>
            <select
              id="inv-days"
              name="days"
              defaultValue="14"
              className={s.select}
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
        </div>

        {state.error ? (
          <p className={s.error} role="alert">
            [ ! ] {state.error}
          </p>
        ) : null}

        <button type="submit" className={s.submitButton} disabled={pending}>
          <span className={s.submitButtonFill} aria-hidden="true" />
          <span className={s.submitButtonContent}>
            {pending ? "[ CREATING… ]" : "[ CREATE SIGNED LINK → ]"}
          </span>
        </button>
      </form>

      {state.link ? (
        <div className={s.linkResult}>
          <span className={s.fieldLabel}>
            {"// LINK FOR "}
            {state.name?.toUpperCase()}
          </span>
          <div className={s.linkRow}>
            <input
              readOnly
              value={state.link}
              className={s.input}
              onFocus={(e) => e.currentTarget.select()}
            />
            <CopyButton value={state.link} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
