'use client'

import { useEffect, useRef, memo } from 'react'

function TickerTapeWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerEl = container.current
    if (!containerEl) return

    // Clear existing content
    containerEl.innerHTML = ''

    const widgetDiv = document.createElement('div')
    widgetDiv.className = 'tradingview-widget-container__widget'
    containerEl.appendChild(widgetDiv)

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "NASDAQ 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "FX_IDC:GBPUSD",
            "title": "GBP/USD"
          },
          {
            "proName": "FX_IDC:USDJPY",
            "title": "USD/JPY"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "proName": "OANDA:XAUUSD",
            "title": "Oro"
          },
          {
            "proName": "TVC:USOIL",
            "title": "Petróleo WTI"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "es"
      }`
    containerEl.appendChild(script)

    return () => {
      if (containerEl) {
        containerEl.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="w-full bg-dark-900 border-y border-white/5">
      <div
        className="tradingview-widget-container"
        ref={container}
      />
    </div>
  )
}

export default memo(TickerTapeWidget)

