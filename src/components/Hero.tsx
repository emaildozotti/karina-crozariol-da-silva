import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5512991153530?text=Ol%C3%A1%2C+Karina%21+Quero+saber+mais+sobre+o+processo+de+realinhamento+e+agendar+uma+conversa+inicial.'

export default function Hero() {
  const handleScrollToDores = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('dores')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      style={{ backgroundColor: '#4B0434' }}
      className="relative min-h-screen overflow-hidden flex flex-col"
    >
      {/* Aurora blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[55%] h-[60%] rounded-full blur-3xl pointer-events-none"
        style={{
          background: '#841C6259',
          animation: 'aurora-1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[55%] rounded-full blur-3xl pointer-events-none"
        style={{
          background: '#3C7D3C45',
          animation: 'aurora-2 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full blur-3xl pointer-events-none"
        style={{
          background: '#F5F0F228',
          animation: 'aurora-3 18s ease-in-out infinite',
        }}
      />

      {/* Watermark */}
      <span
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: '#F5F0F2',
          opacity: 0.05,
          transform: 'rotate(-15deg)',
          top: '30%',
          left: '5%',
          whiteSpace: 'nowrap',
          zIndex: 1,
        }}
      >
        precisão cirúrgica da alma
      </span>

      {/* Sticky header — desktop only */}
      <header className="hidden md:flex sticky top-0 z-50 w-full items-center justify-between px-8 py-4"
        style={{ backgroundColor: 'rgba(75,4,52,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <span
          style={{
            fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#F5F0F2',
            letterSpacing: '0.02em',
          }}
        >
          Karina Crozariol | Expressão do Ser
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer rounded-sm font-sans text-xs tracking-widest uppercase"
          style={{ backgroundColor: '#841C62', color: '#F5F0F2', fontSize: '0.7rem' }}
        >
          Agendar conversa
        </a>
      </header>

      {/* Main hero content */}
      <div className="container-ultra relative z-10 flex-1 flex items-center py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
              <span className="eyebrow-ultra" style={{ color: '#3C7D3C' }}>
                TRAVADA POR DENTRO
              </span>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1
                style={{
                  fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#F5F0F2',
                  lineHeight: 1.15,
                  fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                  margin: 0,
                }}
              >
                Você aprendeu a ser forte. O corpo cobra.
              </h1>
            </FadeIn>

            <FadeIn delay={0.30}>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  color: '#F5F0F2',
                  opacity: 0.88,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Um caminho de volta para si, sem perder quem ama.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <a
                href="#dores"
                onClick={handleScrollToDores}
                className="btn-shimmer rounded-sm font-sans text-sm tracking-widest uppercase"
                style={{ backgroundColor: '#841C62', color: '#F5F0F2', alignSelf: 'flex-start' }}
              >
                Quero entender como
              </a>
            </FadeIn>
          </div>

          {/* Right: photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative overflow-hidden rounded-sm w-full max-w-[440px]"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src="/images/karina-01.jpg"
                alt="Karina Crozariol"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent && !parent.querySelector('.placeholder-svg')) {
                    const div = document.createElement('div')
                    div.className = 'placeholder-svg w-full h-full flex items-center justify-center'
                    div.style.cssText = 'background:linear-gradient(135deg,#841C62 0%,#4B0434 100%);'
                    div.innerHTML = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="28" r="16" stroke="#F5F0F2" stroke-width="2" stroke-opacity="0.5"/><path d="M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32" stroke="#F5F0F2" stroke-width="2" stroke-opacity="0.5"/></svg>`
                    parent.appendChild(div)
                  }
                }}
              />
              {/* Treatment B: magenta gradient overlay at base */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(132,28,98,0.18) 0%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden md:flex justify-center pb-8 relative z-10">
        <a
          href="#dores"
          onClick={handleScrollToDores}
          style={{ color: '#F5F0F2', opacity: 0.4 }}
          className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
          aria-label="Rolar para baixo"
        >
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            continuar
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
