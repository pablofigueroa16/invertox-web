'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ExternalLink } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import TradingViewWidget from '@/components/widgets/TradingViewWidget'
import PriceWidget from '@/components/widgets/PriceWidget'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false)
  const [isOverLightBg, setIsOverLightBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const navbarHeight = 100
      const scrollPosition = window.scrollY + navbarHeight

      const lightSections = document.querySelectorAll('[data-light-bg="true"]')
      let isOverLight = false

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          isOverLight = true
        }
      })

      setIsOverLightBg(isOverLight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Full Screen Menu Overlay - Behind Navbar */}
      <div
        className={`fixed inset-0 w-full h-screen z-40 transition-all duration-500 ${isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-dark-900/20 backdrop-blur-2xl" />

        {/* Menu Content */}
        <div className={`relative z-10 w-full h-full pt-40 md:pt-48 overflow-y-auto transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}>
          <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 pb-20">
            {/* Mobile Price Component */}
            <div className="lg:hidden flex items-center justify-center mb-12">
              <PriceWidget onCompareClick={() => { setIsMenuOpen(false); setIsCompareModalOpen(true); }} />
            </div>

            {/* Menu Grid - 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

              {/* Column 1 - TRADING */}
              <div className="group/card bg-dark-800/40 hover:bg-white backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
                <h4 className="text-white/40 group-hover/card:text-neutral-400 text-xs font-semibold tracking-[0.15em] mb-6 transition-colors duration-300">TRADING</h4>
                <ul className="space-y-4">
                  <li className="group/item">
                    <Link href="/social-trading" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Social Trading
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                  <li className="group/item">
                    <Link href="/programa-ibs" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Programa de IB&apos;s
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 - EDUCACION */}
              <div className="group/card bg-dark-800/40 hover:bg-white backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
                <h4 className="text-white/40 group-hover/card:text-neutral-400 text-xs font-semibold tracking-[0.15em] mb-6 transition-colors duration-300">EDUCACION</h4>
                <ul className="space-y-4">
                  <li className="group/item">
                    <Link href="/academy" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Invertox Academy
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Column 3 - ABOUT US */}
              <div className="group/card bg-dark-800/40 hover:bg-white backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
                <h4 className="text-white/40 group-hover/card:text-neutral-400 text-xs font-semibold tracking-[0.15em] mb-6 transition-colors duration-300">ABOUT US</h4>
                <ul className="space-y-4">
                  <li className="group/item">
                    <Link href="/conocenos" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Conócenos
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 - RESOURSE */}
              <div className="group/card bg-dark-800/40 hover:bg-white backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-black/20 transition-all duration-300">
                <h4 className="text-white/40 group-hover/card:text-neutral-400 text-xs font-semibold tracking-[0.15em] mb-6 transition-colors duration-300">RESOURSE</h4>
                <ul className="space-y-4">
                  <li className="group/item">
                    <Link href="#contact-section" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Contacto
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                  <li className="group/item">
                    <Link href="/terminos-y-condiciones" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Términos y Condiciones
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                  <li className="group/item">
                    <Link href="/aviso-privacidad" onClick={() => setIsMenuOpen(false)} className="text-white group-hover/card:text-dark-800 group-hover/item:!text-primary-600 group-hover/item:font-medium group-hover/item:underline group-hover/item:decoration-primary-600 text-lg font-light transition-all duration-300 flex items-center gap-2">
                      Aviso de Privacidad
                      <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary-500 hover:bg-primary-600 text-dark-900 px-6 py-4 rounded-full transition-all font-semibold text-center"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar - Always on Top */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? 'top-0 py-3 px-4 md:px-8'
          : 'top-8 md:top-12 lg:top-16 bg-transparent px-8 md:px-12 lg:px-16'
          }`}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">

            {/* Left - Price Component */}
            <div className="hidden lg:flex items-center">
              {/* Dynamic Price Widget with Compare */}
              <PriceWidget
                onCompareClick={() => setIsCompareModalOpen(true)}
                isLightMode={isOverLightBg && !isMenuOpen}
              />
            </div>

            {/* Center - Logo */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <Image
                src={isOverLightBg && !isMenuOpen ? "/invertox-logo-negro.png" : "/invertox-logo.png"}
                alt="Invertox"
                width={192}
                height={96}
                className="h-16 md:h-24 w-auto object-contain transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Right - CTA & Menu */}
            <div className="flex items-center space-x-2">
              {/* Apply Now Button */}
              <button className={`hidden sm:flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-dark-900 px-6 py-3 rounded-full transition-all text-sm font-semibold`}>
                <span>Iniciar Sesión</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Menu Icon */}
              <button
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${isOverLightBg && !isMenuOpen
                  ? 'bg-dark-900/10 hover:bg-dark-900/20'
                  : 'bg-white/10 hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={20} className="text-white" />
                ) : (
                  <Menu size={20} className={isOverLightBg ? 'text-dark-900' : 'text-white'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Compare Modal with TradingView Widget */}
      <Modal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        title="Market Overview"
      >
        <TradingViewWidget />
      </Modal>
    </>
  )
}
