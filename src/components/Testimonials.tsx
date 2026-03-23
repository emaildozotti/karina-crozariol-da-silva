import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const depoimentos = [
  {
    destaque: 'Meu corpo descansou de uma forma que eu não lembrava como era.',
    texto: 'Antes eu vivia num estado de alerta constante. Sempre achando que precisava fazer mais, ser mais, entregar mais. Meu corpo começou a colapsar e eu não entendia por quê, porque na minha cabeça eu estava "funcionando bem". Depois do processo com a Karina, identifiquei de onde vinha esse padrão de ter que provar o tempo todo. E algo nele afrouxou. Meu corpo descansou de uma forma que eu não lembrava como era.',
    nome: 'Fernanda T., 41 anos, empresária',
  },
  {
    destaque: 'Foi como finalmente ter um diagnóstico preciso para algo que eu carregava há muito tempo.',
    texto: 'Fiz anos de terapia convencional e sei que foi importante. Mas havia um núcleo de coisa que não se movia. Com a Karina, em poucas sessões, chegamos exatamente nisso. Não foi assustador. Foi como finalmente ter um diagnóstico preciso para algo que eu carregava há muito tempo. Hoje me relaciono de um jeito diferente com minha família e comigo mesma.',
    nome: 'Claudia M., 47 anos, professora universitária',
  },
  {
    destaque: 'Minha postura mudou, não só a corporal. A interna.',
    texto: 'O que me surpreendeu foi que o processo não foi sobre o que eu esperava trabalhar. Foi sobre algo que eu nem sabia que estava carregando. E quando apareceu, fez todo sentido. As dores físicas que eu tinha há anos foram cedendo gradualmente. Minha postura mudou, não só a corporal. A interna.',
    nome: 'Patricia L., 38 anos, nutricionista',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + depoimentos.length) % depoimentos.length)
  const next = () => setCurrent((c) => (c + 1) % depoimentos.length)

  return (
    <section style={{ backgroundColor: '#FAF7F9' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62' }}>
            Depoimentos
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#1E0E1A',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            O que acontece quando alguém vai à raiz
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <div className="relative" style={{ minHeight: '360px' }}>

            {/* Aspa decorativa */}
            <span
              className="absolute select-none pointer-events-none"
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '120px',
                color: '#841C62',
                opacity: 0.15,
                lineHeight: 1,
                top: '-20px',
                left: '-10px',
                zIndex: 0,
              }}
            >
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 1 }}
                className="flex flex-col gap-6 pt-10"
              >
                {/* Destaque */}
                <p
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                    color: '#841C62',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {depoimentos[current].destaque}
                </p>

                {/* Texto completo */}
                <p
                  style={{
                    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: '0.95rem',
                    color: '#1E0E1A',
                    opacity: 0.82,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {depoimentos[current].texto}
                </p>

                {/* Nome */}
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: '#1E0E1A',
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {`— ${depoimentos[current].nome}`}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles prev/next */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                background: 'none',
                border: '1px solid rgba(132,28,98,0.3)',
                borderRadius: '2px',
                padding: '0.6rem 1rem',
                cursor: 'pointer',
                color: '#841C62',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget as HTMLButtonElement
                t.style.backgroundColor = '#841C62'
                t.style.color = '#F5F0F2'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget as HTMLButtonElement
                t.style.backgroundColor = 'transparent'
                t.style.color = '#841C62'
              }}
            >
              &#8592; anterior
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#841C62' : 'rgba(132,28,98,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                background: 'none',
                border: '1px solid rgba(132,28,98,0.3)',
                borderRadius: '2px',
                padding: '0.6rem 1rem',
                cursor: 'pointer',
                color: '#841C62',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget as HTMLButtonElement
                t.style.backgroundColor = '#841C62'
                t.style.color = '#F5F0F2'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget as HTMLButtonElement
                t.style.backgroundColor = 'transparent'
                t.style.color = '#841C62'
              }}
            >
              próximo &#8594;
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
