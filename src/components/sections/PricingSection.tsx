'use client'

import { Check, Zap, Crown, Building2, User } from 'lucide-react'

const accountTypes = [
  {
    name: 'STANDARD',
    type: 'STP',
    icon: User,
    target: 'Beginners',
    description: 'Ideal para quienes dan sus primeros pasos',
    featured: false,
    specs: {
      deposit: 'USD $0',
      spread: '1.2 a 1.6 pips',
      spreadNote: 'Basado en el depósito y/o lotaje',
      commission: '$0',
      commissionNote: null,
      minLot: '0.01 lotes',
      leverage: '1:500',
      platforms: 'MT5/Ctrader/Invertox',
    },
  },
  {
    name: 'PRO',
    type: 'STP',
    icon: Zap,
    target: 'Experienced Trader',
    description: 'Para traders con experiencia en el mercado',
    featured: true,
    specs: {
      deposit: 'USD $1,000',
      spread: '0.6 a 0.8 pips',
      spreadNote: 'Basado en el depósito y/o lotaje',
      commission: '$4 (per side)',
      commissionNote: null,
      minLot: '0.01 lotes',
      leverage: '1:500',
      platforms: 'MT5/Ctrader/Invertox',
    },
  },
  {
    name: 'RAW',
    type: 'ECN',
    icon: Crown,
    target: 'High Volume Trader',
    description: 'Spreads raw para operadores de alto volumen',
    featured: false,
    specs: {
      deposit: 'USD $5,000',
      spread: '0.0',
      spreadNote: null,
      commission: '$6 a $8 (per side)',
      commissionNote: 'Basado en el depósito y/o lotaje',
      minLot: '0.01 lotes',
      leverage: '1:200',
      platforms: 'MT5/Ctrader/Invertox',
    },
  },
  {
    name: 'PREMIUM',
    type: 'ECN',
    icon: Building2,
    target: 'Institutional Trading',
    description: 'Condiciones institucionales premium',
    featured: false,
    specs: {
      deposit: 'USD $10,000',
      spread: '0.0',
      spreadNote: null,
      commission: '$4 a $6 (per side)',
      commissionNote: 'Basado en el depósito y/o lotaje',
      minLot: '0.01 lotes',
      leverage: '1:200',
      platforms: 'MT5/Ctrader/Invertox',
    },
  },
]

const specLabels = [
  { key: 'deposit', label: 'Depósito Mín.' },
  { key: 'spread', label: 'Spread' },
  { key: 'commission', label: 'Comisión' },
  { key: 'minLot', label: 'Lotaje Mínimo' },
  { key: 'leverage', label: 'Apalancamiento' },
  { key: 'platforms', label: 'Plataformas' },
]

export default function PricingSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">
            CONOCE NUESTROS{' '}
            <span className="text-primary-400">TIPOS DE CUENTA</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            En Invertox entendemos que cada trader tiene un estilo, una estrategia y una visión distinta del mercado. Por eso diseñamos diferentes tipos de cuenta que se ajustan a tus necesidades: desde quienes dan sus primeros pasos en el trading hasta instituciones que gestionan grandes volúmenes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {accountTypes.map((account) => {
            const Icon = account.icon
            return (
              <div
                key={account.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${account.featured
                  ? 'bg-gradient-to-b from-primary-500/20 to-dark-800 border-2 border-primary-500/50 shadow-lg shadow-primary-500/20'
                  : 'bg-dark-800/50 border border-white/10 hover:border-white/20'
                  }`}
              >
                {/* Featured Badge */}
                {account.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-xs font-bold text-center py-1.5">
                    MÁS POPULAR
                  </div>
                )}

                {/* Card Header */}
                <div className={`p-6 text-center ${account.featured ? 'pt-10' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${account.featured ? 'bg-primary-500' : 'bg-white/10'
                    }`}>
                    <Icon size={24} className={account.featured ? 'text-white' : 'text-white'} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{account.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${account.type === 'ECN'
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'bg-white/10 text-white/60'
                    }`}>
                    {account.type}
                  </span>
                  <p className="text-white/40 text-sm mt-3">{account.target}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mx-6" />

                {/* Specs List */}
                <div className="p-6 space-y-4">
                  {specLabels.map((spec) => {
                    const value = account.specs[spec.key as keyof typeof account.specs]
                    const note = spec.key === 'spread'
                      ? account.specs.spreadNote
                      : spec.key === 'commission'
                        ? account.specs.commissionNote
                        : null

                    return (
                      <div key={spec.key} className="flex justify-between items-start">
                        <span className="text-white/40 text-sm">{spec.label}</span>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${spec.key === 'spread' && value === '0.0'
                            ? 'text-primary-400'
                            : 'text-white'
                            }`}>
                            {spec.key === 'spread' && value !== '0.0' ? `Desde ${value}` : value}
                          </span>
                          {note && (
                            <p className="text-white/30 text-xs mt-0.5">{note}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <div className="p-6 pt-0">
                  <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${account.featured
                    ? 'bg-primary-500 text-dark-900 hover:bg-primary-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                    Abrir Cuenta
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm max-w-4xl mx-auto leading-relaxed">
            *Todas nuestras cuentas ofrecen transparencia, ejecución rápida, spreads competitivos y seguridad internacional, respaldadas por plataformas líderes como <span className="text-primary-400">MetaTrader 5</span>, <span className="text-primary-400">cTrader</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

