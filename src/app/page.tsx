import HeroSection from '@/components/sections/HeroSection'
import PillarsGrid from '@/components/sections/PillarsGrid'
import StatsSection from '@/components/sections/StatsSection'
import TrustSection from '@/components/sections/TrustSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'
import TickerTapeWidget from '@/components/widgets/TickerTapeWidget'
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
      <PricingSection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <TickerTapeWidget />
      <Footer />
    </main>
  )
}

