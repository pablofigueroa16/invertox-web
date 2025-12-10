'use client'

import { useEffect, useState, useRef } from 'react'
import {
  CheckCircle2,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  ChevronRight
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Hook para animaciones on scroll
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
    >
      {children}
    </div>
  )
}

const benefits = [
  {
    title: 'Comisiones competitivas',
    description:
      'Gana ingresos por cada operación de tus referidos. Estructura pensada para maximizar tus ganancias.',
  },
  {
    title: 'Cuentas especiales para referidos',
    description: 'Condiciones preferenciales, spreads mejorados y soporte prioritario.',
  },
  {
    title: 'Material promocional y landing pages',
    description: 'Banners, recursos y páginas personalizadas para convertir mejor.',
  },
  {
    title: 'Acceso a eventos exclusivos',
    description: 'Clínicas de golf, networking y eventos privados organizados por Invertox.',
  },
]

const whyPoints = [
  'Plataforma moderna y rápida',
  'Reportes en tiempo real de tus comisiones',
  'Dashboard para gestión de referidos',
  'Soporte dedicado para IBs y Partners',
  'Condiciones especiales para academias o influencers con volumen',
]

const steps = [
  {
    title: 'Regístrate como IB',
    description: 'Completa el formulario y activa tu panel de referidos.',
  },
  {
    title: 'Comparte tu enlace',
    description: 'Usa tu contenido o solicita material personalizado.',
  },
  {
    title: 'Tus referidos operan',
    description: 'Ejecución real, spreads bajos y soporte dedicado.',
  },
  {
    title: 'Ganas comisiones',
    description: 'Pagos recurrentes y niveles superiores conforme crece tu comunidad.',
  },
]

const partnerTypes = [
  'IB Individual – Ideal para traders o educadores.',
  'Partners de Academia – Para escuelas o comunidades grandes.',
  'Influencers & Creadores – Para perfiles con audiencia digital.',
  'Afiliados Digitales – Para marketers y generadores de tráfico.',
]

