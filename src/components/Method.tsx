import { FadeIn } from '../App'

const pilares = [
  {
    num: '01',
    titulo: 'Limpeza de Camadas Sistêmicas',
    texto: 'Você não carrega só suas histórias. Carrega padrões de geração em geração: lealdades invisíveis, adequações aprendidas antes de saber que eram escolhas. Aqui a gente vai à raiz exata.',
  },
  {
    num: '02',
    titulo: 'Reconexão com a Postura Interna',
    texto: 'Existe uma versão de você que sabe quem é, que tem limites, que escolhe com clareza. O processo não cria essa versão. Ela já está lá. Nosso único trabalho é remover o que colocaram na frente dela.',
  },
  {
    num: '03',
    titulo: 'Expressão Autêntica Diária',
    texto: 'O processo não termina na sessão. Ele se instala na forma como você responde, escolhe, se posiciona. Você começa a viver a partir de um lugar diferente.',
  },
]

export default function Method() {
  return (
    <section style={{ backgroundColor: '#FAF7F9' }} className="section-padding relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#F2EBF0] to-transparent pointer-events-none" />
      
      <div className="container-ultra relative z-10">

        {/* Cabeçalho */}
        <FadeIn className="text-center mb-20">
          <span className="eyebrow-ultra block mb-4" style={{ color: '#841C62', letterSpacing: '0.25em' }}>
            A Abordagem
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
              fontWeight: 600,
              color: '#1E0E1A',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
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
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
              color: '#4B0434',
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Precisão na descoberta do que o seu corpo e o seu sistema carregam em silêncio. A diferença não está na técnica, mas na revelação exata da causa raíz.
          </p>
        </FadeIn>

        {/* 3 Pilares com Box styling Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pilares.map((pilar, index) => (
            <FadeIn key={pilar.num} delay={index * 0.1}>
              <div 
                className="group relative p-10 h-full rounded-sm overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 bg-white"
                style={{ 
                  border: '1px solid rgba(132, 28, 98, 0.08)',
                  boxShadow: '0 20px 40px rgba(30, 14, 26, 0.04)'
                }}
              >
                
                {/* Linha colorida de destaque no topo */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#841C62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

                {/* Número decorativo como elemento de design (não texto grande de fundo) */}
                <div 
                  className="mb-8 w-16 h-16 rounded-full flex items-center justify-center relative"
                  style={{ backgroundColor: '#F2EBF0' }}
                >
                  <span
                    style={{
                      fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontSize: '1.4rem',
                      color: '#841C62',
                      letterSpacing: '-2px'
                    }}
                  >
                    {pilar.num}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                      fontWeight: 600,
                      color: '#1E0E1A',
                      fontSize: '1.25rem',
                      margin: '0 0 1rem 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {pilar.titulo}
                  </h3>
                  <div className="w-10 h-px bg-[#841C62]/20 mx-auto mb-6" />
                  <p
                    style={{
                      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                      fontSize: '0.95rem',
                      color: '#1E0E1A',
                      opacity: 0.75,
                      lineHeight: 1.7,
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

        {/* Citação / Promise em formato de Box Premium */}
        <FadeIn>
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#841C62]/20 via-transparent to-[#841C62]/20 rounded-sm blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1E0E1A] p-12 md:p-16 rounded-sm flex flex-col items-center justify-center text-center">
              
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-30 text-[#F5F0F2]">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>

              <blockquote
                style={{
                  margin: '0',
                  maxWidth: '720px',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Playfair Display", ui-serif, Georgia, serif',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                    color: '#F5F0F2',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  "Não prometo que o processo vai ser fácil ou indolor. Prometo que vai ser real. E que, o que você vai encontrar, é VOCÊ de forma autêntica."
                </p>
              </blockquote>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
