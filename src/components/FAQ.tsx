import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5512991153530?text=Ol%C3%A1%2C+Karina%21+Quero+saber+mais+sobre+o+processo+de+realinhamento+e+agendar+uma+conversa+inicial.'

const faqs = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou.',
    resposta: 'A Constelação Familiar Sistêmica vai a um lugar diferente: os padrões que não estão na sua história individual, mas no sistema que você herdou. Muitas pessoas que chegam até mim fizeram anos de terapia e ainda sentiam um núcleo imóvel. É exatamente aí que o trabalho sistêmico atua.',
  },
  {
    pergunta: 'Funciona online?',
    resposta: 'Sim. Todas as sessões acontecem por videochamada. O campo sistêmico não precisa de presença física para operar. O que você precisa é de um espaço com privacidade, sem interrupções e com conexão estável.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta: 'Sei que é uma decisão financeira real. Sei também que o custo de permanecer num padrão que adoece, que desgasta relacionamentos e que mantém você distante de si mesma é um custo que o corpo e a vida cobram de outras formas. Na conversa inicial, a gente fala sobre formatos e valores com transparência.',
  },
  {
    pergunta: 'Quanto tempo leva o processo?',
    resposta: 'A maioria das pessoas começa a perceber mudanças concretas de postura e de padrão entre a 4ª e a 8ª sessão. O começo tem uma data. E ele está a uma conversa de distância.',
  },
  {
    pergunta: 'Nunca fiz terapia. Por onde começo?',
    resposta: 'Pela conversa inicial. Não precisa ter experiência prévia. O que importa é a disposição para olhar honestamente para o que você está carregando. O resto eu te acompanho.',
  },
  {
    pergunta: 'Constelação Familiar é misticismo ou tem base técnica?',
    resposta: 'Tem base técnica. É uma abordagem desenvolvida por Bert Hellinger, com décadas de aplicação clínica. Trabalha com dinâmicas que regem sistemas familiares e como padrões se transmitem de geração em geração. Não requer crença religiosa. Requer disposição para ver.',
  },
]

function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(30,14,26,0.15)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: '#1E0E1A',
            lineHeight: 1.5,
          }}
        >
          {pergunta}
        </span>
        <span
          style={{
            color: '#841C62',
            flexShrink: 0,
            display: 'inline-flex',
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                fontSize: '0.95rem',
                color: '#1E0E1A',
                opacity: 0.78,
                lineHeight: 1.75,
                margin: 0,
                paddingBottom: '1.25rem',
              }}
            >
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section style={{ backgroundColor: '#F2EBF0' }} className="section-padding">
      <div className="container-ultra">

        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62' }}>
            Perguntas frequentes
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
            O que você precisa saber antes de começar
          </h2>
        </FadeIn>

        {/* Accordion */}
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-20">
            {faqs.map((faq) => (
              <FAQItem key={faq.pergunta} pergunta={faq.pergunta} resposta={faq.resposta} />
            ))}
          </div>
        </FadeIn>

        {/* CTA Final */}
        <FadeIn delay={0.1} className="text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
            <h3
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
              Você não precisa continuar sendo forte do jeito que te ensinou a ser.
            </h3>
            <p
              style={{
                fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                fontSize: '1rem',
                color: '#1E0E1A',
                opacity: 0.78,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Não precisa ter certeza para começar. Precisa só de uma coisa: a honestidade de reconhecer que o estado em que você está não é o estado em que você quer continuar. A conversa inicial não compromete nada. Não é um contrato. É um encontro. Se algo no que você leu aqui soou como verdade, isso já é suficiente para dar o próximo passo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer rounded-sm font-sans text-sm tracking-widest uppercase"
              style={{ backgroundColor: '#841C62', color: '#F5F0F2' }}
            >
              Agendar minha conversa inicial
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
