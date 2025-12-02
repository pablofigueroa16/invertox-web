'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const partners = [
  {
    name: 'MetaTrader 5',
    description: 'Plataforma Oficial',
    logo: '/partners/metatrader5-logo.png'
  },
  {
    name: 'TradingView',
    description: 'Gráficos Pro',
    logo: '/partners/tradingview-logo.png'
  },
  {
    name: 'cTrader',
    description: 'Trading Avanzado',
    logo: '/partners/ctrader-logo.png'
  },
]

const regulations = [
  { name: 'SVG', description: 'St. Vincent & The Granadines', flag: 'https://flagcdn.com/w160/vc.png' },
  { name: 'FSC', description: 'Mauritius Soon', flag: 'https://flagcdn.com/w160/mu.png' },
  { name: 'Cyprus / CySEC', description: 'Chipre Soon', flag: 'https://flagcdn.com/w160/cy.png' },
  { name: 'UAE DFSA / SCA', description: 'Dubái Soon', flag: 'https://flagcdn.com/w160/ae.png' },
]

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Trader Profesional',
    country: 'México',
    rating: 5,
    comment: 'La transparencia y ejecución real de Invertox es lo que buscaba. Los spreads son excelentes y el soporte siempre está disponible.',
  },
  {
    name: 'María González',
    role: 'Cuenta Fondeada',
    country: 'Colombia',
    rating: 5,
    comment: 'Pasé la evaluación de cuenta fondeada gracias a la Academy. Ahora opero con capital de la firma y comparto ganancias 80/20.',
  },
  {
    name: 'Rodrigo Silva',
    role: 'Estudiante Academy',
    country: 'Argentina',
    rating: 5,
    comment: 'Los cursos y lives de la Academy son increíbles. Aprendí más en 3 meses que en años intentando solo. Comunidad espectacular.',
  },
]

export default function TrustSection() {
  return (
    <section data-light-bg="true" className="section-padding bg-white">
      <div className="section-container">
        {/* Partners Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="heading-sm mb-4">Partners Tecnológicos</h2>
            <p className="text-dark-600">Trabajamos con las mejores tecnologías del mercado</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="card-premium text-center hover:border-primary-200 border-2 border-transparent group"
              >
                <div className="h-20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={60}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulations Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="heading-sm mb-4">Regulaciones & Seguridad</h2>
            <p className="text-dark-600">Cumplimiento total con estándares internacionales</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {regulations.map((regulation, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-premium overflow-hidden">
                  <Image
                    src={regulation.flag}
                    alt={`${regulation.name} flag`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-dark-900 text-lg mb-2">{regulation.name}</h4>
                <p className="text-sm text-dark-600">{regulation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Lo que dicen <span className="gradient-text">nuestros traders</span>
            </h2>
            <p className="body-lg">Historias reales de traders reales en LATAM</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center shadow-premium">
                  <Quote size={24} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-dark-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="font-bold text-dark-900">{testimonial.name}</h4>
                  <p className="text-sm text-dark-600">{testimonial.role}</p>
                  <p className="text-xs text-primary-500 mt-1">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">256-bit</p>
              <p className="text-sm text-dark-600">Encriptación SSL</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">100%</p>
              <p className="text-sm text-dark-600">Datos Protegidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">24/7</p>
              <p className="text-sm text-dark-600">Monitoreo Activo</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-500 mb-2">LATAM</p>
              <p className="text-sm text-dark-600">Líder Regional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

