'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-premium py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-bold text-dark-900">Invertox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#trading" className="text-dark-700 hover:text-primary-500 transition-colors font-medium">
              Trading
            </Link>
            <Link href="#academy" className="text-dark-700 hover:text-primary-500 transition-colors font-medium">
              Academy
            </Link>
            <Link href="#funding" className="text-dark-700 hover:text-primary-500 transition-colors font-medium">
              Funding
            </Link>
            <Link href="#community" className="text-dark-700 hover:text-primary-500 transition-colors font-medium">
              Comunidad
            </Link>
            <Link href="#tools" className="text-dark-700 hover:text-primary-500 transition-colors font-medium">
              Herramientas
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-ghost py-3 px-6">
              Iniciar Sesión
            </button>
            <button className="btn-primary py-3 px-6">
              Crear Cuenta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-neutral-200 pt-6">
            <div className="flex flex-col space-y-4">
              <Link href="#trading" className="text-dark-700 hover:text-primary-500 transition-colors font-medium py-2">
                Trading
              </Link>
              <Link href="#academy" className="text-dark-700 hover:text-primary-500 transition-colors font-medium py-2">
                Academy
              </Link>
              <Link href="#funding" className="text-dark-700 hover:text-primary-500 transition-colors font-medium py-2">
                Funding
              </Link>
              <Link href="#community" className="text-dark-700 hover:text-primary-500 transition-colors font-medium py-2">
                Comunidad
              </Link>
              <Link href="#tools" className="text-dark-700 hover:text-primary-500 transition-colors font-medium py-2">
                Herramientas
              </Link>
              <div className="pt-4 space-y-3">
                <button className="btn-ghost w-full py-3">
                  Iniciar Sesión
                </button>
                <button className="btn-primary w-full py-3">
                  Crear Cuenta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

