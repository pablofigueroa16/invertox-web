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
          <source src="/home-video.mp4" type="video/mp4" />
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
              Tecnología institucional Libro A, spreads competitivos, educación profesional y cuentas fondeadas para traders en Latinoamérica.
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

      {/* Bottom Right Partner Badge */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 hidden lg:flex">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex items-center gap-4 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-lg shadow-black/20">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Deja tu reseña</span>
              <span className="text-xs text-white/50">4.8/5 · Traders LATAM</span>
            </div>
          </div>
        </a>
      </div>
    </section >
  )
}
