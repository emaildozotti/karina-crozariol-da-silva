import { FadeIn } from '../App'

const passos = [
  {
    num: '01',
    titulo: 'Conversa Inicial',
    texto: 'Antes de qualquer sessão, a gente se encontra para entender onde você está. Não é triagem. É o começo do diagnóstico. Quero ouvir o que você carrega, onde sente e o que já tentou. A partir daí, a gente define juntas.',
  },
  {
    num: '02',
    titulo: 'As Sessões',
    texto: 'As sessões acontecem online, em espaço privado, com combinação de vivência sistêmica e orientação processual. Não existe um protocolo único porque cada sistema é diferente.',
  },
  {
    num: '03',
    titulo: 'A Transformação',
    texto: 'Não é um insight isolado. É uma mudança de postura interna que se instala no cotidiano. Você percebe padrões antes de entrar neles. Reconhece sua voz nos momentos em que ela costumava sumir.',
  },
]

const desmistificacao = [
  'Constelação Familiar é uma abordagem terapêutica sistêmica. Sem viés religioso.',
  'A vivência sistêmica não depende de narrativa detalhada.',
  'O processo oferece clareza. O que você faz com ela é escolha sua.',
  'Funciona online com total precisão.',
]

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#1E0E1A' }} className="section-padding relative overflow-hidden">

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#841C62]/30" />

      {/* Subtle glowing orb in background */}
      <div
        className="absolute top-0 right-[-10%] w-[50%] h-[70%] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(132,28,98,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="container-ultra relative z-10">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
            A Jornada
          </span>
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
            O caminho do <span style={{ fontStyle: 'italic', color: '#841C62' }}>diagnóstico</span> à expressão.
          </h2>
        </FadeIn>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 lg:px-8">
          {passos.map((passo, index) => (
            <FadeIn key={passo.num} delay={index * 0.1}>
              <div 
                className="flex flex-col gap-6 p-10 h-full rounded-sm relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#841C62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '3.5rem',
                    color: 'rgba(245, 240, 242, 0.15)',
                    lineHeight: 1,
                    position: 'absolute',
                    top: '-5px',
                    right: '15px'
                  }}
                >
                  {passo.num}
                </span>
                
                <h3
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 600,
                    color: '#F5F0F2',
                    fontSize: '1.25rem',
                    margin: 0,
                    lineHeight: 1.3,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {passo.titulo}
                </h3>
                
                <p
                  style={{
                    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: '0.95rem',
                    color: 'rgba(245, 240, 242, 0.7)',
                    lineHeight: 1.6,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {passo.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação em formato de caixas menores */}
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-[#4B0434]/30 rounded-sm p-10 lg:p-14 border border-[#841C62]/20 relative overflow-hidden backdrop-blur-sm">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F5F0F2 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

            <h3
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 600,
                color: '#F5F0F2',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                margin: '0 0 2rem 0',
                textAlign: 'center',
              }}
            >
              Compreendendo a <span style={{ fontStyle: 'italic', color: '#841C62' }}>dinâmica da sessão</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
              {desmistificacao.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <span
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 300,
                      color: '#841C62',
                      fontSize: '1.1rem',
                      marginTop: '-2px',
                    }}
                  >
                    ✦
                  </span>
                  <p
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '0.95rem',
                      color: 'rgba(245, 240, 242, 0.85)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
               <p
                  style={{
                    fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.15rem, 2vw, 1.3rem)',
                    color: '#F5F0F2',
                    opacity: 0.6,
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '480px',
                    margin: 0,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem'
                  }}
                >
                  Não exijo que saiba o método, apenas disposição verdadeira para curar a raiz.
                </p>
            </div>
            
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
