import { useState, type FormEvent } from 'react';

import type { ContactFormErrors, ContactFormValues } from '../types';
import { profile } from '@/constants/resumeData';

const EMPTY: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

// Deliberately loose: the goal is to catch typos, not to police valid
// addresses. Anything stricter rejects real addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email so I can reply.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That does not look like a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a message.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please add a little more detail (at least 20 characters).';
  }

  return errors;
}

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'w-full bg-bg border border-lineStrong px-3 py-2.5 text-ink text-sm outline-none focus:border-signal transition-colors disabled:opacity-50';
const labelClass = 'block font-mono text-[11px] tracking-[0.15em] text-signal mb-2';
const errorClass = 'mt-1.5 font-mono text-[11px] text-trace';

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const isConfigured = Boolean(ACCESS_KEY);
  const sending = status === 'sending';

  const setField =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value } = event.target;
      setValues((current) => ({ ...current, [field]: value }));
      // Clear the error as soon as the user starts fixing the field.
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus('error');
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          // Delivered to whatever inbox the access key is registered to
          // (sm.ahmadi77@yahoo.com) — not set per-request.
          subject: values.subject.trim() || `New message from ${values.name}`,
          name: values.name,
          email: values.email,
          message: values.message,
          // Lets you hit "reply" in your inbox and reach the visitor directly.
          replyto: values.email,
        }),
      });

      const result = (await response.json()) as { success: boolean };

      if (!response.ok || !result.success) {
        throw new Error('Web3Forms rejected the submission');
      }

      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from real visitors, bots tend to fill every field. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            NAME
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={setField('name')}
            disabled={sending}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-email">
            EMAIL
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={setField('email')}
            disabled={sending}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-subject">
          SUBJECT <span className="text-inkMuted">(OPTIONAL)</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={setField('subject')}
          disabled={sending}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-message">
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={setField('message')}
          disabled={sending}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? 'SENDING…' : 'SEND MESSAGE'}
        </button>
        <p className="font-mono text-[11px] text-inkMuted">Delivered straight to my inbox.</p>
      </div>

      <p aria-live="polite" className="font-mono text-[11px]">
        {status === 'sent' && (
          <span className="text-trace">Message sent — thanks, I will reply soon.</span>
        )}
        {status === 'error' && isConfigured && (
          <span className="text-red-400">
            Something went wrong sending that. Please email me directly at {profile.email}.
          </span>
        )}
        {status === 'error' && !isConfigured && (
          <span className="text-red-400">
            The contact form is not configured yet. Please email me directly at {profile.email}.
          </span>
        )}
      </p>
    </form>
  );
}
