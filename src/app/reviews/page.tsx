'use client'

import { useState, useMemo } from 'react'
import { Star, ChevronRight, User, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface Review {
  id: number
  name: string
  date: string
  rating: number
  earned?: string
  content: string
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: 'Alejandro M.',
    date: 'Diciembre 08, 2024',
    rating: 5,
    earned: '$2,450',
    content: 'Siento que es una plataforma para todos los niveles. Cuando empecé me sirvió lo simple, y ahora que sé más, aprovecho las herramientas avanzadas.',
  },
]

function StarRating({ rating, size = 20, interactive = false, onRate }: { 
  rating: number
  size?: number
  interactive?: boolean
  onRate?: (rating: number) => void 
}) {
  const [hoverRating, setHoverRating] = useState(0)
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && onRate?.(star)}
        >
          <Star
            size={size}
            className={`${
              star <= (hoverRating || rating)
                ? 'fill-primary-500 text-primary-500'
                : 'fill-dark-700 text-dark-700'
            } transition-colors`}
          />
        </button>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = review.content.length > 200

  return (
    <div className="bg-dark-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            <User size={24} className="text-dark-900" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{review.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
              <span className="text-dark-400">{review.date}</span>
              {review.earned && (
                <>
                  <span className="hidden sm:block text-dark-600">•</span>
                  <span className="text-primary-400">Ganancia: {review.earned}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <StarRating rating={review.rating} size={18} />
      </div>
      
      <p className="text-dark-300 leading-relaxed">
        {shouldTruncate && !isExpanded 
          ? `${review.content.substring(0, 200)}...` 
          : review.content
        }
      </p>
      
      {shouldTruncate && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center gap-1 group/btn"
        >
          {isExpanded ? 'Ver menos' : 'Leer más'}
          <ArrowRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
        </button>
      )}
    </div>
  )
}

function GradeBar({ stars, percentage }: { stars: number; percentage: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-dark-400 text-sm w-14">{stars} {stars === 1 ? 'star' : 'stars'}</span>
      <div className="flex-1 h-2 bg-dark-700/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-dark-400 text-sm w-10 text-right">{percentage}%</span>
    </div>
  )
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    content: '',
  })

  const stats = useMemo(() => {
    const total = reviews.length
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
    const average = total > 0 ? (sum / total).toFixed(1) : '0.0'
    
    const distribution = [5, 4, 3, 2, 1].map(stars => {
      const count = reviews.filter(r => r.rating === stars).length
      const percentage = total > 0 ? Math.round((count / total) * 100) : 0
      return { stars, percentage }
    })

    return { total, average, distribution }
  }, [reviews])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newReview.name || !newReview.rating || !newReview.content) {
      return
    }

    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      date: new Date().toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: '2-digit' 
      }),
      rating: newReview.rating,
      content: newReview.content,
    }

    setReviews([review, ...reviews])
    setNewReview({ name: '', rating: 0, content: '' })
    setIsFormOpen(false)
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-dark-400 mb-8">
            <a href="/" className="hover:text-primary-500 transition-colors">Inicio</a>
            <ChevronRight size={14} />
            <span className="text-white">Reseñas</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="heading-lg text-white mb-6">
              Reseñas de nuestra <span className="gradient-text">comunidad</span>
            </h1>
            <p className="body-lg text-dark-300">
              Conoce las experiencias de traders reales que han transformado su operativa con Invertox. Todas las reseñas son publicadas sin cambios ni moderación.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Add Review Button (Mobile) */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="lg:hidden w-full btn-primary flex items-center justify-center gap-2"
              >
                <Star size={18} />
                Escribir reseña
              </button>

              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}

              {reviews.length === 0 && (
                <div className="bg-dark-800/40 rounded-2xl p-12 text-center border border-dark-700/50">
                  <Star size={48} className="text-dark-600 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">Sin reseñas aún</h3>
                  <p className="text-dark-400">Sé el primero en compartir tu experiencia</p>
                </div>
              )}
            </div>

            {/* Sidebar - Stats & Form */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-dark-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-dark-700/50 sticky top-32">
                <h3 className="text-dark-400 text-sm font-medium mb-4">Calificación general</h3>
                
                {/* Overall Rating */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold text-white">{stats.average}</span>
                  <div className="text-4xl text-dark-500">/</div>
                  <span className="text-2xl text-dark-500">5</span>
                  <div className="flex flex-col gap-1 ml-2">
                    <StarRating rating={Math.round(Number(stats.average))} size={20} />
                    <span className="text-dark-500 text-sm">{stats.total} reseñas</span>
                  </div>
                </div>

                {/* Grade Distribution */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-dark-400 text-sm font-medium">Distribución:</h4>
                  {stats.distribution.map(({ stars, percentage }) => (
                    <GradeBar key={stars} stars={stars} percentage={percentage} />
                  ))}
                </div>

                {/* Add Review Button (Desktop) */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="hidden lg:flex w-full btn-primary items-center justify-center gap-2"
                >
                  <Star size={18} />
                  Escribir reseña
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-dark-800 rounded-3xl p-6 md:p-8 w-full max-w-lg border border-dark-700 shadow-2xl animate-fade-in">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-700/50 hover:bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="heading-sm text-white mb-2">Comparte tu experiencia</h2>
            <p className="text-dark-400 text-sm mb-6">Tu reseña ayuda a otros traders a tomar mejores decisiones</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm text-dark-300 mb-2">Tu nombre</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="Ej: Juan P."
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm text-dark-300 mb-3">Tu calificación</label>
                <div className="flex items-center gap-3">
                  <StarRating 
                    rating={newReview.rating} 
                    size={32} 
                    interactive 
                    onRate={(rating) => setNewReview({ ...newReview, rating })}
                  />
                  {newReview.rating > 0 && (
                    <span className="text-primary-500 font-medium">{newReview.rating}/5</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm text-dark-300 mb-2">Tu experiencia</label>
                <textarea
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  placeholder="Cuéntanos cómo ha sido tu experiencia con Invertox..."
                  rows={4}
                  className="w-full bg-dark-900/50 border border-dark-700 rounded-xl px-4 py-3 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!newReview.name || !newReview.rating || !newReview.content}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Publicar reseña
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

