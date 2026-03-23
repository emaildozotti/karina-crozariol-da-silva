import { FadeIn } from '../App'

const dores = [
  {
    num: '01',
    text: 'Faço de tudo para agradar todo mundo e no final não sei nem o que eu gosto de verdade',
  },
  {
    num: '02',
    text: 'Meu corpo tá doendo sem motivo que médico consiga explicar',
  },
  {
    num: '03',
    text: 'Vivo a vida que os outros esperavam de mim, não a que sinto que é a minha',
  },
  {
    num: '04',
    text: 'Tenho medo que se eu for eu mesma de verdade, as pessoas que amo vão me abandonar',
  },
]

export default function PainPoints() {
  return (
    <section id="dores" style={{ backgroundColor: '#F2EBF0' }} className="section-padding">
      <div className="container-ultra">

        {/* Abertura editorial — história da Karina */}
        <FadeIn>
          <blockquote
            className="mb-16"
            style={{
              borderLeft: '2px solid #841C62',
              paddingLeft: '2rem',
              margin: '0 0 4rem 0',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 300,
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                color: '#1E0E1A',
                lineHeight: 1.75,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Conheço esse estado. Por 28 anos fui dentista. Perfeita em tudo. Pontual, dedicada, presente para todos que precisavam de mim. E enquanto cuidava dos dentes de centenas de pessoas, meu próprio corpo foi se fragmentando em silêncio. Enxaquecas que não passavam. Dores que médico nenhum explicava. Uma exaustão que dormindo não saía. Eu sabia que algo estava errado. Mas aprendi tão bem a continuar que demorei anos para parar e ouvir o que o meu próprio corpo estava gritando. Se você chegou até aqui, talvez reconheça algumas dessas sensações:
            </p>
          </blockquote>
        </FadeIn>

        {/* Grid de dores 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dores.map((dor, index) => (
            <FadeIn key={dor.num} delay={index * 0.1}>
              <div
                className="relative p-8 rounded-sm overflow-hidden"
                style={{ backgroundColor: '#FAF7F9', border: '1px solid rgba(132,28,98,0.12)' }}
              >
                {/* Numeração decorativa */}
                <span
                  className="absolute top-4 right-6 select-none pointer-events-none"
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '4rem',
                    color: '#841C62',
                    opacity: 0.08,
                    lineHeight: 1,
                  }}
                >
                  {dor.num}
                </span>
                <p
                  style={{
                    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: '#1E0E1A',
                    lineHeight: 1.7,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "{dor.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição */}
        <FadeIn>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
              color: '#1E0E1A',
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Essas não são fraquezas suas. São camadas que você aprendeu a carregar muito antes de entender o que eram. E existe um ponto preciso onde elas estão enraizadas.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
