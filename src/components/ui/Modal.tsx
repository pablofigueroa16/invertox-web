'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-900/40 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-lg bg-dark-800/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/40 border border-white/10 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title || 'Market Overview'}
            </h3>
            <p className="text-xs text-white/40 mt-0.5">Datos en tiempo real</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10"
          >
            <X size={18} className="text-white/70" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-dark-900/50">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5 bg-dark-800/30 flex items-center justify-between">
          <p className="text-xs text-white/30">
            Powered by TradingView
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-primary-400">En vivo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

