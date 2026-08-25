import { IconCheck, IconLayers, IconShield, IconCode } from './icons'

const PLANS = [
  {
    icon: IconLayers,
    name: 'Site vitrine',
    tagline: "Vous gérez l'hébergement et la maintenance",
    price: 'À partir de 800 €',
    priceNote: 'paiement unique',
    features: [
      'Design sur mesure, adapté à votre activité',
      'Site responsive (mobile, tablette, desktop)',
      "Jusqu'à 5 pages",
      'Formulaire de contact',
      'Livré clé en main, code source inclus',
      'Formation à la prise en main',
    ],
    ctaLabel: 'Demander un devis',
    highlighted: false,
  },
  {
    icon: IconShield,
    name: 'Vitrine + Sérénité',
    badge: 'Recommandé',
    tagline: "Tout est pris en charge, vous n'avez rien à gérer",
    price: 'À partir de 400 € + 80 à 100 €/mois',
    priceNote: 'engagement 9 mois',
    features: [
      'Tout ce qui est inclus dans la formule Site vitrine',
      'Hébergement et nom de domaine inclus',
      'Mises à jour de sécurité',
      'Sauvegardes régulières',
      'Jusqu\'à 4 modifications mineures par mois',
      'Support prioritaire par email',
    ],
    footnote: 'Reconductible sans engagement après les 9 premiers mois.',
    ctaLabel: 'Demander un devis',
    highlighted: true,
  },
  {
    icon: IconCode,
    name: 'Sur mesure',
    tagline: 'Réservation en ligne, espace client, back-office...',
    price: 'À partir de 1200 €',
    priceNote: 'sans forfait',
    altPrice: 'ou dès 700 € + 120 à 150 €/mois avec forfait Sérénité (engagement 9 mois)',
    features: [
      'Prise de rendez-vous en ligne (coiffeur, salon, cabinet...)',
      'Espace client personnalisé',
      'Espace admin pour gérer votre activité',
      'Formule avec ou sans forfait Sérénité, selon votre choix',
    ],
    ctaLabel: 'Discutons de votre projet',
    highlighted: false,
  },
]

function PricingCard({ plan }) {
  const {
    icon: Icon,
    name,
    badge,
    tagline,
    price,
    priceNote,
    altPrice,
    features,
    footnote,
    ctaLabel,
    highlighted,
  } = plan

  const card = (
    <div className="flex h-full flex-col rounded-[15px] bg-white p-8">
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
          {badge}
        </span>
      )}

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-5 font-display text-lg font-semibold text-ink-800">{name}</h3>
      <p className="mt-2 text-sm text-ink-500">{tagline}</p>

      <div className="mt-6">
        <span
          className={`font-display text-xl font-bold leading-snug sm:text-2xl ${
            highlighted ? 'text-brand-500' : 'text-ink-800'
          }`}
        >
          {price}
        </span>
        <span className="mt-1 block text-sm text-ink-400">{priceNote}</span>
        {altPrice && <p className="mt-2 text-sm text-ink-500">{altPrice}</p>}
      </div>

      <a
        href="/#contact"
        className={`mt-7 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          highlighted
            ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30'
            : 'border border-mist-200 text-ink-800 hover:border-brand-300 hover:text-brand-600'
        }`}
      >
        {ctaLabel}
      </a>

      <ul className="mt-8 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
            <span className="text-sm text-ink-600">{feature}</span>
          </li>
        ))}
      </ul>

      {footnote && <p className="mt-6 text-xs italic text-ink-400">{footnote}</p>}
    </div>
  )

  if (highlighted) {
    return (
      <div className="relative rounded-2xl bg-gradient-to-r from-brand-600 to-brand-400 p-[2px] shadow-xl shadow-brand-500/15 lg:-translate-y-3">
        {card}
      </div>
    )
  }

  return <div className="relative h-full rounded-2xl border border-mist-200 bg-white">{card}</div>
}

function Pricing() {
  return (
    <section id="tarifs" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Nos formules
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Un tarif clair,{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              adapté à votre projet
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Trois façons de travailler ensemble. Le prix final dépend de votre
            projet — discutons-en.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-start gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-500">
          Le prix varie selon le nombre de pages et les fonctionnalités
          souhaitées. Chaque projet fait l'objet d'un devis personnalisé.{' '}
          <a href="/#contact" className="cursor-pointer font-semibold text-brand-600 underline">
            Contactez-nous
          </a>{' '}
          pour en discuter.
        </p>
      </div>
    </section>
  )
}

export default Pricing
