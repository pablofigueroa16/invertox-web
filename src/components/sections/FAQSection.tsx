'use client'

import { useState } from 'react'
import { Minus, Plus, MessageCircle } from 'lucide-react'

interface FAQItem {
  question: string
  description: string
  bullets?: string[]
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué es Invertox y qué lo hace diferente a otros brokers?',
    description:
      'Invertox es un broker Libro A (ECN/STP) que conecta tu cuenta directamente al mercado global sin mesa de dinero, ofreciendo transparencia, ejecución rápida, spreads competitivos y trato personalizado. No operamos en contra del trader y nuestro enfoque es brindar un ecosistema completo: trading, educación gratuita, torneos, copy trading, PAMM/MAM y más.',
  },
  {
    question: '¿Qué servicios ofrece Invertox?',
    description: 'Invertox cuenta con múltiples soluciones para traders e inversionistas:',
    bullets: [
      'Copy Trading, PAMM y MAM para inversión profesional.',
      'Academia de trading 100% gratuita con clases, señales y mentorías.',
      'Torneos de trading con premios, cashback por volumen y recompensas exclusivas.',
      'Condiciones ECN reales con spreads bajos y comisiones competitivas.',
    ],
  },
  {
    question: '¿Cómo puedo empezar a operar con Invertox?',
    description:
      'Solo debes registrarte, verificar tu cuenta (KYC) y realizar un depósito mínimo según el tipo de cuenta. Puedes operar en MT5 desde computadora o móvil. Nuestro equipo de soporte te guía en todo el proceso, incluyendo instalación, configuración y primeros pasos.',
  },
  {
    question: '¿Es seguro operar con Invertox?',
    description:
      'Sí. Invertox opera bajo estructuras regulatorias internacionales, utiliza servidores seguros, encriptación avanzada y segregación de fondos. Además, al ser broker Libro A, tus operaciones se envían directamente al mercado, reduciendo conflictos de interés.',
  },
  {
    question: '¿Qué métodos de depósito y retiro están disponibles?',
    description: 'Disponemos de métodos rápidos y confiables para México y LATAM:',
    bullets: ['Criptomonedas', 'Próximamente integraremos pagos fiat'],
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="section-padding relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Intro */}
          <div className="space-y-6 max-w-xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 bg-white/5 rounded-full px-3 py-1 border border-white/10">
              <MessageCircle size={16} />
              Preguntas frecuentes
            </span>
            <h2 className="heading-lg text-white leading-tight">
              ¿Tienes preguntas? <br className="hidden md:block" />
              Tenemos respuestas.
            </h2>
            <p className="body-lg text-white/70">
              Si no encuentras tu respuesta aquí, puedes enviarnos tu duda y nuestro equipo te ayudará.
            </p>
            <div>
              <button onClick={() => window.location.href = '#contact-section'} className="btn-primary">Hacer una pregunta</button>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${isOpen
                    ? 'bg-white/10 border-primary-500/50 shadow-lg shadow-primary-500/20'
                    : 'bg-white/5 border-white/10'
                    }`}
                >
                  <button
                    className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white">{item.question}</span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full border ${isOpen ? 'border-primary-400 text-primary-300' : 'border-white/20 text-white/70'
                        }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 space-y-3 text-white/80">
                      <p className="text-sm leading-relaxed">{item.description}</p>
                      {item.bullets && (
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-400" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

