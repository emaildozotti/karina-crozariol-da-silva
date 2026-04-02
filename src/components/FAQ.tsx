import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5512991153530?text=Ol%C3%A1%2C+Karina%21+Quero+saber+mais+sobre+o+processo+de+realinhamento+e+agendar+uma+conversa+inicial.'

const faqs = [
  {
    pergunta: 'Já fiz terapia durante anos e ainda me sinto presa.',
    resposta: 'A Constelação Familiar Sistêmica vai a um lugar diferente. Não atua apenas na sua narrativa individual, mas nos padrões enraizados no sistema em que você nasceu. Por isso muitos clientes relatam que um núcleo que parecia "imóvel" na terapia tradicional finalmente é acessado aqui.',
  },
  {
    pergunta: 'É possível fazer o processo 100% online?',
    resposta: 'Sim. Todo o acompanhamento é por videochamada. A profundidade do campo sistêmico independe de fronteiras físicas. Recomendo apenas que você tenha um espaço de silêncio e privacidade reservado para a hora da nossa sessão.',
  },
  {
    pergunta: 'Quanto tempo até começar a ver resultados práticos?',
    resposta: 'Muitos padrões profundos começam a ser reconhecidos logo nas primeiras reuniões. A maioria inicia uma mudança contínua de postura na sua rotina entre a 4ª e 8ª sessão. O importante é saber que o primeiro passo para isso tem data para acontecer.',
  },
  {
    pergunta: 'Nunca fiz terapia. Esse método é indicado para mim?',
    resposta: 'Não é necessária nenhuma vivência prévia ou conhecimento técnico sobre terapias. Você só precisa ter a disposição interna de olhar honestamente e sair do lugar que te machuca.',
  },
  {
    pergunta: 'Tem algum vínculo místico ou religioso?',
    resposta: 'Não. Trata-se de uma abordagem sistêmica fundamentada com foco técnico clínico (desenvolvida originalmente por Bert Hellinger). É o estudo das dinâmicas silenciosas do seu sistema familiar.',
  },
]

function FAQItem({ pergunta, resposta, isOpen, onToggle }: { pergunta: string; resposta: string, isOpen: boolean, onToggle: () => void }) {
  return (
    <div 
      style={{ 
        backgroundColor: isOpen ? '#FFFFFF' : 'transparent',
        border: '1px solid',
        borderColor: isOpen ? 'rgba(132,28,98,0.15)' : 'rgba(30,14,26,0.08)',
        borderRadius: '4px',
        marginBottom: '12px',
        transition: 'all 0.4s ease',
        boxShadow: isOpen ? '0 15px 35px rgba(30,14,26,0.03)' : 'none'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 md:py-6 px-6 md:px-8 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
            fontWeight: 600,
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: isOpen ? '#841C62' : '#1E0E1A',
            lineHeight: 1.4,
            transition: 'color 0.3s ease'
          }}
        >
          {pergunta}
        </span>
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: isOpen ? '#841C62' : 'transparent',
            border: isOpen ? 'none' : '1px solid rgba(30,14,26,0.15)',
            color: isOpen ? '#FFFFFF' : '#1E0E1A',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
              <p
                style={{
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: '0.95rem',
                  color: '#1E0E1A',
                  opacity: 0.8,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {resposta}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{ backgroundColor: '#F2EBF0' }} className="section-padding relative">
      <div className="container-ultra relative z-10">

        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
            Esclarecimentos
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
            O que você precisa saber <span style={{ fontStyle: 'italic', color: '#841C62' }}>antes de começar.</span>
          </h2>
        </FadeIn>

        {/* Accordion Ultra Premium */}
        <FadeIn>
          <div className="max-w-3xl mx-auto mb-28">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={faq.pergunta} 
                pergunta={faq.pergunta} 
                resposta={faq.resposta} 
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </FadeIn>

        {/* CTA Final Glassmorphism VIP Card */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto p-1 relative rounded-sm bg-gradient-to-b from-[#841C62]/10 to-transparent">
            <div 
              className="bg-white rounded-sm p-12 md:p-20 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 40px 80px rgba(30,14,26,0.06)' }}
            >
              
              <div className="w-16 h-16 bg-[#F2EBF0] rounded-full flex items-center justify-center mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#841C62' }}>
                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                  fontWeight: 600,
                  color: '#1E0E1A',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Você não precisa continuar sendo forte do <span style={{ fontStyle: 'italic', color: '#841C62' }}>mesmo jeito.</span>
              </h3>
              
              <p
                style={{
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: '1.05rem',
                  color: '#1E0E1A',
                  opacity: 0.75,
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: '600px'
                }}
              >
                Não cobro perfeição para começar. Exijo só o compromisso de quem chegou a um limite. A nossa conversa inicial é para isso: mapear se este caminho é pra você agora.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-4"
                style={{ 
                  backgroundColor: '#841C62', 
                  color: '#F5F0F2',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '4px',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  boxShadow: '0 10px 25px rgba(132,28,98,0.3)'
                }}
              >
                Agendar minha conversa inicial
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
