'use client'

import { useEffect, useState, useRef } from 'react'
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  Podcast,
  Users,
  Award,
  BarChart3,
  CheckCircle2,
  Layers,
  Zap,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Hook animación on-scroll
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
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

const modules = [
  {
    title: 'Blog & Artículos Especializados',
    description:
      'Estrategias, análisis técnico, gestión de riesgo, psicología y tecnología aplicada.',
    icon: BookOpen,
  },
  {
    title: 'Webinars y Masterclasses',
    description:
      'Clases en vivo y grabadas con invitados y traders profesionales. Operativa real.',
    icon: PlayCircle,
  },
  {
    title: 'Simuladores de Trading',
    description: 'Practica sin riesgo y gana confianza antes de pasar a real.',
    icon: BarChart3,
  },
  {
    title: 'Podcast INVERTALKS',
    description:
      'Charlas con traders, economistas, psicólogos y desarrolladores del ecosistema.',
    icon: Podcast,
  },
  {
    title: 'Comunidad Invertox',
    description:
      'Foros y grupos privados para compartir ideas, setups, preguntas y experiencias.',
    icon: Users,
  },
  {
    title: 'Certificaciones Digitales',
    description: 'Acreditaciones al completar módulos, exámenes y formaciones especializadas.',
    icon: Award,
  },
]

const levels = [
  {
    title: 'Principiante',
    bullets: [
      'Conceptos base del trading',
      'Cómo funcionan los mercados',
      'Herramientas fundamentales',
      'Simuladores guiados',
    ],
  },
  {
    title: 'Intermedio',
    bullets: [
      'Análisis técnico',
      'Gestión de riesgo',
      'Planes de trading',
      'Uso profesional de la plataforma',
    ],
  },
  {
    title: 'Avanzado',
    bullets: [
      'Estrategias cuantitativas',
      'Operativa algorítmica',
      'Psicología profesional',
      'Backtesting avanzado',
    ],
  },
  {
    title: 'IBs / Líderes de Comunidad',
    bullets: ['Monetización', 'Estrategias de captación', 'Gestión de equipos'],
  },
]

const whyBlocks = [
  {
    title: 'Educación real, sin teorías vacías',
    description:
      'Todo lo que aprendes está basado en estrategias aplicables y procesos de traders profesionales.',
  },
  {
    title: 'Sesiones en vivo',
    description: 'Observa operativa real, análisis en tiempo real y gestión de riesgo aplicada.',
  },
  {
    title: 'Aprendizaje gratuito',
    description: 'Sin pagos ocultos. La educación es parte de nuestro modelo de valor.',
  },
  {
    title: 'Comunidad que impulsa tu crecimiento',
    description: 'Aprende acompañado para acelerar tu evolución.',
  },
  {
    title: 'Contenido en constante actualización',
    description: 'Nuevos episodios, cursos y estrategias cada mes.',
  },
]

