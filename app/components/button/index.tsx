import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'py-3 px-4 rounded-lg flex justify-center items-center gap-2  disabled:opacity-50 font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
