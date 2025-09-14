'use client'

import { useEffect } from 'react'
import { readConsent, ensureDefaultConsent } from '@/lib/consent'

function loadScript(src: string, id: string, innerHTML?: string, onload?: () => void) {
  if (document.getElementById(id)) return
  const s = document.createElement('script')
  s.async = true
  s.defer = true
  s.src = src
  s.id = id
  if (innerHTML) {
    s.text = innerHTML
  }
  if (onload) s.onload = onload
  document.head.appendChild(s)
}

function injectInline(id: string, code: string) {
  if (document.getElementById(id)) return
  const s = document.createElement('script')
  s.id = id
  s.innerHTML = code
  document.head.appendChild(s)
}

export default function AnalyticsLoader() {
  useEffect(() => {
    const consent = ensureDefaultConsent()
    // Analytics izni yoksa yükleme
    if (!consent.analytics) return

    const GA_ID = process.env.NEXT_PUBLIC_GA_ID
    const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

    // Google Analytics (gtag)
    if (GA_ID) {
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, 'ga-script')
      injectInline(
        'ga-inline',
        `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\n` +
          `gtag('js', new Date());\n` +
          `gtag('config', '${GA_ID}', { anonymize_ip: true, allow_ad_personalization_signals: false });`
      )
    }

    // Facebook Pixel
    if (FB_PIXEL_ID) {
      injectInline(
        'fbq-inline',
        `!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n n.queue=[];t=b.createElement(e);t.async=!0;\n t.src=v;s=b.getElementsByTagName(e)[0];\n s.parentNode.insertBefore(t,s)}(window, document,'script',\n 'https://connect.facebook.net/en_US/fbevents.js');\n fbq('init', '${FB_PIXEL_ID}'); fbq('consent', 'grant'); fbq('track', 'PageView');`
      )
    }

    // Sentry (CDN) — DSN varsa yükle
    const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN
    if (SENTRY_DSN) {
      loadScript(
        'https://browser.sentry-cdn.com/7.120.0/bundle.tracing.min.js',
        'sentry-cdn',
        undefined,
        () => {
          try {
            // @ts-ignore
            if (window.Sentry) {
              // @ts-ignore
              window.Sentry.init({ dsn: SENTRY_DSN, tracesSampleRate: 0.1 })
            }
          } catch {}
        }
      )
    }
  }, [])

  return null
}
