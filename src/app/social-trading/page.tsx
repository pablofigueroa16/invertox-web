'use client'

import { useEffect, useState, useRef } from 'react'
import {
  ChevronRight,
  Lightbulb,
  Users,
  BarChart3,
  Shield,
  UserPlus,
  Search,
  Zap,
  Settings,
  Lock,
  Eye,
  Clock,
  Sliders,
  Copy,
  PieChart,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Tipos
interface Trader {
  name: string
  specialty: string
  monthlyReturn: string
  winrate: string
  risk: string
  description: string
  gradient: string
}

interface ServiceFeature {
  text: string
}

interface Service {
  title: string
  description: string
  features: ServiceFeature[]
  idealFor: string
  icon: React.ElementType
  gradient: string
  color: string
}

// Datos de traders destacados
const featuredTraders: Trader[] = [
  {
    name: 'Lucas Vázquez',
    specialty: 'Swing en índices',
    monthlyReturn: '+14.2%',
    winrate: '68%',
    risk: 'Bajo',
    description: 'Operaciones de mediano plazo en S&P500 y NASDAQ.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'María Torres',
    specialty: 'Intradía en Forex',
    monthlyReturn: '+9.8%',
    winrate: '72%',
    risk: 'Medio',
    description: 'Scalping y day trading en pares mayores EUR/USD.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Carlos Méndez',
    specialty: 'Commodities',
    monthlyReturn: '+11.5%',
    winrate: '65%',
    risk: 'Medio',
    description: 'Especialista en oro y petróleo con análisis técnico.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    name: 'Ana Rodríguez',
    specialty: 'Crypto & Forex',
    monthlyReturn: '+18.3%',
    winrate: '61%',
    risk: 'Alto',
    description: 'Trading agresivo en BTC y pares exóticos.',
    gradient: 'from-orange-500 to-orange-600',
  },
]

// Datos de servicios
const services: Service[] = [
  {
    title: 'Copy Trading',
    description: 'La forma más simple de invertir sin operar manualmente.',
    features: [
      { text: 'Copia automáticamente las operaciones de traders seleccionados.' },
      { text: 'Si el trader maestro abre o cierra una orden, tu cuenta replica el movimiento.' },
      { text: 'Total independencia: depósitos, retiros y ajustes solo dependen de ti.' },
      { text: 'Puedes suscribirte o darte de baja cuando quieras, de forma instantánea.' },
    ],
    idealFor: 'Principiantes o inversionistas que buscan simplicidad.',
    icon: Copy,
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
  },
  {
    title: 'PAMM',
    description: 'Percent Allocation Management Module — Un modelo tipo fondo administrado.',
    features: [
      { text: 'Varios inversionistas aportan capital a una cuenta profesionalmente gestionada.' },
      { text: 'Las ganancias y pérdidas se distribuyen proporcionalmente según participación.' },
      { text: 'Gestión centralizada por expertos.' },
      { text: 'Depósitos y retiros suelen procesarse en horarios o fechas establecidas.' },
    ],
    idealFor: 'Inversionistas pasivos que buscan delegar completamente la gestión.',
    icon: PieChart,
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
  },
  {
    title: 'MAM',
    description: 'Multi-Account Manager — La herramienta más avanzada para gestores profesionales.',
    features: [
      { text: 'Permite administrar múltiples cuentas desde una cuenta maestra.' },
      { text: 'Cada inversionista mantiene su propia cuenta individual.' },
      { text: 'Control preciso del riesgo y asignaciones por cliente.' },
      { text: 'Ideal para operaciones institucionales o grupos grandes de inversionistas.' },
    ],
    idealFor: 'Gestores profesionales o traders que administran capital de terceros.',
    icon: Layers,
    gradient: 'from-green-500 to-green-600',
    color: 'green',
  },
]

// Frases para micro banners
const microBanners = [
  'Copia estrategias reales sin complicarte.',
  'Invierte como los profesionales.',
  'Traders verificados. Resultados transparentes.',
  'Tu cuenta, tu dinero, tu control.',
  'Tecnología y experiencia para invertir mejor.',
]

// Hook para animación al scroll
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Componente de sección animada
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
    >
      {children}
    </div>
  )
}

