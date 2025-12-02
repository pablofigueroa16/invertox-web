'use client'

import { useEffect, useRef, memo } from 'react'

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerEl = container.current
    if (!containerEl) return

    // Clear any existing content
    containerEl.innerHTML = ''

    const widgetContainer = document.createElement('div')
    widgetContainer.className = 'tradingview-widget-container__widget'
    containerEl.appendChild(widgetContainer)

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "dateRange": "12M",
        "locale": "es",
        "largeChartUrl": "",
        "isTransparent": true,
        "showFloatingTooltip": true,
        "plotLineColorGrowing": "rgba(95, 228, 161, 1)",
        "plotLineColorFalling": "rgba(239, 68, 68, 1)",
        "gridLineColor": "rgba(255, 255, 255, 0.05)",
        "scaleFontColor": "rgba(255, 255, 255, 0.6)",
        "belowLineFillColorGrowing": "rgba(95, 228, 161, 0.15)",
        "belowLineFillColorFalling": "rgba(239, 68, 68, 0.15)",
        "belowLineFillColorGrowingBottom": "rgba(95, 228, 161, 0)",
        "belowLineFillColorFallingBottom": "rgba(239, 68, 68, 0)",
        "symbolActiveColor": "rgba(95, 228, 161, 0.2)",
        "tabs": [
          {
            "title": "Forex",
            "symbols": [
              { "s": "FX:EURUSD", "d": "EUR/USD" },
              { "s": "FX:GBPUSD", "d": "GBP/USD" },
              { "s": "FX:USDJPY", "d": "USD/JPY" },
              { "s": "FX:USDCHF", "d": "USD/CHF" },
              { "s": "FX:AUDUSD", "d": "AUD/USD" },
              { "s": "FX:USDCAD", "d": "USD/CAD" },
              { "s": "FX:USDMXN", "d": "USD/MXN" }
            ],
            "originalTitle": "Forex"
          },
          {
            "title": "Índices",
            "symbols": [
              { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
              { "s": "FOREXCOM:NSXUSD", "d": "NASDAQ 100" },
              { "s": "FOREXCOM:DJI", "d": "Dow Jones" },
              { "s": "INDEX:DEU40", "d": "DAX 40" },
              { "s": "FOREXCOM:UKXGBP", "d": "FTSE 100" }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Commodities",
            "symbols": [
              { "s": "OANDA:XAUUSD", "d": "Oro" },
              { "s": "OANDA:XAGUSD", "d": "Plata" },
              { "s": "TVC:USOIL", "d": "Petróleo WTI" },
              { "s": "TVC:UKOIL", "d": "Petróleo Brent" },
              { "s": "NYMEX:NG1!", "d": "Gas Natural" }
            ],
            "originalTitle": "Commodities"
          },
          {
            "title": "Crypto",
            "symbols": [
              { "s": "BINANCE:BTCUSDT", "d": "Bitcoin" },
              { "s": "BINANCE:ETHUSDT", "d": "Ethereum" },
              { "s": "BINANCE:SOLUSDT", "d": "Solana" },
              { "s": "BINANCE:XRPUSDT", "d": "XRP" },
              { "s": "BINANCE:BNBUSDT", "d": "BNB" }
            ],
            "originalTitle": "Crypto"
          }
        ],
        "support_host": "https://www.tradingview.com",
        "backgroundColor": "rgba(28, 28, 30, 0.8)",
        "width": "100%",
        "height": "480",
        "showSymbolLogo": true,
        "showChart": true
      }`
    containerEl.appendChild(script)

    return () => {
      if (containerEl) {
        containerEl.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  )
}

export default memo(TradingViewWidget)

