import TitlePage from '@/app/components/title-page'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const Testimonies = () => {
  return (
    <section className="container py-12  flex-col gap-10 items-center hidden lg:flex ">
      <TitlePage
        title="Depoimentos"
        subtitle="Ouça nossos clientes satisfeitos: Leia nossos depoimentos para saber mais sobre nossos serviços de Marketing Digital"
      />
      <div className="bg-black p-12 rounded-2xl ">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center w-full justify-center">
              <Image
                src={'/images/buble.png'}
                width={500}
                height={500}
                alt="testimonies"
              />
              <p className="absolute text-white z-20 w-[450px] text-sm font-light flex items-center justify-center top-10">
                Estamos trabalhando com a Positivus há um ano e vimos um aumento
                significativo no tráfego do site e nas leads como resultado dos
                esforços deles. A equipe é profissional, ágil e realmente se
                importa com o sucesso do nosso negócio. Recomendamos fortemente
                a Positivus para qualquer empresa que queira crescer sua
                presença online.
              </p>
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-emerald-200">Jhon Smith</h2>
                <p className="text-sm font-light text-white">
                  CEO e Fundado da XYZ Enteprise
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-8" />
          <CarouselNext className="mr-8" />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonies
