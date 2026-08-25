import { IconLayers } from './icons'

const PROJECTS = [
  { name: 'Boulangerie Lefort', category: 'Commerce alimentaire', image: null },
  { name: 'Atelier Menuiserie Roch', category: 'Artisan', image: null },
  { name: 'Cabinet Dentaire Vermeer', category: 'Santé', image: null },
  { name: 'Restaurant La Table Bleue', category: 'Restauration', image: null },
  { name: 'Salon Coiffure Éclat', category: 'Beauté & bien-être', image: null },
  { name: 'Garage Automoto Plus', category: 'Automobile', image: null },
]

function ProjectCard({ name, category, image }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-mist-200 bg-white transition-shadow duration-200 hover:shadow-xl hover:shadow-ink-900/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-800">
        {image ? (
          <img
            src={image}
            alt={`Aperçu du site réalisé pour ${name}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-brand-200/80">
            <IconLayers className="h-8 w-8" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Aperçu à venir
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-ink-800">{name}</h3>
        <p className="mt-1 text-sm text-ink-500">{category}</p>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <section id="realisations" className="bg-mist-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Réalisations
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Des sites conçus pour{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              des commerces comme le vôtre
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Quelques exemples de projets menés pour des indépendants et PME.
            De nouvelles captures arrivent au fil des livraisons.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
