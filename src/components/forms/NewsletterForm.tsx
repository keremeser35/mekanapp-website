'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || data?.ok === false) {
        if (res.status === 400 && data?.errors?.email) {
          setError(data.errors.email)
        } else {
          setError('Abonelik işlemi başarısız. Lütfen tekrar deneyin.')
        }
        setLoading(false)
        return
      }

      setMessage('Abonelik başarılı! Teşekkürler.')
      setEmail('')
      setLoading(false)
    } catch (err) {
      setError('Ağ hatası. Lütfen tekrar deneyin.')
      setLoading(false)
    }
  }

  return (
    <form className="mt-6 sm:flex sm:max-w-md" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        E-posta adresi
      </label>
      <input
        type="email"
        id="newsletter-email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
        placeholder="E-posta adresiniz"
      />
      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <Button type="submit" loading={loading} disabled={loading}>
          Abone Ol
        </Button>
      </div>
      {message && (
        <div className="mt-3 text-sm text-green-400 sm:ml-3">{message}</div>
      )}
      {error && (
        <div className="mt-3 text-sm text-red-400 sm:ml-3">{error}</div>
      )}
    </form>
  )
}
