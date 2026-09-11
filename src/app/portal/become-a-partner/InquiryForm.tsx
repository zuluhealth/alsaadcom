"use client";

import { useActionState } from "react";
import {
  submitPartnerInquiry,
  type InquiryFormState,
} from "@/lib/portal/actions";
import s from "./page.module.scss";

const initialState: InquiryFormState = {};

const DOMAIN_OPTIONS = ["Telecommunications", "Security", "Multiple"];

const COUNTRY_OPTIONS = ["Iraq", "Regional", "Other"];

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitPartnerInquiry,
    initialState,
  );

  if (state.ok) {
    return (
      <div className={s.logged} role="status" aria-live="polite">
        <span className={s.loggedMark}>[ LOGGED ]</span>
        <p className={s.loggedText}>
          Your inquiry has been logged and routed. Expect contact from the
          relevant desk.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={s.form}>
      <div className={s.fieldRow}>
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

      <div className={s.fieldRow}>
        <div className={s.field}>
          <label htmlFor="domain" className={s.fieldLabel}>
            {"// DOMAIN"}
          </label>
          <select
            id="domain"
            name="domain"
            defaultValue=""
            className={s.select}
          >
            <option value="" disabled>
              Select a domain…
            </option>
            {DOMAIN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={s.field}>
          <label htmlFor="country" className={s.fieldLabel}>
            {"// COUNTRY"}
          </label>
          <select
            id="country"
            name="country"
            defaultValue=""
            className={s.select}
          >
            <option value="" disabled>
              Select a country…
            </option>
            {COUNTRY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={s.field}>
        <label htmlFor="principal" className={s.fieldLabel}>
          {"// PRINCIPAL / OEM"}
        </label>
        <input
          id="principal"
          name="principal"
          type="text"
          className={s.input}
          placeholder="Named principal or OEM, if applicable"
        />
      </div>

      <div className={s.field}>
        <label htmlFor="message" className={s.fieldLabel}>
          {"// MESSAGE"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={s.textarea}
          placeholder="Describe the pursuit, opportunity or relationship you have in mind."
        />
      </div>

      {state.error ? (
        <p className={s.error} role="alert">
          [ ! ] {state.error}
        </p>
      ) : null}

      <button type="submit" className={s.submitButton} disabled={pending}>
        {pending ? "[ ROUTING… ]" : "[ SUBMIT INQUIRY → ]"}
      </button>
    </form>
  );
}
