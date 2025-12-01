'use client'

import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Shield size={16} />
              <span>Tecnología Book A & Ejecución Real</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-xl text-balance">
              Tu socio estratégico en{' '}
              <span className="gradient-text">trading e inversiones</span>
            </h1>

            {/* Subheadline */}
            <p className="body-lg max-w-xl">
              Tecnología institucional Book A, spreads competitivos, educación profesional y cuentas fondeadas para traders en Latinoamérica.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Comenzar Ahora</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <span>Ver Demo</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={20} className="text-primary-500" />
                  <p className="text-2xl font-bold text-dark-900">0.0</p>
                </div>
                <p className="text-sm text-dark-600">Spreads desde</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-primary-500" />
                  <p className="text-2xl font-bold text-dark-900">15K+</p>
                </div>
                <p className="text-sm text-dark-600">Traders activos</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Shield size={20} className="text-primary-500" />
                  <p className="text-2xl font-bold text-dark-900">24/7</p>
                </div>
                <p className="text-sm text-dark-600">Soporte real</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="card-premium bg-white p-8 relative z-10">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-dark-900">Trading Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-dark-600">En vivo</span>
                    </div>
                  </div>

                  {/* Chart Area Placeholder */}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                      {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                        <div
                          key={i}
                          className="w-8 bg-gradient-to-t from-primary-500 to-primary-300 rounded-t transition-all duration-500"
                          style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-dark-600 mb-1">Profit Hoy</p>
                      <p className="text-2xl font-bold text-green-600">+$2,458</p>
                      <p className="text-xs text-green-600">+12.4%</p>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-dark-600 mb-1">Trades Abiertos</p>
                      <p className="text-2xl font-bold text-primary-600">8</p>
                      <p className="text-xs text-primary-600">6 ganando</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Academy */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-premium p-4 z-20 w-56 animate-slide-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-premium rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-900">Academy Live</p>
                    <p className="text-xs text-dark-600">120 en vivo ahora</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Community */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-premium p-4 z-20 w-56 animate-slide-in delay-150">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary-400 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-primary-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+9K</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-900">Comunidad</p>
                    <p className="text-xs text-dark-600">15,234 traders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

