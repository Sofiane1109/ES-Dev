import { useEffect, useState } from 'react'
import Logo from './Logo'
import { IconMenu, IconClose } from './icons'

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="/" className="cursor-pointer" aria-label="ES Dev - Accueil">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer text-sm font-medium text-ink-600 transition-colors duration-200 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden cursor-pointer items-center rounded-full bg-ink-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-600 md:inline-flex"
        >
          Demander un devis
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink-800 transition-colors duration-200 hover:bg-mist-100 md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-mist-200 bg-white px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors duration-200 hover:bg-mist-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex cursor-pointer items-center justify-center rounded-full bg-ink-800 px-5 py-3 text-sm font-semibold text-white"
          >
            Demander un devis
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
