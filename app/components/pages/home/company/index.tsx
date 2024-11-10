import Image from 'next/image'

const companyLogos = [
  { label: 'Amazon', url: '/images/logos/amazon.png' },
  { label: 'Dribble', url: '/images/logos/dribble.png' },
  { label: 'HubSpot', url: '/images/logos/HubSpot.png' },
  { label: 'Netflix', url: '/images/logos/netflix.png' },
  { label: 'Notion', url: '/images/logos/notion.png' },
  { label: 'zoom', url: '/images/logos/zoom.png' },
]

const Company = () => {
  return (
    <section>
      <div className="container flex items-center justify-around mt-8">
        {companyLogos.map((company) => (
          <Image
            src={company.url}
            width={120}
            height={48}
            alt={`Logo da empresa ${company.label}`}
            key={company.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Company
