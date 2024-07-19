
import './App.css'
import AboutUs from './components/AboutUs'
import ExpertsSection from './components/ExpertsSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import TickerSection from './components/TickerSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

export default function App() {
  return (
    <>  
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <ServiceSection/>
    <TickerSection/>
    <ExpertsSection/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}