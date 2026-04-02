import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const depoimentos = [
  {
    destaque: 'Meu corpo descansou de uma forma que eu não lembrava como era.',
    texto: 'Antes eu vivia num estado de alerta constante. Sempre achando que precisava fazer mais, ser mais, entregar mais. Meu corpo começou a colapsar e eu não entendia por quê, porque na minha cabeça eu estava funcionado bem. Depois do processo, identifiquei de onde vinha esse padrão de ter que provar o tempo todo.',
    nome: 'Fernanda T., 41 anos, empresária',
  },
  {
    destaque: 'Foi como finalmente ter um diagnóstico preciso.',
    texto: 'Fiz anos de terapia convencional e sei que foi importante. Mas havia um núcleo de coisa que não se movia. Com a Karina, em poucas sessões, chegamos exatamente nisso. Não foi assustador. Foi como curar algo que carregava há muito tempo. Hoje me relaciono do jeito que sempre quis.',
    nome: 'Claudia M., 47 anos, professora',
  },
  {
    destaque: 'Minha postura mudou, não só a corporal. A interna.',
    texto: 'O que me surpreendeu foi que o processo não foi sobre o que eu esperava trabalhar. Foi sobre algo que eu nem sabia que estava carregando. E quando apareceu, fez todo sentido. As dores físicas que eu tinha há anos foram cedendo gradualmente.',
    nome: 'Patricia L., 38 anos, nutricionista',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length)
  const next = () => setCurrent((c) => (c + 1) % depoimentos.length)

  return (
    <section style={{ backgroundColor: '#FAF7F9' }} className="section-padding pb-32">
      <div className="container-ultra">

        <FadeIn className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="eyebrow-ultra block" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
            Resultados
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
            O que acontece quando você <span style={{ fontStyle: 'italic', color: '#841C62' }}>vai à raiz</span>.
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Card Principal de Depoimento */}
          <div 
            className="relative bg-[#FFFFFF] rounded-sm p-10 md:p-16 w-full min-h-[400px] flex flex-col justify-between"
            style={{
              border: '1px solid rgba(132,28,98,0.08)',
              boxShadow: '0 25px 50px rgba(75, 4, 52, 0.05)'
            }}
          >

            {/* Aspa decorativa Elegante */}
            <span
              className="absolute pointer-events-none select-none"
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '10rem',
                color: '#841C62',
                opacity: 0.05,
                lineHeight: 1,
                top: '20px',
                left: '20px',
              }}
            >
              "
            </span>

            <div className="relative z-10 flex-1 flex items-center mb-10 mt-4 px-4 md:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(4px)', y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6 w-full"
                >
                  <p
                    style={{
                      fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                      color: '#4B0434',
                      lineHeight: 1.4,
                      margin: 0,
                      textAlign: 'center'
                    }}
                  >
                    "{depoimentos[current].destaque}"
                  </p>

                  <p
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '1rem',
                      color: '#1E0E1A',
                      opacity: 0.75,
                      lineHeight: 1.8,
                      margin: 0,
                      textAlign: 'center',
                      maxWidth: '680px',
                      alignSelf: 'center'
                    }}
                  >
                    {depoimentos[current].texto}
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-6">
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#841C62', opacity: 0.3 }}></div>
                    <p
                      style={{
                        fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#841C62',
                        letterSpacing: '0.05em',
                        margin: 0,
                        textTransform: 'uppercase'
                      }}
                    >
                      {depoimentos[current].nome}
                    </p>
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#841C62', opacity: 0.3 }}></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-between border-t relative z-10 pt-8" style={{ borderColor: 'rgba(132,28,98,0.1)' }}>
              <button
                onClick={prev}
                className="group flex items-center transition-all"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ border: '1px solid rgba(132,28,98,0.2)' }}>
                  <span style={{ color: '#841C62', fontSize: '1.2rem' }}>←</span>
                </div>
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    style={{
                      width: i === current ? '32px' : '10px',
                      height: '4px',
                      borderRadius: '2px',
                      background: i === current ? '#841C62' : 'rgba(132,28,98,0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="group flex items-center transition-all"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#841C62]" style={{ border: '1px solid rgba(132,28,98,0.2)' }}>
                  <span className="text-[#841C62] group-hover:text-white transition-colors" style={{ fontSize: '1.2rem' }}>→</span>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
