import Logo from './Logo'
import { IconInstagram } from './icons'

const NAV = [
  { href: '/#services', label: 'Services' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Contact' },
]

const LEGAL = [
  { href: '/mentions-legales.html', label: 'Mentions légales' },
  { href: '/politique-confidentialite.html', label: 'Politique de confidentialité' },
]

const SOCIALS = [
  {
    href: 'https://www.instagram.com/ennsoooooo.dev/',
    label: 'Instagram',
    icon: IconInstagram,
  },
]

function Footer() {
  return (
    <footer className="bg-ink-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <a href="/" className="cursor-pointer" aria-label="ES Dev - Accueil">
            <Logo tone="light" />
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ES Dev. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            {LEGAL.map((link, index) => (
              <li key={link.href} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="cursor-pointer transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
                {index < LEGAL.length - 1 && <span aria-hidden="true">·</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
