'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { TrendingUp, TrendingDown, Grid3X3 } from 'lucide-react'

interface PriceData {
  buyPrice: string
  sellPrice: string
  change24h: string
  isPositive: boolean
}

interface PriceWidgetProps {
  onCompareClick?: () => void
  isLightMode?: boolean
}

const priceLabels = ['Buy Price', 'Sell Price']

export default function PriceWidget({ onCompareClick, isLightMode = false }: PriceWidgetProps) {
  const [priceData, setPriceData] = useState<PriceData>({
    buyPrice: '---',
    sellPrice: '---',
    change24h: '0.00',
    isPositive: true
  })
  const [isLoading, setIsLoading] = useState(true)
  const [labelIndex, setLabelIndex] = useState(0)
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const connectWebSocket = useCallback(() => {
    // Binance WebSocket for real-time BTC/USDT data
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker')
    wsRef.current = ws

    ws.onopen = () => {
      setIsLoading(false)
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        const bestAsk = parseFloat(data.a) // Best ask price (buy)
        const bestBid = parseFloat(data.b) // Best bid price (sell)
        const priceChange = parseFloat(data.P) // 24h price change percentage

        setPriceData({
          buyPrice: bestAsk.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }),
          sellPrice: bestBid.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }),
          change24h: Math.abs(priceChange).toFixed(2),
          isPositive: priceChange >= 0
        })
        setIsLoading(false)
      } catch (error) {
        console.error('Error parsing price data:', error)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    ws.onclose = () => {
      reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000)
    }
  }, [])

  useEffect(() => {
    connectWebSocket()

    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
    }
  }, [connectWebSocket])

  // Rotate price label every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLabelIndex((prev) => (prev + 1) % priceLabels.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`flex items-center backdrop-blur-xl rounded-full overflow-hidden shadow-lg transition-all duration-300 ${
      isLightMode 
        ? 'bg-dark-900/5 border border-dark-900/10 shadow-dark-900/5' 
        : 'bg-white/5 border border-white/10 shadow-black/10'
    }`}>
      {/* Dynamic Price Label */}
      <div className={`px-4 py-3 flex items-center border-r min-w-[140px] justify-center ${
        isLightMode ? 'bg-dark-900/5 border-dark-900/10' : 'bg-white/5 border-white/10'
      }`}>
        <span
          key={labelIndex}
          className="text-primary-500 text-base font-bold tracking-wider whitespace-nowrap animate-fade-in"
        >
          {priceLabels[labelIndex]}
        </span>
      </div>

      {/* Price & Change */}
      <div className="px-4 py-3 flex items-center space-x-3">
        {isLoading ? (
          <div className={`h-5 w-24 animate-pulse rounded ${isLightMode ? 'bg-dark-900/10' : 'bg-white/10'}`} />
        ) : (
          <>
            <span
              key={`price-${labelIndex}`}
              className={`font-semibold text-base tabular-nums animate-fade-in ${
                isLightMode ? 'text-dark-900' : 'text-white'
              }`}
            >
              {labelIndex === 0 ? priceData.buyPrice : priceData.sellPrice}
            </span>
            <div className={`flex items-center text-sm font-medium ${priceData.isPositive ? 'text-primary-500' : 'text-red-500'}`}>
              {priceData.isPositive ? (
                <TrendingUp size={14} className="mr-1" />
              ) : (
                <TrendingDown size={14} className="mr-1" />
              )}
              <span className="tabular-nums">{priceData.change24h}%</span>
            </div>
          </>
        )}
      </div>

      {/* Compare Button */}
      <button
        onClick={onCompareClick}
        className={`flex items-center space-x-2 px-4 py-3 border-l transition-all ${
          isLightMode 
            ? 'border-dark-900/10 hover:bg-dark-900/5' 
            : 'border-white/10 hover:bg-white/5'
        }`}
      >
        <span className={`text-sm font-medium ${isLightMode ? 'text-dark-900/80' : 'text-white/80'}`}>Comparar</span>
        <Grid3X3 size={16} className={isLightMode ? 'text-dark-900/60' : 'text-white/60'} />
      </button>
    </div>
  )
}

