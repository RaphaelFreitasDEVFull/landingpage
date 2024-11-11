import { Button } from '@/app/components/button'
import Image from 'next/image'

const ADS = () => {
  return (
    <div className="flex flex-col lg:flex-row my-16 container bg-[#F3F3F3] rounded-lg w-full h-[350px] lg:h-auto">
      {/* Left side content */}
      <div className="py-6 px-4 flex flex-col gap-6 lg:max-w-[50%]">
        <h2 className="text-3xl lg:text-4xl font-medium">
          Vamos fazer as coisas acontecerem
        </h2>
        <p className="text-lg lg:text-base">
          Entre em contato conosco hoje mesmo para saber mais sobre como nossos
          serviços de marketing digital podem ajudar sua empresa a crescer e ter
          sucesso online.
        </p>
        <Button className="max-w-fit bg-black text-white hover:bg-[#B9FF66] hover:text-black transition-colors ease-in-out duration-300">
          Receba seu orçamento gratuitamente
        </Button>
      </div>

      {/* Right side image */}
      <div className="w-full hidden lg:w-[50%] lg:flex items-center justify-center">
        <Image
          src="/images/img-ads.png"
          width={360}
          height={360}
          alt="ads-logo"
          className="max-w-full h-auto" // Ensures image scales well on different screens
        />
      </div>
    </div>
  )
}

export default ADS
