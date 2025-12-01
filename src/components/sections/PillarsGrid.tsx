'use client'

import { TrendingUp, GraduationCap, Wallet, Users, Cpu } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Trading',
    description: 'Tecnología Book A, spreads competitivos, ejecución real.',
    features: ['Book A Real', 'Spreads desde 0.0', 'Ejecución Institucional'],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Education & Academy',
    description: 'Cursos, lives, glosario, podcast, formación para traders LATAM.',
    features: ['Cursos Profesionales', 'Lives & Webinars', 'Contenido Exclusivo'],
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Wallet,
    title: 'Funding & Prop Accounts',
    description: 'Cuentas fondeadas, programas FTMO-style, crecimiento de capital.',
    features: ['Cuentas Fondeadas', 'Evaluaciones', 'Profit Split 80/20'],
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Community & Support',
    description: 'Comunidad Invertox, soporte humano, transparencia, acompañamiento real.',
    features: ['Comunidad 24/7', 'Soporte Humano', 'Transparencia Total'],
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Cpu,
    title: 'Tools & Technology',
    description: 'Plataformas, copy trading, indicadores, CRM trader, dashboards.',
    features: ['Copy Trading', 'CRM Trader', 'Indicadores Pro'],
    gradient: 'from-primary-500 to-primary-600',
  },
]

export default function PillarsGrid() {
  return (
    <section className="section-padding bg-white relative">
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
                className="card-premium group hover:border-primary-200 border-2 border-transparent cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-dark-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-dark-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Explorar</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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

