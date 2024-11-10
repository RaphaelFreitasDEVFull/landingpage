import { Button } from '@/app/components/button'
import Image from 'next/image'

const ADS = () => {
  return (
    <div className="flex my-16 container bg-[#F3F3F3] rounded-lg w-full h-[350px]">
      <div className="py-6 px-4 flex flex-col gap-10 max-w-[50%]">
        <h2 className="text-4xl font-medium">
          Vamos fazer as coisas acontecerem
        </h2>
        <p>
          Entre em contato conosco hoje mesmo para saber mais sobre como nossos
          serviços de marketing digital podem ajudar sua empresa a crescer e ter
          sucesso online.
        </p>
        <Button className="max-w-fit bg-black text-white  hover:bg-[#B9FF66] hover:text-black transition-colors">
          Receba seu orçamento gratuitamente
        </Button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={'/images/img-ads.png'}
          width={360}
          height={360}
          alt="ads-logo"
        />
      </div>
    </div>
  )
}

export default ADS
