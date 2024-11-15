import TitlePage from '@/app/components/title-page'
import Card from './card'

const MOCKUP = [
  {
    id: 1,
    title: 'Consultoria',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
  {
    id: 2,
    title: 'Pesquisa e Desenvolvimento de Estratégia',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
  {
    id: 3,
    title: 'Implementação',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
  {
    id: 4,
    title: 'Monitoramento e Otimização',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
  {
    id: 5,
    title: 'Relatórios e Comunicação',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
  {
    id: 6,
    title: 'Melhoria continua',
    description:
      'Durante a consulta inicial, discutiremos os objetivos e metas do seu negócio, o público-alvo e as estratégias de marketing atuais. Isso nos permitirá entender suas necessidades e personalizar nossos serviços para atender da melhor forma possível aos seus requisitos',
  },
]

const WorkingProcess = () => {
  return (
    <section className="container py-16 px-4 sm:px-6 md:px-8">
      <TitlePage
        title="Nosso processo de trabalho"
        subtitle="Guia passo-a-passo para alcançar os objetivos do seu negócio"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {MOCKUP.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default WorkingProcess
