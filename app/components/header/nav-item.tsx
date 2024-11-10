'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: string
  label: string
  className?: string
}

const NavItem = ({ label, href, className }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
        className,
      )}
    >
      {label}
    </Link>
  )
}

export default NavItem