export default function SocialTradingPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  useEffect(() => {
    setIsHeroVisible(true)
  }, [])

  return (
    <>
      <Navbar />

      <main>
        {/* BLOQUE 1 — HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="relative z-10 section-container w-full py-32 md:py-40">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Social Trading Invertox</span>
              </div>

              {/* Main Headline */}
              <h1 className="heading-lg text-white mb-6">
                Social Trading para invertir{' '}
                <span className="text-primary-400">como los profesionales</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
                Copia estrategias reales, sigue a traders experimentados y opera con herramientas avanzadas que simplifican tu inversión.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button className="group flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-8 py-4 rounded-full transition-all font-semibold">
                  <span>Explorar Estrategias</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all font-semibold backdrop-blur-sm border border-white/20">
                  <span>Abrir Cuenta en 2 Minutos</span>
                </button>
              </div>

              {/* Support Text */}
              <div className="flex items-center justify-center flex-wrap gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-400" />
                  Operaciones en tiempo real
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary-400" />
                  Traders verificados
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  <Shield size={16} className="text-primary-400" />
                  Control total de tu cuenta
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* BLOQUE 2 — ¿QUÉ ES SOCIAL TRADING? */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="heading-md mb-6">
                  ¿Qué es <span className="gradient-text">Social Trading</span>?
                </h2>
                <p className="body-lg">
                  El Social Trading de Invertox te permite seguir y copiar estrategias de traders profesionales de forma simple y transparente. Analiza perfiles, compara métricas reales y replica automáticamente operaciones directamente en tu cuenta, manteniendo siempre el control total de tus fondos.
                </p>
              </div>
            </AnimatedSection>

            {/* Beneficios Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Ideas de inversión probadas',
                  description: 'Accede a estrategias con historial verificable.',
                },
                {
                  icon: Users,
                  title: 'Traders profesionales',
                  description: 'Elige entre distintos estilos y niveles de riesgo.',
                },
                {
                  icon: BarChart3,
                  title: 'Estadísticas en tiempo real',
                  description: 'Información clara para tomar mejores decisiones.',
                },
                {
                  icon: Shield,
                  title: 'Control total de tu cuenta',
                  description: 'Pausa, ajusta o retírate cuando quieras.',
                },
              ].map((benefit, index) => (
                <AnimatedSection key={index}>
                  <div className="card-premium text-center h-full group hover:border-primary-200 border-2 border-transparent" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3">{benefit.title}</h3>
                    <p className="text-dark-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUE 3 — ¿CÓMO FUNCIONA? */}
        <section data-light-bg="true" className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="heading-md mb-6">
                  ¿Cómo <span className="gradient-text">funciona</span>?
                </h2>
              </div>
            </AnimatedSection>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: UserPlus,
                  step: '01',
                  title: 'Regístrate en Invertox',
                  description: 'Crea tu cuenta y accede al panel de Social Trading.',
                },
                {
                  icon: Search,
                  step: '02',
                  title: 'Explora traders y métricas clave',
                  description: 'Winrate, riesgo, drawdown, estilo de trading y rendimiento.',
                },
                {
                  icon: Zap,
                  step: '03',
                  title: 'Activa la copia automatizada',
                  description: 'Tu cuenta replicará las operaciones del trader seleccionado.',
                },
                {
                  icon: Settings,
                  step: '04',
                  title: 'Supervisa y ajusta',
                  description: 'Cambia de trader, pausa la copia o retira fondos sin restricciones.',
                },
              ].map((item, index) => (
                <AnimatedSection key={index}>
                  <div className="relative" style={{ transitionDelay: `${index * 150}ms` }}>
                    {/* Connector Line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0" />
                    )}

                    <div className="relative z-10 text-center">
                      {/* Step Number */}
                      <div className="text-6xl font-bold text-primary-100 mb-4">{item.step}</div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-premium flex items-center justify-center mx-auto mb-6 -mt-8">
                        <item.icon size={28} className="text-primary-500" />
                      </div>

                      <h3 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
                      <p className="text-dark-600">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUE 4 — PERFILES DESTACADOS */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="heading-md mb-6">
                  Traders <span className="gradient-text">Destacados</span>
                </h2>
                <p className="body-lg">
                  Conoce algunos de los traders más exitosos de nuestra plataforma
                </p>
              </div>
            </AnimatedSection>

            {/* Traders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTraders.map((trader, index) => (
                <AnimatedSection key={index}>
                  <div
                    className="card-premium group hover:border-primary-200 border-2 border-transparent cursor-pointer"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${trader.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">{trader.name.charAt(0)}</span>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-dark-900 mb-1">{trader.name}</h3>
                    <p className="text-sm text-primary-500 font-medium mb-3">{trader.specialty}</p>
                    <p className="text-sm text-dark-600 mb-4">{trader.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary-500">{trader.monthlyReturn}</p>
                        <p className="text-xs text-dark-500">Mensual</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-dark-900">{trader.winrate}</p>
                        <p className="text-xs text-dark-500">Winrate</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${trader.risk === 'Bajo' ? 'text-green-500' :
                          trader.risk === 'Medio' ? 'text-yellow-500' : 'text-red-500'
                          }`}>{trader.risk}</p>
                        <p className="text-xs text-dark-500">Riesgo</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-4 py-3 bg-primary-50 text-primary-600 rounded-xl font-semibold text-sm hover:bg-primary-100 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                      Ver Perfil Completo
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUE 5 — SEGURIDAD Y CONTROL */}
        <section className="section-padding bg-dark-900 text-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div>
                  <h2 className="heading-md text-white mb-6">
                    Seguridad y control en <span className="text-primary-400">todo momento</span>
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed mb-8">
                    En Invertox, tu cuenta siempre es tuya. Operamos bajo un modelo 100% Libro A (ECN), sin conflicto de intereses y con ejecución directa al mercado. Nadie más puede mover tu dinero, ni abrir operaciones por ti sin tu autorización.
                  </p>

                  {/* Security Points */}
                  <div className="space-y-4">
                    {[
                      { icon: Lock, text: 'Tus fondos permanecen siempre en tu cuenta personal.' },
                      { icon: Settings, text: 'Puedes activar o desactivar estrategias en cualquier momento.' },
                      { icon: Eye, text: 'Transparencia total en historial, métricas y rendimiento.' },
                      { icon: Clock, text: 'Ejecución en tiempo real y sin manipulación.' },
                      { icon: Sliders, text: 'Stop, límites y configuraciones siempre bajo tu control.' },
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <point.icon size={20} className="text-primary-400" />
                        </div>
                        <p className="text-white/80 pt-2">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl" />

                  {/* Security Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield size={48} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">100% Libro A (ECN)</h3>
                      <p className="text-white/60 mb-6">Sin conflicto de intereses. Ejecución directa al mercado.</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-3xl font-bold text-primary-400">24/7</p>
                          <p className="text-sm text-white/60">Monitoreo</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-3xl font-bold text-primary-400">256-bit</p>
                          <p className="text-sm text-white/60">Encriptación</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* BLOQUE 6 — NUEVO EN TRADING */}
        <section data-light-bg="true" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100/50">
          <div className="section-container">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-premium flex items-center justify-center mx-auto mb-8">
                  <Lightbulb size={36} className="text-primary-500" />
                </div>
                <h2 className="heading-md mb-6">
                  ¿Eres <span className="gradient-text">nuevo en trading</span>?
                </h2>
                <p className="body-lg mb-8">
                  El Social Trading te permite aprender observando a traders reales, copiar estrategias con historial probado y diversificar sin tener que operar manualmente. <strong>Ideal para comenzar sin complicarse.</strong>
                </p>
                <button className="btn-primary">
                  Ver Estrategias Disponibles
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BLOQUE 7 — APERTURA DE CUENTA */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2 className="heading-md text-white mb-6">
                    Abre tu cuenta en menos de <span className="text-primary-400">2 minutos</span>
                  </h2>
                  <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                    Cuenta gratuita. Sin depósitos obligatorios. Acceso completo a Social Trading, Copy Trading, PAMM y MAM.
                  </p>
                  <button className="group flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-dark-900 px-8 py-4 rounded-full transition-all font-semibold mx-auto">
                    <span>Crear Cuenta</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BLOQUE 8 — SERVICIOS: COPY TRADING, PAMM Y MAM */}
        <section data-light-bg="true" className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto ">
                <h2 className="heading-md mb-6">
                  Elige el modelo que mejor se adapta a <span className="gradient-text">tu perfil</span>
                </h2>
                <p className="body-lg mb-6">
                  Tres soluciones profesionales para inversionistas y gestores.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index}>
                  <div
                    className="card-premium h-full flex flex-col hover:border-primary-200 border-2 border-transparent"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon size={28} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{service.title}</h3>
                    <p className="text-dark-600 mb-6">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-dark-700 text-sm">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal For */}
                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-sm">
                        <span className="font-semibold text-dark-900">Ideal para: </span>
                        <span className="text-dark-600">{service.idealFor}</span>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* BLOQUE 9 — MICRO BANNERS */}
        <section className="py-6 bg-primary-500 overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex space-x-8 whitespace-nowrap">
              {[...microBanners, ...microBanners].map((text, index) => (
                <span
                  key={index}
                  className="text-dark-900 font-semibold text-lg flex items-center gap-4"
                >
                  <span className="w-2 h-2 bg-dark-900 rounded-full" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-dark-900">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="heading-md text-white mb-6">
                  Comienza a invertir <span className="text-primary-400">como un profesional</span>
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  Únete a miles de traders que ya confían en Invertox para potenciar sus inversiones.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="btn-primary">
                    Abrir Cuenta Gratis
                  </button>
                  <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                    <span>Contactar Asesor</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  )
}

