import { FadeIn } from '../App'

const passos = [
  {
    num: '01',
    titulo: 'Conversa Inicial',
    texto: 'Antes de qualquer sessão, a gente se encontra para entender onde você está. Não é triagem. É o começo do diagnóstico. Quero ouvir o que você carrega, onde sente e o que já tentou. A partir daí, a gente define juntas se esse processo faz sentido para o seu momento.',
  },
  {
    num: '02',
    titulo: 'As Sessões',
    texto: 'As sessões acontecem online, em espaço privado, com combinação de vivência sistêmica e orientação processual. Não existe um protocolo único porque cada sistema é diferente. O que não muda: a profundidade do diagnóstico e a presença em cada encontro.',
  },
  {
    num: '03',
    titulo: 'A Transformação',
    texto: 'Não é um insight isolado. É uma mudança de postura interna que se instala no cotidiano. Você começa a perceber padrões antes de entrar neles. A responder diferente em situações que antes te travavam. A reconhecer sua voz nos momentos em que ela costumava sumir.',
  },
]

const desmistificacao = [
  'Constelação Familiar é uma abordagem terapêutica com base em dinâmicas sistêmicas. Não requer crença religiosa.',
  'A vivência sistêmica não depende de narrativa detalhada.',
  'O processo oferece clareza. O que você faz com ela é sua escolha.',
  'O campo sistêmico não depende de presença física. Funciona online.',
  'Algumas pessoas relatam mudanças a partir da primeira sessão.',
]

export default function HowItWorks() {
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
          bottom: '15%',
          left: '5%',
          whiteSpace: 'nowrap',
          zIndex: 1,
        }}
      >
        postura interna
      </span>

      <div className="container-ultra relative z-10">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#3C7D3C' }}>
            Como funciona
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#F5F0F2',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            O caminho do diagnóstico à expressão
          </h2>
        </FadeIn>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {passos.map((passo, index) => (
            <FadeIn key={passo.num} delay={index * 0.1}>
              <div className="flex flex-col gap-4">
                <span
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '3rem',
                    color: '#3C7D3C',
                    lineHeight: 1,
                  }}
                >
                  {passo.num}
                </span>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    color: '#F5F0F2',
                    fontSize: '1.1rem',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {passo.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: '0.95rem',
                    color: '#F5F0F2',
                    opacity: 0.82,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {passo.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação */}
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h3
              style={{
                fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#F5F0F2',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                margin: '0 0 1.5rem 0',
                textAlign: 'center',
              }}
            >
              O que acontece na sessão: perguntas diretas sobre Constelação Familiar
            </h3>
            <ul className="flex flex-col gap-4">
              {desmistificacao.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 600,
                      color: '#3C7D3C',
                      fontSize: '1rem',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ✓
                  </span>
                  <p
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '0.95rem',
                      color: '#F5F0F2',
                      opacity: 0.85,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Remove ansiedade */}
        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#F5F0F2',
              opacity: 0.75,
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '3rem auto 0 auto',
            }}
          >
            Não precisa saber tudo sobre Constelação Familiar para começar. Precisa só de disposição honesta de encontrar o que está na raiz.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
