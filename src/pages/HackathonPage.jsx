import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/Hackathon/Navbar'
import Hero from '../components/Hackathon/Hero'
import HowToApply from '../components/Hackathon/HowToApply'
import Timeline from '../components/Hackathon/Timeline'
import Benefits from '../components/Hackathon/Benefits'
import Prizes from '../components/Hackathon/Prizes'
import Certificate from '../components/Hackathon/Certificate'
import Bootcamp from '../components/Hackathon/Bootcamp'
import CTA from '../components/Hackathon/CTA'
import Footer from '../components/Hackathon/Footer'

export default function HackathonPage() {
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
      <Analytics />
    </div>
  )
}
