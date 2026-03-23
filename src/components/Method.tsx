import { FadeIn } from '../App'

const pilares = [
  {
    num: '01',
    titulo: 'Limpeza de Camadas Sistêmicas',
    texto: 'Você não carrega só suas histórias. Carrega padrões de geração em geração: lealdades invisíveis, adequações aprendidas antes de saber que eram escolhas. Aqui a gente vai à raiz exata. Não ao que você sente, mas ao que você herdou sem escolher. Quando você vê essas camadas, o corpo reconhece. E começa a soltar.',
  },
  {
    num: '02',
    titulo: 'Reconexão com a Sua Postura Interna',
    texto: 'Existe uma versão de você que sabe quem é, que tem limites, que escolhe com clareza, que pertence sem se perder. O processo não cria essa versão. Ela já está lá. O trabalho é remover o que foi colocado na frente dela.',
  },
  {
    num: '03',
    titulo: 'Expressão Autêntica no Cotidiano',
    texto: 'O processo não termina na sessão. Ele se instala na forma como você responde, escolhe, se posiciona. Você começa a viver a partir de um lugar diferente: não do que esperam de você, mas do que você realmente é.',
  },
]

export default function Method() {
  return (
    <section style={{ backgroundColor: '#FAF7F9' }} className="section-padding">
      <div className="container-ultra">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-16">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62' }}>
            Método
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#1E0E1A',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              lineHeight: 1.2,
              margin: '0 0 1.5rem 0',
            }}
          >
            Método Expressão do Ser
          </h2>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#1E0E1A',
              opacity: 0.8,
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Não trabalho com autoconhecimento genérico. Trabalho com precisão de diagnóstico, a mesma que aprendi em 28 anos de odontologia, aplicada ao que o corpo e o sistema carregam em silêncio. A diferença não está na técnica. Está em onde a técnica vai.
          </p>
        </FadeIn>

        {/* 3 Pilares */}
        <div className="flex flex-col gap-8 mb-16">
          {pilares.map((pilar, index) => (
            <FadeIn key={pilar.num} delay={index * 0.1}>
              <div className="relative p-10 rounded-sm overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(132,28,98,0.1)' }}
              >
                {/* Numeração decorativa fundo */}
                <span
                  className="absolute top-4 left-6 select-none pointer-events-none"
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '5rem',
                    color: '#841C62',
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {pilar.num}
                </span>

                <div className="relative z-10">
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                      fontWeight: 700,
                      color: '#841C62',
                      fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                      margin: '0 0 1rem 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {pilar.titulo}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '1rem',
                      color: '#1E0E1A',
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {pilar.texto}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* O que não prometo */}
        <FadeIn>
          <blockquote
            style={{
              borderLeft: '2px solid #3C7D3C',
              paddingLeft: '2rem',
              margin: '0',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                color: '#1E0E1A',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Não prometo que vai ser fácil. Prometo que vai ser real. E que o que você encontrar vai ser seu, não uma versão melhorada do que os outros esperavam de você.
            </p>
          </blockquote>
        </FadeIn>

      </div>
    </section>
  )
}
