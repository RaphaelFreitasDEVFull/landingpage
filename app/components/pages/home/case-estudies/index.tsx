import VerticalDivider from '@/app/components/divider/vertical'
import TitlePage from '@/app/components/title-page'
import { TbArrowNarrowRight } from 'react-icons/tb'

const CasaEstudies = () => {
  return (
    <section className="container py-16 w-full ">
      <TitlePage
        title="Estudos de Caso"
        subtitle="Explore exemplos reais de nosso sucesso comprovado em Marketing Digital por meio de nossos Estudos de Caso"
      />
      <div className="flex gap-4 w-full h-[280px] bg-black text-white my-8 rounded-xl items-center justify-center text-center">
        <div className="p-5 flex flex-col justify-around h-full">
          <p className="">
            Para um restaurante local, implementamos uma campanha de PPC
            direcionada que resultou em um aumento de 50% no tráfego do site e
            um aumento de 25% nas vendas.
          </p>
          <a href="#" className="flex items-center gap-3 hover:text-[#B9FF66]">
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>
        <VerticalDivider />
        <div className="p-5 flex flex-col justify-around h-full">
          <p className="">
            Para uma empresa de software B2B, desenvolvemos uma estratégia de
            SEO que resultou em um posicionamento na primeira página para
            palavras-chave importantes e um aumento de 200% no tráfego orgânico.
          </p>
          <a href="#" className="flex items-center gap-3 hover:text-[#B9FF66]">
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>
        <VerticalDivider />
        <div className="p-5 flex flex-col justify-around h-full">
          <p className="">
            Para uma cadeia de varejo nacional, criamos uma campanha de
            marketing nas redes sociais que aumentou os seguidores em 25% e
            gerou um aumento de 20% nas vendas online.
          </p>
          <a href="#" className="flex items-center gap-3 hover:text-[#B9FF66]">
            Leia mais
            <TbArrowNarrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CasaEstudies
