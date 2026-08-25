import { IconBolt, IconLayers, IconDevices, IconShield } from './icons'

const FEATURES = [
  {
    icon: IconBolt,
    title: 'Livraison rapide',
    description: 'Votre site en ligne en 2 à 3 semaines en moyenne, sans compromis sur la qualité.',
  },
  {
    icon: IconLayers,
    title: 'Design sur-mesure',
    description: "Pas de template générique : une identité visuelle pensée pour votre commerce.",
  },
  {
    icon: IconDevices,
    title: '100% responsive',
    description: 'Un rendu impeccable sur mobile, tablette et ordinateur, testé sur chaque appareil.',
  },
  {
    icon: IconShield,
    title: 'Accompagnement inclus',
    description: "Explications claires, sans jargon, et support réactif après la mise en ligne.",
  },
]

function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Pourquoi ES Dev
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Un partenaire web{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              qui parle votre langage
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-mist-200 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-800">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
