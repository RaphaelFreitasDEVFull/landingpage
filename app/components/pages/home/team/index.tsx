import TitlePage from '@/app/components/title-page'
import CardTeam from './card-team'

const Team = () => {
  const MOCKUP = [
    {
      name: 'John Smith',
      url: '/images/team/01.png',
      role: 'CEO e Fundador',
      desc: 'Mais de 10 anos de experiência em marketing digital. Especialização em SEO, PPC e estratégia de conteúdo.',
    },
    {
      name: 'Jane Doe',
      url: '/images/team/02.png',
      role: 'Diretora de Operações',
      desc: 'Mais de 7 anos de experiência em gestão de projetos e liderança de equipes. Habilidades sólidas em organização e comunicação.',
    },
    {
      name: 'Michael Brown',
      url: '/images/team/03.png',
      role: 'Especialista Senior de SEO',
      desc: 'Mais de 5 anos de experiência em SEO e criação de conteúdo. Proficiência em pesquisa de palavras-chave e otimização on-page.',
    },
    {
      name: 'Emily Johnson',
      url: '/images/team/04.png',
      role: 'Gerente de PPC',
      desc: 'Mais de 3 anos de experiência em publicidade paga (PPC). Habilidade em gestão de campanhas e análise de desempenho.',
    },
    {
      name: 'Brian Williams',
      url: '/images/team/05.png',
      role: 'Especialista em Midias Sociais',
      desc: 'Mais de 4 anos de experiência em marketing nas redes sociais. Proficiência na criação e agendamento de conteúdo, análise de métricas e construção de engajamento.',
    },
    {
      name: 'Sarah Kim',
      url: '/images/team/06.png',
      role: 'Criadora de Conteudo',
      desc: 'Mais de 2 anos de experiência em redação e edição. Habilidade em criar conteúdo envolvente e otimizado para SEO em diversas indústrias.',
    },
  ]

  return (
    <section className="container my-12 flex flex-col gap-10">
      <TitlePage
        title="Time"
        subtitle="Conheça a equipe qualificada e experiente por trás de nossas estratégias de marketing digital bem-sucedidas"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {MOCKUP.map((item, i) => (
          <CardTeam {...item} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Team
