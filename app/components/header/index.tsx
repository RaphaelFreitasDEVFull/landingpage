import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-item'
import { Button } from '../button'

const NAV_ITEM = [
  { label: 'Sobre nós', href: '/about' },
  { label: 'Serviços', href: '/services' },
  { label: 'Cases de Sucesso', href: '/use-cases' },
  { label: 'Precificação', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
]

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-[68px]  flex items-center justify-center">
      <div className="container flex items-center justify-between flex-col lg:flex-row">
        <Link href={'/'} className="mt-32 lg:mt-0">
          <Image
            src={'/logo.png'}
            width={150}
            height={48}
            alt="Logo da Pagina"
          />
        </Link>
        <nav className="flex flex-wrap lg:flex-nowrap justify-center pt-8 lg:pt-0 items-center gap-x-10">
          {NAV_ITEM.map((item) => (
            <NavItem
              href={item.href}
              label={item.label}
              key={item.label}
              className="text-black text-md hover:text-emerald-500 transition-all duration-100"
            />
          ))}
          <Button className="mt-8 lg:mt-0 text-black border border-s-1 border-black hover:bg-[#B9FF66]">
            Solicitar um orçamento
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
