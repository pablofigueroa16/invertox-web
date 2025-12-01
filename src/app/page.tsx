import HeroSection from '@/components/sections/HeroSection'
import PillarsGrid from '@/components/sections/PillarsGrid'
import StatsSection from '@/components/sections/StatsSection'
import TrustSection from '@/components/sections/TrustSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PillarsGrid />
      <StatsSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}

