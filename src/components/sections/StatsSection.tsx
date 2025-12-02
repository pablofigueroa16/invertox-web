'use client'

import { TrendingUp, DollarSign, Globe, Award, Clock, Shield } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '15,000+',
    label: 'Traders Activos',
    description: 'Operando diariamente en nuestra plataforma',
  },
  {
    icon: DollarSign,
    value: '$50M+',
    label: 'Volumen Mensual',
    description: 'Transacciones procesadas cada mes',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Países LATAM',
    description: 'Presencia en toda Latinoamérica',
  },
  {
    icon: Award,
    value: '0.0',
    label: 'Spreads desde',
    description: 'Los mejores spreads del mercado',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Soporte Real',
    description: 'Atención humana siempre disponible',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Transparencia',
    description: 'Ejecución Book A verificable',
  },
]

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-md text-white mb-6">
            Números que hablan por sí solos
          </h2>
          <p className="body-lg text-dark-200">
            La confianza de miles de traders en Latinoamérica respaldada por resultados reales y transparencia absoluta.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-premium rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Value */}
                <div className="mb-3">
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                </div>

                {/* Label */}
                <h4 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-dark-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg text-white font-semibold mb-2">Regulado & Seguro</h4>
            <p className="text-dark-300 text-sm">Cumplimiento total con regulaciones internacionales</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg text-white font-semibold mb-2">Ejecución Instantánea</h4>
            <p className="text-dark-300 text-sm">Tecnología de vanguardia para trading profesional</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-lg text-white font-semibold mb-2">Comunidad Activa</h4>
            <p className="text-dark-300 text-sm">Miles de traders compartiendo estrategias y experiencias</p>
          </div>
        </div>
      </div>
    </section>
  )
}

