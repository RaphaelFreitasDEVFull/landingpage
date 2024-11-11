'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-item'
import { Button } from '../button'
import { useState } from 'react'

const NAV_ITEM = [
  { label: 'Sobre nós', href: '/about' },
  { label: 'Serviços', href: '/services' },
  { label: 'Cases de Sucesso', href: '/use-cases' },
  { label: 'Precificação', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para alternar o menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="absolute top-0 w-full z-10 h-[68px] flex items-center justify-center">
      <div className="container flex items-center justify-between ">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={'/logo.png'}
            width={150}
            height={48}
            alt="Logo da Página"
          />
        </Link>

        {/* Menu Hamburguer em telas pequenas */}
        <button
          className="lg:hidden flex items-center justify-center text-black p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navegação */}
        <nav
          className={`lg:flex flex-col lg:flex-row gap-x-10 justify-center pt-8 lg:pt-0 items-center transition-all duration-200 ease-in-out ${
            isMenuOpen
              ? 'flex absolute top-[68px] left-0 right-0 bg-white shadow-lg p-4'
              : 'hidden'
          }`}
        >
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
