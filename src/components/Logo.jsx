import logoMark from '../assets/logo_esdev.png'

function Logo({ withWordmark = true, tone = 'dark', className = '' }) {
  const wordmarkColor = tone === 'light' ? 'text-white' : 'text-ink-800'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          tone === 'light' ? 'bg-white p-1.5' : ''
        }`}
      >
        <img src={logoMark} alt="" className="h-full w-full object-contain" />
      </span>
      {withWordmark && (
        <span className={`font-display text-lg font-bold tracking-tight ${wordmarkColor}`}>
          ES<span className="text-brand-500">Dev</span>
        </span>
      )}
    </span>
  )
}

export default Logo
