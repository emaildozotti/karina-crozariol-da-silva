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
      style={{ backgroundColor: '#FAF7F9' }}
      className="relative min-h-screen overflow-hidden flex flex-col"
    >
      {/* Soft background glow */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(132,28,98,0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Header */}
      <header className="absolute top-0 w-full z-50 px-8 lg:px-16 py-8 flex items-center justify-between">
        <div style={{
          fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
          fontSize: '1.25rem',
          color: '#4B0434',
          fontWeight: 600,
          letterSpacing: '0.05em'
        }}>
          Karina Crozariol
        </div>
      </header>

      {/* Main hero content */}
      <div className="container-ultra relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 lg:py-0">
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pr-0 lg:pr-16 z-20">
          <FadeIn delay={0}>
            <div className="flex items-center gap-4">
              <div style={{ width: '40px', height: '1px', backgroundColor: '#3C7D3C' }}></div>
              <span style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                letterSpacing: '0.25em', 
                textTransform: 'uppercase', 
                color: '#3C7D3C' 
              }}>
                Identidade & Postura
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 600,
                color: '#1E0E1A',
                lineHeight: 1.15,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                margin: 0,
              }}
            >
              Você aprendeu<br /> 
              a ser <span style={{ fontStyle: 'italic', color: '#841C62' }}>forte.</span><br />
              O corpo cobra.
            </h1>
          </FadeIn>

          <FadeIn delay={0.30}>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#4B0434',
                opacity: 0.85,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '480px'
              }}
            >
              Um processo cirúrgico de limpeza sistêmica para quem precisa resgatar a própria essência sem perder quem ama.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex items-center gap-6 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer"
                style={{ 
                  backgroundColor: '#841C62', 
                  color: '#FFFFFF', 
                  borderRadius: '2px',
                  fontFamily: '"Inter", sans-serif', 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Agendar Conversa
              </a>
              <a
                href="#dores"
                onClick={handleScrollToDores}
                style={{ 
                  fontFamily: '"Inter", sans-serif', 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase',
                  color: '#4B0434',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderBottom: '1px solid currentColor',
                  paddingBottom: '2px'
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Como Funciona
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: photo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0 relative">
          <FadeIn delay={0.2} className="w-full max-w-[500px]">
             {/* Decorative Background Frame */}
            <div className="absolute top-8 left-8 right-[-2rem] bottom-[-2rem] border border-primary opacity-20 z-0 hidden lg:block" />
            
            <div className="relative overflow-hidden w-full z-10 shadow-[0_20px_50px_rgba(75,4,52,0.15)]"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="https://i.imgur.com/fqs40xA.jpeg"
                alt="Karina Crozariol"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle inner shadow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.1)' }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
