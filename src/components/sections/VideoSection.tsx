'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = '1MYAGQZkc-U'

  return (
    <section data-light-bg="true" className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 text-sm font-semibold rounded-full mb-6">
            Descubre Invertox
          </span>
          <h2 className="heading-md text-dark-900 mb-6">
            Conoce nuestra <span className="gradient-text">plataforma</span>
          </h2>
          <p className="body-lg text-dark-500">
            Mira cómo Invertox está transformando el trading en Latinoamérica con tecnología de vanguardia y una comunidad comprometida.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Video Frame with Premium Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-dark-900/20 border border-neutral-200/50">
              {/* Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {!isPlaying ? (
                  <>
                    {/* Thumbnail with Play Button Overlay */}
                    <div className="absolute inset-0 bg-dark-900">
                      <Image
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="Video thumbnail"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        unoptimized
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-dark-900/20" />
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center z-10 group/btn"
                      aria-label="Reproducir video"
                    >
                      <div className="relative">
                        {/* Pulse Animation */}
                        <div className="absolute inset-0 w-24 h-24 bg-primary-500/30 rounded-full animate-ping" />
                        {/* Play Icon Container */}
                        <div className="relative w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover/btn:bg-primary-400 group-hover/btn:scale-110 transition-all duration-300">
                          <Play size={40} className="text-dark-900 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  </>
                ) : (
                  /* YouTube Embed */
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Invertox Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Decorative Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-primary-400/10 to-primary-500/20 rounded-2xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Tutoriales Exclusivos</h4>
            <p className="text-dark-500 text-sm">Aprende de expertos con años de experiencia</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Estrategias Probadas</h4>
            <p className="text-dark-500 text-sm">Metodologías validadas en mercados reales</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Comunidad Activa</h4>
            <p className="text-dark-500 text-sm">Conecta con traders de toda Latinoamérica</p>
          </div>
        </div>
      </div>
    </section>
  )
}
