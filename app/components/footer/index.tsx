import Image from 'next/image'
import {
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandTwitter,
} from 'react-icons/tb'
import HorizontalDivider from '../divider/horizontal'

const Footer = () => {
  return (
    <footer className="container bg-black py-12 px-8 rounded-t-3xl">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between mb-8">
        <div>
          <Image src={'/logo-2.png'} width={100} height={50} alt="logo" />
        </div>
        <div className="flex text-white gap-10">
          <a href="#">Sobre Nós</a>
          <a href="#">Serviços</a>
          <a href="#">Nossos Casos</a>
          <a href="#">Precificaçao</a>
          <a href="#">Blog</a>
        </div>
        <div className="text-white flex gap-10">
          <TbBrandLinkedin size={20} />
          <TbBrandFacebook size={20} />
          <TbBrandTwitter size={20} />
        </div>
      </div>
      <HorizontalDivider className="bg-white" />
      <div className="text-white mt-8 font-light text-sm flex items-center justify-center">
        <p>
          Todos os Direitos Reservados | Raphael Silva Freitas - Design por
          <a
            href="https://www.olgaskuja.design/?utm_source=positivus&utm_medium=fig&utm_campaign=prom"
            target="_blank"
            className="hover:text-emerald-200"
          >
            : @Olga Skulja
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