export default function ProgramaIBsPage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [activeTraders, setActiveTraders] = useState(1)
  const [lotsPerTrader, setLotsPerTrader] = useState(1)
  const revenue = activeTraders * lotsPerTrader * 6

  useEffect(() => setHeroVisible(true), [])


  return (
    <>
      <Navbar />
      <main className="bg-dark-950 text-white">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[100vh] flex items-center bg-gradient-to-br from-black via-dark-900 to-dark-800 pt-6 md:pt-24 lg:pt-10">
          {/* Accents */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-10 w-96 h-96 bg-[#00FFA9]/20 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
          </div>

          <div className="section-container relative z-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mockup / visual */}
              <AnimatedSection
                className={`relative order-2 lg:order-2 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00FFA9]/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                  <div className="relative bg-black/60 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00FFA9]/20 border border-[#00FFA9]/50 flex items-center justify-center">
                          <Users size={20} className="text-[#00FFA9]" />
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Panel IB</p>
                          <p className="text-sm font-semibold">Tus referidos</p>
                        </div>
                      </div>
                      <span className="text-xs text-white/60">Tiempo real</span>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-white">Trader #{i}</p>
                            <p className="text-xs text-white/50">Operando · LATAM</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-[#00FFA9] font-bold">+$182.4</p>
                            <p className="text-[11px] text-white/50">Comisión hoy</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Copy */}
              <AnimatedSection
                className={`order-1 lg:order-1 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                  <a href="/" className="hover:text-primary-500 transition-colors">Inicio</a>
                  <ChevronRight size={14} />
                  <span className="text-white">Programa IBs</span>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#00FFA9] bg-[#00FFA9]/10 rounded-full px-4 py-2 border border-[#00FFA9]/30 my-6">
                  Programa de IBs · Partners · Influencers
                </div>
                <h1 className="heading-md text-white mb-6 leading-tight">
                  IBs, Partners e Influencers:
                  <br />
                  <span className="text-[#00FFA9]">Monetiza tu comunidad</span>
                </h1>
                <p className="text-lg text-white/70 mb-8 max-w-2xl">
                  Si tienes una audiencia interesada en inversiones o trading, únete al Programa de Introducing Brokers (IB) de Invertox y genera ingresos recurrentes por cada trader que refieras.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary inline-flex items-center gap-2">
                    Unirme al Programa de IBs
                    <ArrowRight size={18} />
                  </button>
                  <button className="bg-white/5 text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
                    Hablar con un asesor
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CALCULADORA IBs */}
        <section data-light-bg="true" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100/50">
          <div className="section-container">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/70 rounded-3xl p-6 md:p-10 border border-primary-100 shadow-premium">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="heading-sm text-dark-900">Calcula tus ganancias como IBs de Invertox</h2>
                      <p className="text-dark-700 text-sm md:text-base">
                        Ajusta el número de referidos activos y su volumen promedio. Cada lote equivale a 6 USD en esta calculadora.
                      </p>
                    </div>

                    {/* Slider 1 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-semibold text-dark-900">
                        <span>Clientes referidos activos</span>
                        <span className="text-primary-600">{activeTraders} traders</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={200}
                        value={activeTraders}
                        onChange={(e) => setActiveTraders(Number(e.target.value))}
                        className="w-full accent-primary-500"
                      />
                    </div>

                    {/* Slider 2 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-semibold text-dark-900">
                        <span>Volumen promedio por trader</span>
                        <span className="text-primary-600">{lotsPerTrader} lotes</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={100}
                        value={lotsPerTrader}
                        onChange={(e) => setLotsPerTrader(Number(e.target.value))}
                        className="w-full accent-primary-500"
                      />
                    </div>

                    <p className="text-xs text-dark-500">
                      *Cálculo preliminar basado en un instrumento (ej: EUR/USD). Referencial, no garantiza resultados finales.
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="bg-white rounded-3xl border border-primary-100 shadow-premium p-6 md:p-8 flex flex-col gap-6 justify-center text-center">
                    <div>
                      <p className="text-sm font-semibold text-dark-700 mb-2">Tu ingreso estimado mensual</p>
                      <p className="text-4xl font-bold text-primary-600">
                        ${revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <button className="group inline-flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-8 py-4 rounded-full transition-all font-semibold mx-auto">
                      <span>Únete como IB</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section data-light-bg="true" className="section-padding bg-dark-950">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">Beneficios principales</h2>
              <p className="body-lg text-dark-200">
                Cuatro razones para crecer con el Programa de IBs de Invertox
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 80}>
                  <div className="card-premium h-full border border-neutral-200/70 bg-white text-dark-800">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="mt-1">
                        <CheckCircle2 size={22} className="text-[#00FFA9]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                        <p className="text-dark-700 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ INVERTOX */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="heading-md text-white mb-4">¿Por qué elegir Invertox como tu broker socio?</h2>
              <p className="body-lg text-white/70 mb-6">
                Nuestro programa para IBs está diseñado para creadores de contenido, educadores, academias, influencers y traders que buscan monetizar su comunidad ofreciendo un servicio profesional, transparente y competitivo. Operamos bajo un modelo Libro A (ECN), con ejecución real y sin conflicto de intereses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyPoints.map((point, idx) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 size={18} className="text-[#00FFA9] mt-1" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#00FFA9]/20 rounded-full blur-2xl" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00FFA9]/20 border border-[#00FFA9]/40 flex items-center justify-center">
                        <BarChart3 size={18} className="text-[#00FFA9]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Reporte comisiones</p>
                        <p className="text-sm font-semibold text-white">Tiempo real</p>
                      </div>
                    </div>
                    <span className="text-xs text-white/60">USD</span>
                  </div>
                  <div className="space-y-2">
                    {[{ label: 'Hoy', value: '$482' }, { label: 'Semana', value: '$3,240' }, { label: 'Mes', value: '$12,870' }].map(
                      (item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between bg-black/40 border border-white/10 rounded-xl px-4 py-3"
                        >
                          <span className="text-white/70 text-sm">{item.label}</span>
                          <span className="text-[#00FFA9] font-bold">{item.value}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-xl px-4 py-3">
                    <Shield size={18} className="text-[#00FFA9]" />
                    <div>
                      <p className="text-sm font-semibold text-white">Modelo Libro A (ECN)</p>
                      <p className="text-xs text-white/60">Sin conflicto de intereses</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section data-light-bg="true" className="section-padding bg-gradient-hero">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">¿Cómo funciona el programa?</h2>
              <p className="body-lg text-dark-600">Cuatro pasos simples para empezar a monetizar</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {steps.map((step, idx) => (
                <AnimatedSection key={step.title} delay={idx * 100}>
                  <div className="card-premium h-full bg-white border border-neutral-200/70 text-dark-800">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#00FFA9]/15 border border-[#00FFA9]/40 flex items-center justify-center text-sm font-bold text-[#00FFA9]">
                        {`0${idx + 1}`}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-bold text-dark-900 leading-snug">{step.title}</h3>
                        <p className="text-dark-700 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* TIPOS DE PARTNERS */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-black via-dark-900 to-dark-800">
          {/* Accents similares al hero */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-0 w-72 h-72 bg-[#00FFA9]/20 rounded-full blur-3xl" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-white heading-md mb-4">Tipos de Partners</h2>
              <p className="body-lg text-white/70">
                Elige la categoría que mejor se adapta a tu audiencia y modelo de negocio.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnerTypes.map((item, idx) => (
                <AnimatedSection key={item} delay={idx * 80}>
                  <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <CheckCircle2 size={18} className="text-[#00FFA9] mt-1" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-lg">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2 className="heading-md text-white mb-6">
                    Transforma tu comunidad en ingresos reales
                  </h2>
                  <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
                    Únete al programa de IBs de Invertox y obtén beneficios exclusivos mientras tus seguidores acceden a una experiencia de trading profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-8 py-4 rounded-full transition-all font-semibold">
                      <span>Unirme al Programa de IBs</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white/20 hover:bg-white/10 transition-all">
                      Hablar con un asesor
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

