import HorizontalDivider from '@/app/components/divider/horizontal'
import Image from 'next/image'

type CardTeamProps = {
  name: string
  desc: string
  url: string
  role: string
}

const CardTeam = ({ desc, name, role, url }: CardTeamProps) => {
  return (
    <div className="w-[350px] flex flex-col bg-white border border-black shadow-xl shadow-black/25 p-10 rounded-xl">
      <div className="flex">
        <div className="flex items-end gap-4">
          <Image src={url} width={60} height={60} alt="team-name" />
          <div className="flex flex-col items-start justify-end">
            <h2 className="font-semibold text-sm">{name}</h2>
            <span className="font-light text-xs">{role}</span>
          </div>
        </div>
      </div>
      <HorizontalDivider />
      <p className="text-sm">{desc}</p>
    </div>
  )
}

export default CardTeam
