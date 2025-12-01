'use client'

import { ArrowRight, Check } from 'lucide-react'

const benefits = [
  'Cuenta demo ilimitada',
  'Acceso a Academy básico',
  'Soporte por email',
  'Spreads competitivos desde 0.0',
  'Sin comisiones ocultas',
  'Retiros en 24 horas',
]

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Comienza tu camino hacia el trading profesional
              </h2>
              <p className="text-xl text-primary-50 mb-8 leading-relaxed">
                Únete a más de 15,000 traders que ya confían en Invertox para alcanzar sus objetivos financieros.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span className="text-primary-50">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>Crear Cuenta Gratis</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-white hover:bg-white/10 transition-all duration-300">
                  Ver Demo en Vivo
                </button>
              </div>

              {/* Trust Badge */}
              <p className="text-primary-100 text-sm mt-6">
                ✓ Sin tarjeta de crédito requerida · ✓ Acceso inmediato
              </p>
            </div>

            {/* Right Visual - Stats Card */}
            <div className="lg:block hidden">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-primary-100 text-sm mb-1">Tus primeros resultados</p>
                    <h3 className="text-white text-2xl font-bold">30 días con Invertox</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Progress Stats */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span className="text-sm">Cursos completados</span>
                      <span className="font-bold">5/5</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-300 h-2 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span className="text-sm">Trades en demo</span>
                      <span className="font-bold">47</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-300 to-primary-200 h-2 rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span className="text-sm">Win rate</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/20">
                  <div>
                    <p className="text-primary-100 text-xs mb-1">Profit Demo</p>
                    <p className="text-white text-2xl font-bold">+$3,247</p>
                  </div>
                  <div>
                    <p className="text-primary-100 text-xs mb-1">Listo para</p>
                    <p className="text-green-300 text-xl font-bold">Cuenta Real</p>
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

