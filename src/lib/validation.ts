/**
 * Shared validation helpers — EPIC-001 Feature 6 (Form Validation).
 * Client-side checks only; server-side validation must mirror these rules
 * (see Backend Tasks in the Sprint 1 doc: "Server-side Validation", 2 hrs).
 */

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export interface NewsletterFormErrors {
  email?: string;
}

export function validateNewsletterForm(values: { email: string }): NewsletterFormErrors {
  const errors: NewsletterFormErrors = {};
  if (!isRequired(values.email)) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}
