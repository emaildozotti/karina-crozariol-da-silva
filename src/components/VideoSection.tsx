import { FadeIn } from '../App'

const YOUTUBE_VIDEO_ID = 'H6GpOMOoP4E'

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: '#1E0E1A' }} className="section-padding relative overflow-hidden">

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#841C62]/60" />

      {/* Subtle glowing orb in background */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(132,28,98,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container-ultra relative z-10">
        
        {/* Texts before video */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 mb-16 text-center">
          <FadeIn>
            <span className="eyebrow-ultra" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
              Compreenda a Dinâmica
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 600,
                color: '#F5F0F2',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              O ponto onde a <span style={{ fontStyle: 'italic', color: '#841C62', fontWeight: 500 }}>adequação</span> <br className="hidden md:block"/> vira adoecimento.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 300,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                color: '#F5F0F2',
                opacity: 0.85,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '640px'
              }}
            >
              Neste vídeo, falo sobre algo que nenhum exame consegue mostrar: o que acontece quando finalmente vamos à raiz, não ao sintoma. Se você reconheceu algo no que leu até aqui, assista antes de continuar.
            </p>
          </FadeIn>
        </div>

        {/* Vídeo 9:16 layout */}
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.3} className="w-full">
            <div 
              style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }} 
              className="mx-auto max-w-[340px]"
            >
              <div 
                className="relative w-full aspect-[9/16] overflow-hidden"
                style={{ borderRadius: '4px', backgroundColor: '#000' }}
              >
                <div className="absolute inset-0 z-0 bg-[#841C62]/10 animate-pulse" /> {/* Placeholder glow while loading */}
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?modestbranding=1&rel=0`}
                  title="Karina Crozariol — Expressão do Ser"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-x-0 inset-y-0 w-full h-full object-cover z-10"
                />
              </div>
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.4} className="text-center mt-12 w-full pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
                color: 'rgba(245, 240, 242, 0.7)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Isso que você sentiu enquanto assistia. Isso tem nome. E tem caminho.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
