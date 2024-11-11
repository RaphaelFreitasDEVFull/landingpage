import { Button } from '@/app/components/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between h-full w-full mt-56 lg:mt-32 container">
      <div className="flex flex-col max-w-full lg:max-w-[50%] px-4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
          Navegando pelo cenário digital rumo ao sucesso
        </h1>
        <p className="mt-6 text-base lg:text-lg">
          Nossa agência de marketing digital ajuda empresas a crescer e ter
          sucesso online por meio de uma variedade de serviços, incluindo SEO,
          PPC, marketing em redes sociais e criação de conteúdo.
        </p>
        <Button className="bg-black text-background mt-8 w-max hover:bg-[#B9FF66] hover:text-black transition-colors duration-300 ease-in-out">
          Marque uma consultoria
        </Button>
      </div>

      <div className="mt-8 lg:mt-0 w-full lg:w-[50%] flex justify-center">
        <Image
          src={'/images/img-hero.png'}
          width={500}
          height={500}
          alt="Imagem da Hero Section"
          unoptimized
          className="max-w-full h-auto"
        />
      </div>
    </section>
  )
}

export default HeroSection
