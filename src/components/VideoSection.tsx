import { FadeIn } from '../App'

const YOUTUBE_VIDEO_ID = 'H6GpOMOoP4E'

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: '#4B0434' }} className="section-padding relative overflow-hidden">

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
          top: '20%',
          right: '5%',
          whiteSpace: 'nowrap',
          zIndex: 1,
        }}
      >
        camadas sistêmicas
      </span>

      <div className="container-ultra relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

          {/* Pré-vídeo */}
          <FadeIn className="text-center">
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                color: '#F5F0F2',
                opacity: 0.9,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Neste vídeo, eu falo sobre algo que nenhum exame consegue mostrar: o ponto onde a adequação vira adoecimento e o que acontece quando a gente finalmente vai à raiz, não ao sintoma. Se você reconheceu algo no que leu até aqui, assista antes de continuar. Vai fazer sentido de um jeito diferente.
            </p>
          </FadeIn>

          {/* Vídeo 9:16 */}
          <FadeIn delay={0.2}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '300px',
                aspectRatio: '9/16',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  outline: '1px solid rgba(132,28,98,0.6)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Karina Crozariol — Expressão do Ser"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.1} className="text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                color: '#3C7D3C',
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
