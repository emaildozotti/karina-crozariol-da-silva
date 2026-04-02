import { FadeIn } from '../App'

const credenciais = [
  'Terapeuta Sistêmica e Consteladora Familiar',
  '28 anos de prática clínica em odontologia',
  'Orientadora de Propósito e Missão de Vida',
]

export default function About() {
  return (
    <section style={{ backgroundColor: '#F2EBF0' }} className="section-padding">
      <div className="container-ultra">

        {/* Linha decorativa acima do título */}
        <FadeIn className="flex justify-center mb-16">
          <div style={{ width: '60px', height: '1px', backgroundColor: '#3C7D3C' }} />
        </FadeIn>

        {/* Layout: flex-col no mobile, grid no desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Texto — order-2 mobile, order-1 desktop */}
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <FadeIn>
              <span className="eyebrow-ultra block mb-3" style={{ color: '#841C62' }}>
                Sobre Karina
              </span>
              <h2
                style={{
                  fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#1E0E1A',
                  fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                A dentista que aprendeu a curar a alma com a mesma precisão que curava os dentes
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p
                style={{
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: '1rem',
                  color: '#1E0E1A',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Por 28 anos, fui dentista. Treinei a precisão como forma de existir. Diagnóstico exato, técnica impecável, presença total para cada paciente. Por fora: tudo funcionando. Por dentro: enxaquecas semanais, dores que mudavam de lugar sem explicação, um perfeccionismo que eu achava que era virtude e que foi se revelando uma forma de controle para não desmoronar.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                style={{
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: '1rem',
                  color: '#1E0E1A',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Quando a Constelação Familiar chegou até mim, não foi por curiosidade espiritual. Foi porque meu corpo simplesmente se recusou a continuar fingindo. Eu lembro do momento em que, numa vivência, algo em mim reconheceu um padrão que não era meu. Uma lealdade que eu carregava desde antes de poder escolher. E quando eu vi isso, com clareza, algo no meu sistema nervoso afrouxou.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: '1rem',
                  color: '#1E0E1A',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                As enxaquecas foram cedendo. O aperto no peito foi abrindo. Não porque eu "trabalhei em mim". Mas porque eu finalmente voltei para mim. Hoje uso a precisão cirúrgica de diagnóstico que aprendi na odontologia para revelar o que está na raiz, não o que aparece na superfície.
              </p>
            </FadeIn>

            {/* Credenciais */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-3 mt-2">
                {credenciais.map((cred) => (
                  <span
                    key={cred}
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#3C7D3C',
                      border: '1px solid #3C7D3C',
                      borderRadius: '2px',
                      padding: '0.5rem 1rem',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Foto — order-1 mobile, order-2 desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="relative overflow-hidden rounded-sm w-full"
              style={{ maxWidth: '420px', aspectRatio: '3/4' }}
            >
              <img
                src="/images/karina-02.jpg"
                alt="Karina Crozariol"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent && !parent.querySelector('.placeholder-svg')) {
                    const div = document.createElement('div')
                    div.className = 'placeholder-svg w-full h-full flex items-center justify-center'
                    div.style.cssText = 'background:linear-gradient(135deg,#F2EBF0 0%,#d4c8d0 100%);'
                    div.innerHTML = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="28" r="16" stroke="#841C62" stroke-width="2" stroke-opacity="0.5"/><path d="M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32" stroke="#841C62" stroke-width="2" stroke-opacity="0.5"/></svg>`
                    parent.appendChild(div)
                  }
                }}
              />
              {/* Treatment B: magenta gradient overlay at base */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(132,28,98,0.15) 0%, transparent 100%)',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
