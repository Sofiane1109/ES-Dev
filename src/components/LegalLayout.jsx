import Navbar from './Navbar'
import Footer from './Footer'

function LegalLayout({ title, updated, children }) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-400">Dernière mise à jour : {updated}</p>

          <div className="mt-12 space-y-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink-800">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-ink-600">{children}</div>
    </section>
  )
}

export default LegalLayout
