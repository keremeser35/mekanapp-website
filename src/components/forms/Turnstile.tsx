'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    turnstile?: any
  }
}

export function Turnstile({ onToken }: { onToken: (token?: string) => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    // Eğer siteKey yoksa (ör. lokal), token üretmeye gerek yok
    if (!siteKey) {
      onToken(undefined)
      return
    }

    const render = () => {
      if (!containerRef.current || !window.turnstile) return
      try {
        if (widgetIdRef.current) {
          // Mevcut widget varsa resetle
          window.turnstile.reset(widgetIdRef.current)
        } else {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: 'auto',
            callback: (token: string) => onToken(token),
            'error-callback': () => onToken(undefined),
            'timeout-callback': () => onToken(undefined),
            'expired-callback': () => onToken(undefined),
          })
        }
      } catch {
        onToken(undefined)
      }
    }

    // Script yüklendiyse render et, değilse onLoad bekle
    if (typeof window !== 'undefined' && window.turnstile) {
      render()
    }

    return () => {
      // Bileşen unmount edilirse token'ı sıfırlayalım
      onToken(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey])

  return (
    <>
      {/* Turnstile script */}
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          onLoad={() => {
            // Script yüklendiğinde render etmeyi dene
            if (window.turnstile) {
              try {
                if (containerRef.current && !widgetIdRef.current) {
                  widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    theme: 'auto',
                    callback: (token: string) => onToken(token),
                    'error-callback': () => onToken(undefined),
                    'timeout-callback': () => onToken(undefined),
                    'expired-callback': () => onToken(undefined),
                  })
                }
              } catch {
                onToken(undefined)
              }
            }
          }}
        />
      ) : null}

      <div ref={containerRef} className="mt-2" />
    </>
  )
}
