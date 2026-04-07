import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5512991153530?text=Ol%C3%A1%2C+Karina%21+Quero+saber+mais+sobre+o+processo+de+realinhamento+e+agendar+uma+conversa+inicial.'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E0E1A' }} className="relative overflow-hidden border-t border-[#841C62]/10">

      {/* Subtle top subtle lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#841C62]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[100px] bg-[#841C62]/5 rounded-full blur-[60px]" />

      <div
        className="container-ultra relative z-10 flex flex-col items-center gap-12 text-center"
        style={{ paddingTop: '6rem', paddingBottom: '3rem' }}
      >

        <FadeIn>
          <div className="flex flex-col items-center gap-4">
            <span
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 600,
                fontSize: '2rem',
                color: '#F5F0F2',
                letterSpacing: '0.02em',
              }}
            >
              Karina Crozariol
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#841C62]/40" />
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#F5F0F2',
                  opacity: 0.6,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Expressão do Ser
              </span>
              <div className="w-10 h-px bg-[#841C62]/40" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: '#F5F0F2',
              opacity: 0.75,
              lineHeight: 1.6,
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            Terapeuta Sistêmica, Consteladora Familiar &amp; Orientadora.
            <br />
            Precisão de diagnóstico para uma expressão mais autêntica de você.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-all duration-300 hover:opacity-80"
            style={{ textDecoration: 'none' }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-[#841C62]/20"
              style={{ border: '1px solid rgba(132, 28, 98, 0.4)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#841C62' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.75rem',
                color: '#841C62',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginTop: '0.5rem'
              }}
            >
              Fale com a Equipe
            </span>
          </a>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full flex justify-between items-center mt-4">
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
            &copy; {new Date().getFullYear()} Karina Crozariol.
          </p>
          <div className="flex gap-4">
             <a href="#" style={{ color: 'rgba(245, 240, 242, 0.35)', fontSize: '0.75rem', textDecoration: 'none', fontFamily: '"Inter", sans-serif', letterSpacing: '0.05em' }} className="hover:text-white transition-colors">Termos</a>
             <a href="#" style={{ color: 'rgba(245, 240, 242, 0.35)', fontSize: '0.75rem', textDecoration: 'none', fontFamily: '"Inter", sans-serif', letterSpacing: '0.05em' }} className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </FadeIn>

      </div>
    </footer>
  )
}
