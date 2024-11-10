import { Button } from '@/app/components/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { TbArrowNarrowRight } from 'react-icons/tb'

type ServiceListProps = {
  label: string
  url: string
  backColor: string
  textColor: string
}

const ServiceList = ({
  label,
  url,
  backColor,
  textColor,
}: ServiceListProps) => {
  console.log(textColor)
  return (
    <div
      className={cn(
        'flex items-center wfu justify-between h-[300px] border border-black rounded-xl shadow-black/20 shadow-xl',
        backColor === 'fundoBlack'
          ? 'bg-black'
          : backColor === '#F3F3F3'
          ? 'bg-gray-200'
          : backColor === '#B9FF66'
          ? 'bg-[#B9FF66]'
          : null,
      )}
    >
      <div className="flex flex-col items-center justify-between h-full py-6 px-4">
        <h2
          className={cn(
            textColor === 'branco' ? 'bg-white' : 'bg-[#B9FF66]',
            'py-3 text-xl font-medium rounded-2xl w-fit px-4',
          )}
        >
          {label}
        </h2>
        <a
          href="#"
          className={cn(
            'flex gap-3',
            backColor === 'fundoBlack' ? 'text-white' : 'text-black',
          )}
        >
          <Button className="hover:text-blue-800">
            <TbArrowNarrowRight size={18} />
            Leia Mais
          </Button>
        </a>
      </div>
      <div className="flex items-center justify-center w-[250px]">
        <Image
          src={url}
          width={200}
          height={200}
          alt="logo"
          unoptimized
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default ServiceList
