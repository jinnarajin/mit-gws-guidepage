import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowToApply from './components/HowToApply'
import Timeline from './components/Timeline'
import Benefits from './components/Benefits'
import Prizes from './components/Prizes'
import Certificate from './components/Certificate'
import Bootcamp from './components/Bootcamp'
import CTA from './components/CTA'
import Footer from './components/Footer'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfULqufxsVu_acVmQiun4mzuBZYWJMG-Ol0LdY_eTbIpkpWoQ/viewform'

export { FORM_URL }

function App() {
  return (
      <div className="min-h-screen w-full text-slate-200 font-sans">
      <Navbar />
      <Hero />
      <HowToApply />
      <Benefits />
      <Timeline />
      <Prizes />
      <Certificate />
      <Bootcamp />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
