'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/invertox-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              <span className="block">La Nueva plataforma para</span>
              <span className="block">Hacer <span className="text-primary-400">Trading Inteligente</span></span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
              Tecnología institucional Book A, spreads competitivos, educación profesional y cuentas fondeadas para traders en Latinoamérica.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="group flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-6 py-3 rounded-full transition-all text-sm font-semibold">
                <span>Crear cuenta</span>
                <div className="w-6 h-6 rounded-full bg-dark-900/20 flex items-center justify-center group-hover:bg-dark-900/30 transition-all">
                  <ChevronRight size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Partner Badge - Trustpilot */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 hidden lg:flex items-center">
        <a
          href="https://www.trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 hover:bg-white/15 transition-all duration-300 border border-white/10"
        >
          <Image
            src="/truspilot-logo.png"
            alt="Trustpilot"
            width={192}
            height={64}
            className="h-16 w-auto object-contain"
          />
          <div className="text-white border-l border-white/20 pl-3">
            <p className="text-xs text-white/60">Official Partner</p>
            <div className="flex items-center space-x-1 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-primary-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
