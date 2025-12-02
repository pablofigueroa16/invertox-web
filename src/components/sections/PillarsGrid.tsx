'use client'

import { TrendingUp, GraduationCap, Wallet, Users, Cpu, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: '1. Trading',
    description: 'Tecnología institucional y condiciones competitivas.',
    features: ['Book A Real', 'Spreads desde 0.0', 'Ejecución rápida y estable en MT5'],
    gradient: 'from-blue-500 to-blue-600',
    isComingSoon: false,
  },
  {
    icon: GraduationCap,
    title: '2. Invertox Academy',
    description: 'Primera academia gratuita para traders LATAM.',
    features: ['Cursos y clases en vivo + pregrabadas', 'Señales diarias, webinars y mentorías', 'Contenido exclusivo y glosario de trading'],
    gradient: 'from-purple-500 to-purple-600',
    isComingSoon: false,
  },
  {
    icon: Wallet,
    title: '3. Torneos de Trading',
    description: 'Compite, gana y escala como trader dentro de Invertox.',
    features: ['Cashback por volumen operado', 'Premios sorpresa, cuentas especiales, regalos', 'Viajes y experiencias exclusivas para ganadores'],
    gradient: 'from-green-500 to-green-600',
    isComingSoon: false,
  },
  {
    icon: Users,
    title: '4. Comunidad & Soporte',
    description: 'Acompañamiento real y transparente.',
    features: ['Comunidad 24/7 (Telegram / Discord)', 'Soporte humano, no bots', 'Sesiones Q&A y eventos para traders'],
    gradient: 'from-orange-500 to-orange-600',
    isComingSoon: false,
  },
  {
    icon: Cpu,
    title: '5. Technologia & Herramientas',
    description: 'Ecosistema inteligente para potenciar tu trading.',
    features: ['Copy Trading & dashboard personalizado', 'CRM Trader + panel para IBs', 'Indicadores y herramientas avanzadas'],
    gradient: 'from-primary-500 to-primary-600',
    isComingSoon: false,
  },
  {
    icon: Sparkles,
    title: '6. Próximamente',
    description: 'Mejoras y nuevas funciones en desarrollo.',
    features: ['Nuevas herramientas y analíticas avanzadas', 'App Invertox (iOS / Android)', 'Marketplace de señales y gamificación'],
    gradient: 'from-neutral-400 to-neutral-500',
    isComingSoon: true,
  },
]

export default function PillarsGrid() {
  return (
    <section data-light-bg="true" className="section-padding bg-white relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-md mb-6">
            Todo lo que necesitas para{' '}
            <span className="gradient-text">operar y crecer</span>
          </h2>
          <p className="body-lg">
            Una plataforma completa diseñada para traders que buscan excelencia, educación continua y crecimiento sostenible.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className={`card-premium group border-2 border-transparent cursor-pointer relative ${pillar.isComingSoon
                  ? 'bg-gradient-to-br from-neutral-50 to-neutral-100 hover:border-neutral-300'
                  : 'hover:border-primary-200'
                  }`}
              >
                {/* Coming Soon Badge */}
                {pillar.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-neutral-200 text-neutral-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${pillar.isComingSoon ? 'opacity-60' : ''
                  }`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-3 ${pillar.isComingSoon ? 'text-neutral-500' : 'text-dark-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${pillar.isComingSoon ? 'text-neutral-400' : 'text-dark-600'}`}>
                  {pillar.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className={`flex items-center space-x-2 text-sm ${pillar.isComingSoon ? 'text-neutral-400' : 'text-dark-700'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${pillar.isComingSoon ? 'bg-neutral-300' : 'bg-primary-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                {!pillar.isComingSoon && (
                  <div className="mt-6 flex items-center text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Explorar</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-6">
            ¿No estás seguro por dónde empezar?
          </p>
          <button className="btn-secondary">
            Hablar con un Asesor
          </button>
        </div>
      </div>
    </section>
  )
}

