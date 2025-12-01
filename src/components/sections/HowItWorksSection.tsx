'use client'

import { UserPlus, BookOpen, TrendingUp, Award } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Crea tu cuenta',
    description: 'Regístrate en minutos con un proceso simple y seguro. Sin complicaciones, sin letra pequeña.',
  },
  {
    icon: BookOpen,
    step: '02',
    title: 'Aprende y practica',
    description: 'Accede a nuestra Academy con cursos, lives y recursos. Practica en demo hasta sentirte preparado.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Opera en real',
    description: 'Comienza a operar con tecnología Book A real o aplica a cuentas fondeadas para crecer tu capital.',
  },
  {
    icon: Award,
    step: '04',
    title: 'Crece con nosotros',
    description: 'Accede a profit shares, programas de funding y una comunidad que te acompaña en cada paso.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-md mb-6">
            Cómo funciona <span className="gradient-text">Invertox</span>
          </h2>
          <p className="body-lg">
            Tu camino hacia el trading profesional en 4 pasos simples
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 mx-16" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Card */}
                <div className="card-premium text-center relative z-10 h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center shadow-premium">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center">
                      <Icon size={36} className="text-primary-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary">
            Comenzar Mi Camino
          </button>
        </div>
      </div>
    </section>
  )
}

