import { IconLayers, IconShield, IconCode } from './icons'

const SERVICES = [
  {
    icon: IconLayers,
    name: 'Site vitrine',
    description:
      'Un site sur-mesure pour présenter votre activité, vos services et vos coordonnées, pensé pour convertir les visiteurs en clients. Vous gérez ensuite l\'hébergement.',
    tint: 'from-brand-500 to-brand-400',
  },
  {
    icon: IconShield,
    name: 'Vitrine + Sérénité',
    description:
      "La même vitrine, mais sans rien à gérer : hébergement, nom de domaine, mises à jour et sauvegardes pris en charge pour vous, en abonnement mensuel.",
    tint: 'from-ink-700 to-ink-600',
  },
  {
    icon: IconCode,
    name: 'Sur mesure',
    description:
      'Prise de rendez-vous en ligne, espace client, back-office... Pour les projets qui vont au-delà du site vitrine classique.',
    tint: 'from-brand-600 to-brand-500',
  },
]

function ServiceCard({ icon: Icon, name, description, tint }) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-mist-200 bg-white p-2 transition-shadow duration-200 hover:shadow-xl hover:shadow-ink-900/5">
      <div
        className={`flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${tint}`}
      >
        <Icon className="h-12 w-12 text-white/90" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink-800">{name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="bg-mist-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nos services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Des solutions web{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              adaptées à votre activité
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Que vous démarriez ou souhaitiez rafraîchir votre présence en ligne,
            on s'occupe de tout, du design à la mise en ligne.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500">
          Voir le détail et les prix de chaque formule dans la section{' '}
          <a href="/#tarifs" className="cursor-pointer font-semibold text-brand-600 underline">
            Tarifs
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Services