export default function AcademyPage() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => setHeroVisible(true), [])

  return (
    <>
      <Navbar />
      <main className="bg-dark-950 text-white">
        {/* HERO */}
        <section className="pt-6 relative overflow-hidden min-h-[100vh] flex items-center bg-gradient-to-br from-black via-dark-900 to-dark-800">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-10 w-80 h-80 bg-[#00FFA9]/15 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <AnimatedSection
                className={`relative order-2 lg:order-1 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00FFA9]/20 rounded-full blur-2xl" />
                  <div className="relative bg-black/60 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center">
                        <Layers size={18} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Academy Invertox</p>
                        <p className="text-sm font-semibold text-white">Panel educativo</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: 'Cursos activos', value: '38' },
                        { label: 'Webinars programados', value: '12' },
                        { label: 'Episodios INVERTALKS', value: '54' },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        >
                          <span className="text-white/70 text-sm">{item.label}</span>
                          <span className="text-primary-400 font-bold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Copy */}
              <AnimatedSection
                className={`order-1 lg:order-2 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 bg-primary-500/10 rounded-full px-4 py-2 border border-primary-500/20 mb-6">
                  Academy · Cursos · Webinars · Comunidad
                </div>
                <h1 className="heading-md text-white mb-6 leading-tight">
                  Academy Invertox:
                  <br />
                  <span className="text-primary-400">Aprende, Opera y Evoluciona</span>
                </h1>
                <p className="text-lg text-white/70 mb-8 max-w-2xl">
                  La plataforma educativa más completa para traders modernos: cursos, webinars, sesiones en vivo, simuladores, certificaciones, comunidad y nuestro podcast oficial INVERTALKS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary inline-flex items-center gap-2">
                    Comienza Gratis
                    <ArrowRight size={18} />
                  </button>
                  <button className="bg-white/5 text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
                    Explorar Contenido
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ¿Qué es Academy? */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-3 py-1 border border-primary-100">
                  Qué es Academy Invertox
                </span>
                <h2 className="heading-md text-dark-900 leading-tight">
                  Tu centro de formación integral en trading
                </h2>
                <p className="body-lg text-dark-700">
                  Academy Invertox es un ecosistema diseñado para que cualquier persona—desde principiante hasta profesional—pueda aprender a operar con claridad, estructura y acompañamiento. Aquí no solo estudias teoría: ves trading real, estrategias aplicadas y decisiones explicadas paso a paso.
                </p>
                <p className="text-dark-700">
                  Nuestra plataforma combina contenido educativo, análisis de mercado, herramientas prácticas y formación continua, sumado a:
                </p>
                <ul className="space-y-2 text-dark-700">
                  <li>• INVERTALKS, podcast con traders, psicólogos, analistas y programadores.</li>
                  <li>• Sesiones en vivo con operativa real, análisis en tiempo real y gestión de riesgo aplicada.</li>
                  <li>• Comunidad activa, para que nunca aprendas solo.</li>
                  <li>• Todo 100% gratuito para los usuarios de Invertox.</li>
                </ul>
                <div>
                  <button className="btn-primary inline-flex items-center gap-2">
                    Acceder a Academy
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-premium border border-neutral-200 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm text-dark-700">
                  <div className="bg-primary-50 rounded-2xl p-4 border border-primary-100">
                    <p className="text-2xl font-bold text-primary-600">+120</p>
                    <p>Cursos y módulos</p>
                  </div>
                  <div className="bg-primary-50 rounded-2xl p-4 border border-primary-100">
                    <p className="text-2xl font-bold text-primary-600">24/7</p>
                    <p>Acceso a comunidad</p>
                  </div>
                  <div className="bg-primary-50 rounded-2xl p-4 border border-primary-100">
                    <p className="text-2xl font-bold text-primary-600">Live</p>
                    <p>Sesiones en vivo semanales</p>
                  </div>
                  <div className="bg-primary-50 rounded-2xl p-4 border border-primary-100">
                    <p className="text-2xl font-bold text-primary-600">0 USD</p>
                    <p>100% gratuito en Invertox</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Módulos principales */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-950 to-black">
          {/* Accents tipo hero */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#00FFA9]/15 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md text-white mb-4">Módulos principales</h2>
              <p className="body-lg text-white/70">
                Contenido curado para cada etapa: teoría, práctica, comunidad y actualización constante.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 80}>
                  <div className="card-premium h-full bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 aspect-square shrink-0 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <item.icon size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Aprendizaje por niveles */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">Aprendizaje por niveles</h2>
              <p className="body-lg text-dark-600">Avanza con una ruta clara, paso a paso.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.map((level, idx) => (
                <AnimatedSection key={level.title} delay={idx * 80}>
                  <div className="card-premium h-full bg-white border border-neutral-200">
                    <h3 className="text-lg font-bold text-dark-900 mb-3">{level.title}</h3>
                    <ul className="space-y-2 text-sm text-dark-600">
                      {level.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-primary-500 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ¿Por qué Academy? */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="heading-md text-white mb-4">¿Por qué Academy Invertox?</h2>
              <p className="body-lg text-white/70">
                Impacto real: formación aplicable, acompañamiento y comunidad que te impulsa.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyBlocks.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 80}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Convierte conocimiento */}
        <section data-light-bg="true" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100/50">
          <div className="section-container">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="heading-md text-dark-900 mb-4">Convierte el conocimiento en resultados</h2>
              <p className="body-lg text-dark-700 mb-8">
                El trading sin formación es un juego de azar. Con Academy Invertox, transformas tu camino en un proceso
                estructurado, profesional y medible. Aprende, practica, observa a traders reales, recibe mentoría en
                directo y forma parte de una comunidad en crecimiento constante.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary inline-flex items-center gap-2">
                  Únete Gratis
                  <ArrowRight size={18} />
                </button>
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-base border-2 border-primary-100 hover:bg-primary-50 transition-all">
                  Ver Contenido
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA final */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-lg">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="heading-md text-white mb-6">
                    Empieza hoy. Tu mejor trade comienza con conocimiento.
                  </h2>
                  <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
                    Ingresa a Academy Invertox y accede a cursos, herramientas, sesiones en vivo y contenido diseñado
                    para llevar tu trading al siguiente nivel.
                  </p>
                  <button className="group flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-8 py-4 rounded-full transition-all font-semibold mx-auto">
                    <span>Crear Cuenta</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
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

