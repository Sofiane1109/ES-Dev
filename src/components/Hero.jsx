import { IconBolt, IconDevices } from './icons'

function BrowserCard({ className = '', barTint = 'bg-brand-500' }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-xl shadow-ink-900/10 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-mist-200 bg-mist-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-400/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-400/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-400/30" />
      </div>
      <div className="space-y-3 p-6">
        <div className={`h-3 w-2/5 rounded-full ${barTint}`} />
        <div className="h-2.5 w-4/5 rounded-full bg-mist-200" />
        <div className="h-2.5 w-3/5 rounded-full bg-mist-200" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-16 rounded-lg bg-mist-100" />
          <div className="h-16 rounded-lg bg-mist-100" />
          <div className="h-16 rounded-lg bg-mist-100" />
        </div>
      </div>
    </div>
  )
}

function FloatingBadge({ icon, label, className = '' }) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-2xl border border-mist-200 bg-white px-4 py-3 shadow-lg shadow-ink-900/10 ${className}`}
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        {icon}
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-ink-800">{label}</span>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full bg-brand-100/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl lg:text-[3.4rem]">
            Un site vitrine professionnel qui{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              donne envie de vous contacter
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            ES Dev conçoit des sites vitrines rapides et soignés pour les PME et
            commerces. Pas de jargon technique, pas de mauvaise surprise : un
            interlocuteur unique, un site livré dans les temps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="/#contact"
              className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/30"
            >
              Demander un devis gratuit
            </a>
            <a
              href="/#realisations"
              className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-mist-200 px-7 py-3.5 text-base font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-300 hover:text-brand-600"
            >
              Voir nos réalisations
            </a>
          </div>

          <p className="mt-8 border-t border-mist-200 pt-6 text-sm text-ink-500">
            Premier échange gratuit et sans engagement.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-8 pl-4 pr-4 pt-4 lg:mx-0 lg:max-w-none lg:pl-6 lg:pr-10">
          <BrowserCard barTint="bg-brand-500" />
          <FloatingBadge
            icon={<IconBolt className="h-4.5 w-4.5" />}
            label="Chargement en moins d'1s"
            className="-left-2 -top-2 hidden lg:flex"
          />
          <FloatingBadge
            icon={<IconDevices className="h-4.5 w-4.5" />}
            label="100% adapté mobile"
            className="-bottom-2 -right-2 sm:-right-6"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
