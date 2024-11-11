import VerticalDivider from '@/app/components/divider/vertical'
import TitlePage from '@/app/components/title-page'
import { TbArrowNarrowRight } from 'react-icons/tb'

const CasaEstudies = () => {
  return (
    <section className="container pt-48 lg:pt-16 w-full">
      <TitlePage
        title="Estudos de Caso"
        subtitle="Explore exemplos reais de nosso sucesso comprovado em Marketing Digital por meio de nossos Estudos de Caso"
      />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full h-full bg-black text-white my-8 rounded-xl items-center justify-center text-center lg:text-left">
        {/* First Case Study */}
        <div className="p-5 flex flex-col justify-between h-full w-full lg:w-[30%]">
          <p className="text-lg lg:text-base">
            Para um restaurante local, implementamos uma campanha de PPC
            direcionada que resultou em um aumento de 50% no tráfego do site e
            um aumento de 25% nas vendas.
          </p>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-[#B9FF66] mt-4"
          >
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block">
          <VerticalDivider />
        </div>

        {/* Second Case Study */}
        <div className="p-5 flex flex-col justify-between h-full w-full lg:w-[30%]">
          <p className="text-lg lg:text-base">
            Para uma empresa de software B2B, desenvolvemos uma estratégia de
            SEO que resultou em um posicionamento na primeira página para
            palavras-chave importantes e um aumento de 200% no tráfego orgânico.
          </p>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-[#B9FF66] mt-4"
          >
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block">
          <VerticalDivider />
        </div>

        {/* Third Case Study */}
        <div className="p-5 flex flex-col justify-between h-full w-full lg:w-[30%]">
          <p className="text-lg lg:text-base">
            Para uma cadeia de varejo nacional, criamos uma campanha de
            marketing nas redes sociais que aumentou os seguidores em 25% e
            gerou um aumento de 20% nas vendas online.
          </p>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-[#B9FF66] mt-4"
          >
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CasaEstudies
