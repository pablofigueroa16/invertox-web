'use client'

import { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'

export default function ContactSection() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = message.trim() || 'Hola, quiero registrarme en Invertox'
    const encoded = encodeURIComponent(text)
    const waUrl = `https://api.whatsapp.com/send?phone=+5215530476074&text=${encoded}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contact-section"
      data-light-bg="true"
      className="section-padding bg-gradient-hero relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-primary-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-primary-100 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-3 py-1 border border-primary-100">
              <MessageCircle size={16} />
              Contacto directo
            </span>
            <h2 className="heading-md text-dark-900 leading-tight">
              Hablemos sobre
              <br />
              <span className="text-primary-500">tu próxima operación</span>
            </h2>
            <p className="body-lg text-dark-700">
              Escribe tu pregunta y te redirigiremos a WhatsApp para contactar a nuestro equipo.
            </p>
            <div className="flex flex-col gap-2 text-dark-600 text-sm">
              <p>Respuesta rápida de nuestro equipo de soporte especializado.</p>
              <p>Horario: 24/7 para traders en LATAM.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-premium border border-neutral-200/70">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm text-dark-700 font-medium" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu pregunta y te ayudaremos por WhatsApp..."
                  className="w-full min-h-[140px] rounded-2xl bg-white border border-neutral-200 text-dark-800 placeholder-dark-400 px-4 py-3 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 text-dark-900 font-semibold rounded-full px-6 py-3 hover:bg-primary-400 transition-all duration-200"
              >
                Enviar por WhatsApp
                <Send size={18} />
              </button>
            </form>
            <p className="text-xs text-dark-500 mt-3">
              Usaremos tu mensaje para abrir WhatsApp con el texto precargado en nuestro chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

