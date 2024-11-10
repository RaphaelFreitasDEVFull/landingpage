import { Contact } from 'lucide-react'
import ADS from './components/pages/home/ads'
import CasaEstudies from './components/pages/home/case-estudies'
import Company from './components/pages/home/company'
import HeroSection from './components/pages/home/hero-section'
import Services from './components/pages/home/services'
import Team from './components/pages/home/team'
import Testimonies from './components/pages/home/testimonies'
import WorkingProcess from './components/pages/home/working-process'
import ContactForm from './components/pages/home/contact-form'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Company />
      <Services />
      <ADS />
      <CasaEstudies />
      <WorkingProcess />
      <Team />
      <Testimonies />
      <ContactForm />
    </>
  )
}

export default Home
