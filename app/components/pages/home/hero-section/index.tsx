import { Button } from '@/app/components/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between h-full w-full mt-32 container">
      <div className="flex flex-col max-w-[50%]">
        <h1 className="text-4xl font-medium line">
          Navegando pelo cenário digital rumo ao sucesso
        </h1>
        <p className="mt-8 ">
          Nossa agência de marketing digital ajuda empresas a crescer e ter
          sucesso online por meio de uma variedade de serviços, incluindo SEO,
          PPC, marketing em redes sociais e criação de conteúdo.
        </p>
        <Button className="bg-black text-background mt-8 w-max hover:bg-[#B9FF66] hover:text-black transition-colors duration-200">
          Marque uma consultoria
        </Button>
      </div>
      <div>
        <Image
          src={'/images/img-hero.png'}
          width={500}
          height={500}
          alt="Imagem da Hero Section"
          unoptimized
        />
      </div>
    </section>
  )
}

export default HeroSection
