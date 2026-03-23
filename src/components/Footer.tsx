import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5512991153530?text=Ol%C3%A1%2C+Karina%21+Quero+saber+mais+sobre+o+processo+de+realinhamento+e+agendar+uma+conversa+inicial.'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#4B0434' }} className="relative overflow-hidden">

      {/* Watermark */}
      <span
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: '#F5F0F2',
          opacity: 0.04,
          transform: 'rotate(-15deg)',
          top: '10%',
          right: '5%',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        expressão do ser
      </span>

      <div
        className="container-ultra relative z-10 flex flex-col items-center gap-8 text-center"
        style={{ paddingTop: '5rem', paddingBottom: '4rem' }}
      >

        <FadeIn>
          <div className="flex flex-col items-center gap-2">
            <span
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '1.5rem',
                color: '#F5F0F2',
              }}
            >
              Karina Crozariol
            </span>
            <span
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#3C7D3C',
                letterSpacing: '0.08em',
              }}
            >
              Expressão do Ser
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#841C62', opacity: 0.6 }}
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: '#F5F0F2',
              opacity: 0.7,
              lineHeight: 1.6,
              maxWidth: '480px',
              margin: 0,
            }}
          >
            Terapeuta Sistêmica e Consteladora Familiar. Sessões online. Diagnóstico preciso. Expressão autêntica.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer rounded-sm font-sans text-sm tracking-widest uppercase"
            style={{ backgroundColor: '#841C62', color: '#F5F0F2' }}
          >
            Agendar minha conversa inicial
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p
            style={{
              fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.75rem',
              color: '#F5F0F2',
              opacity: 0.35,
              margin: 0,
              letterSpacing: '0.05em',
            }}
          >
            &copy; 2026 Karina Crozariol. Todos os direitos reservados.
          </p>
        </FadeIn>

      </div>
    </footer>
  )
}
