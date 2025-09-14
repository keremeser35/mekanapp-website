'use client'

import { useEffect, useState } from 'react'
import { Consent, readConsent, writeConsent, ensureDefaultConsent } from '@/lib/consent'
import { Button } from '@/components/ui'

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    const c = ensureDefaultConsent()
    setConsent(c)
    // Analytics kapalıysa banner göster
    setVisible(!c.analytics)
  }, [])

  const acceptAll = () => {
    const next: Consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    }
    writeConsent(next)
    setConsent(next)
    setVisible(false)
    // Analytics loader, consent cookie değişimini otomatik okuyacak
    location.reload()
  }

  const declineAll = () => {
    const next: Consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    }
    writeConsent(next)
    setConsent(next)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pb-4">
        <div className="rounded-xl border bg-white/95 backdrop-blur shadow-lg p-4 md:p-5">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-800 md:flex-1">
              Bu site zorunlu çerezlerin yanı sıra deneyiminizi geliştirmek ve analiz için çerezler kullanır.
              Kabul ederek analiz ve pazarlama çerezlerinin kullanılmasına izin vermiş olursunuz.
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <Button variant="outline" onClick={declineAll}>Reddet</Button>
              <Button onClick={acceptAll}>Kabul Et</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
