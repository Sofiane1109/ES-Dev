import { useState } from 'react'
import { IconMail, IconMapPin, IconCheck } from './icons'

const CONTACT_EMAIL = 'contact@esdev.be'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Merci d\'indiquer votre nom.'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Ce nom semble trop court.'
  }

  if (!form.email.trim()) {
    errors.email = 'Merci d\'indiquer votre email.'
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Cette adresse email ne semble pas valide.'
  }

  if (!form.message.trim()) {
    errors.message = 'Merci de décrire brièvement votre projet.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Un peu court : dites-nous en un peu plus (10 caractères minimum).'
  }

  return errors
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('sending')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', ...form }),
      })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="bg-ink-800 py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
            <IconCheck className="h-7 w-7" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold text-white">
            Message envoyé
          </h2>
          <p className="mt-3 text-lg text-white/60">
            Merci, votre demande a bien été reçue. On revient vers vous sous 24h
            ouvrées à l'adresse indiquée.
          </p>
        </div>
      </section>
    )
  }

  const fieldClass = (field) =>
    `mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none ${
      errors[field]
        ? 'border-red-400/70 focus:border-red-400'
        : 'border-white/15 focus:border-brand-400'
    }`

  return (
    <section id="contact" className="bg-ink-800 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Contact
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Décrivez-nous votre activité en quelques lignes. On revient vers
              vous sous 24h ouvrées avec un premier échange gratuit, sans
              engagement.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <IconMail className="h-5 w-5" />
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="cursor-pointer text-white/85 transition-colors duration-200 hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <span className="text-white/85">Bruxelles, Belgique</span>
              </li>
            </ul>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 lg:col-span-3 sm:p-9"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Ne pas remplir <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white/80">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={fieldClass('name')}
                  placeholder="Jean Dupont"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-300">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-white/80">
                  Adresse email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={fieldClass('email')}
                  placeholder="jean@monentreprise.be"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-white/80">
                Votre projet
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${fieldClass('message')} resize-none`}
                placeholder="Parlez-nous de votre commerce et de ce que vous recherchez..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'error' && (
              <p className="mt-4 text-sm text-red-300">
                Une erreur est survenue. Vous pouvez aussi écrire directement à{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="cursor-pointer underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-7 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
