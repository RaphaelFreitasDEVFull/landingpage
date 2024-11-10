import TitlePage from '@/app/components/title-page'
import ServiceList from './services-list'

const MOCKUP_SERVICES = [
  {
    label: 'Otimização para Motores de Busca',
    url: '/images/cards/01.png',
    backColor: '#F3F3F3',
    textColor: 'verde',
  },
  {
    label: 'Publicidade PPC',
    url: '/images/cards/02.png',
    backColor: '#B9FF66',
    textColor: 'branco',
  },
  {
    label: 'Marketing para Midias Sociais',
    url: '/images/cards/03.png',
    backColor: 'fundoBlack',
    textColor: 'branco',
  },
  {
    label: 'Email Marketing',
    url: '/images/cards/04.png',
    backColor: '#F3F3F3',
    textColor: 'verde',
  },
  {
    label: 'Criação de Conteudo',
    url: '/images/cards/05.png',
    backColor: '#B9FF66',
    textColor: 'branco',
  },
  {
    label: 'Análise e Monitoramento',
    url: '/images/cards/06.png',
    backColor: 'fundoBlack',
    textColor: 'verde',
  },
]

const Services = () => {
  return (
    <section className="container mt-32">
      <TitlePage
        title="Serviços"
        subtitle="Na nossa agência de marketing digital, oferecemos uma variedade de serviços para ajudar empresas a crescer e ter sucesso online. Esses serviços incluem:"
      />
      <div className="grid grid-cols-2 gap-10 mt-16">
        {MOCKUP_SERVICES.map((service) => (
          <ServiceList {...service} key={service.label} />
        ))}
      </div>
    </section>
  )
}

export default Services
