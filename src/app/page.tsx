"use client"
import { useEffect, useState, useRef } from 'react'
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

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AnimatedSection><HeroSection /></AnimatedSection>
      <AnimatedSection delay={50}><PillarsGrid /></AnimatedSection>
      <AnimatedSection delay={100}><StatsSection /></AnimatedSection>
      <AnimatedSection delay={150}><HowItWorksSection /></AnimatedSection>
      <AnimatedSection delay={200}><PricingSection /></AnimatedSection>
      <AnimatedSection delay={250}><TrustSection /></AnimatedSection>
      <AnimatedSection delay={300}><FAQSection /></AnimatedSection>
      <AnimatedSection delay={350}><ContactSection /></AnimatedSection>
      <AnimatedSection delay={400}><CTASection /></AnimatedSection>
      <AnimatedSection delay={450}><TickerTapeWidget /></AnimatedSection>
      <Footer />
    </main>
  )
}

