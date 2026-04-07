import { FadeIn } from '../App'

const dores = [
  {
    num: '01',
    text: 'Faço de tudo para agradar todo mundo e no final não sei nem o que é escolha minha de verdade',
  },
  {
    num: '02',
    text: 'Meu corpo todo dói sem motivo que médico consiga explicar',
  },
  {
    num: '03',
    text: 'Vivo a vida que os outros esperavam de mim, não a que sinto que é a minha',
  },
  {
    num: '04',
    text: 'Tenho medo de que se eu for eu mesmo de verdade, possa afastar as pessoas que amo',
  },
]

export default function PainPoints() {
  return (
    <section id="dores" style={{ backgroundColor: '#F2EBF0' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="eyebrow-ultra" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
            Identificação
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
              fontWeight: 600,
              color: '#1E0E1A',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Sinais de um corpo que <span style={{ fontStyle: 'italic', color: '#841C62' }}>Adoece em silêncio.</span>
          </h2>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
              color: '#1E0E1A',
              opacity: 0.85,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Aprendemos tão bem a continuar sendo "fortes" e adequadas que demoramos anos para parar e escutar a exaustão profunda. Se você chegou até aqui, talvez reconheça essas sensações:
          </p>
        </FadeIn>

        {/* Grid de dores 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {dores.map((dor, index) => (
            <FadeIn key={dor.num} delay={index * 0.1}>
              <div
                className="group relative p-10 h-full rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-white"
                style={{ 
                  border: '1px solid rgba(132, 28, 98, 0.08)',
                  boxShadow: '0 15px 35px rgba(30, 14, 26, 0.03)'
                }}
              >
                {/* Linha colorida de destaque no topo */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#841C62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Numeração decorativa */}
                <span
                  className="absolute top-6 right-8 select-none pointer-events-none"
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '4.5rem',
                    color: '#841C62',
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {dor.num}
                </span>
                
                <p
                  style={{
                    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: '#1E0E1A',
                    lineHeight: 1.8,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '90%'
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
              fontWeight: 400,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
              color: '#4B0434',
              lineHeight: 1.6,
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
