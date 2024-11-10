import { cn } from '@/lib/utils'

type VerticalDividerProps = {
  className?: string
}

const VerticalDivider = ({ className }: VerticalDividerProps) => {
  return <div className="h-[180px] w-[1px] bg-white/30"></div>
}

export default VerticalDivider
