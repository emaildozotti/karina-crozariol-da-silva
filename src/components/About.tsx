import { FadeIn } from '../App'

const credenciais = [
  'Terapeuta Sistêmica e Consteladora Familiar',
  '28 anos de prática clínica em odontologia',
  'Orientadora de Propósito e Missão de Vida há mais de 10 anos',
]

export default function About() {
  return (
    <section style={{ backgroundColor: '#F2EBF0' }} className="section-padding">
      <div className="container-ultra">

        {/* Linha decorativa acima do título */}
        <FadeIn className="flex justify-center mb-20">
          <div style={{ width: '60px', height: '1px', backgroundColor: '#3C7D3C' }} />
        </FadeIn>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Texto — order-2 mobile, order-1 desktop */}
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <FadeIn>
              <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
                Sobre Karina Crozariol
              </span>
              <h2
                style={{
                  fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                  fontWeight: 600,
                  color: '#1E0E1A',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                A dentista que aprendeu a curar a alma com a mesma <span style={{ fontStyle: 'italic', color: '#841C62' }}>precisão</span> que curava as dores físicas.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                  fontSize: '1.25rem',
                  color: '#1E0E1A',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Há 28 anos, atuando como dentista. Treinei a precisão como forma de existir. Diagnóstico exato, técnica impecável, presença total para cada paciente. Por fora: tudo funcionando perfeitamente. Por dentro: enxaquecas semanais, dores que mudavam de lugar sem explicação.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                  fontSize: '1.25rem',
                  color: '#1E0E1A',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Quando a Constelação Familiar chegou até mim, não foi por curiosidade intelectual. Foi porque meu corpo simplesmente se recusou a continuar fingindo que a adequação excessiva não estava me sufocando.
              </p>
            </FadeIn>

            {/* Credenciais */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4 mt-4 border-l-2 pl-4" style={{ borderColor: 'rgba(60, 125, 60, 0.3)' }}>
                {credenciais.map((cred) => (
                  <span
                    key={cred}
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#3C7D3C',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    • {cred}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Foto — order-1 mobile, order-2 desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <FadeIn delay={0.2} className="w-full">
              <div className="absolute top-[-2rem] right-[2rem] bottom-[2rem] left-8 border border-primary opacity-10 z-0 hidden lg:block" />
              <div
                className="relative overflow-hidden w-full z-10 shadow-xl"
                style={{ maxWidth: '460px', aspectRatio: '4/5', margin: '0 auto' }}
              >
                <img
                  src="https://i.imgur.com/YIkxZTe.jpeg"
                  alt="Karina Crozariol"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
