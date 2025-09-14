'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from "@/components/ui"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Turnstile } from "@/components/forms/Turnstile"

interface ContactFormData {
  name: string
  email: string
  phone: string
  business: string
  message: string
  subject: string
}

const subjects = [
  { value: 'demo', label: 'Demo Talebi' },
  { value: 'pricing', label: 'Fiyatlandırma Bilgisi' },
  { value: 'support', label: 'Teknik Destek' },
  { value: 'partnership', label: 'İş Ortaklığı' },
  { value: 'other', label: 'Diğer' }
]

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Telefon",
    value: "(0232) 123 45 67",
    href: "tel:+902321234567"
  },
  {
    icon: EnvelopeIcon,
    title: "E-posta",
    value: "info@mekanup.com",
    href: "mailto:info@mekanup.com"
  },
  {
    icon: MapPinIcon,
    title: "Adres",
    value: "Güzelyalı, İzmir",
    href: "https://maps.google.com/?q=Güzelyalı,İzmir"
  }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    subject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [apiError, setApiError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>(undefined)

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'İsim gerekli'
    if (!formData.email.trim()) newErrors.email = 'E-posta gerekli'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Geçerli e-posta adresi girin'
    if (!formData.phone.trim()) newErrors.phone = 'Telefon gerekli'
    if (!formData.subject) newErrors.subject = 'Konu seçin'
    if (!formData.message.trim()) newErrors.message = 'Mesaj gerekli'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setApiError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || data?.ok === false) {
        if (res.status === 400 && data?.errors) {
          setErrors(data.errors as Partial<ContactFormData>)
        } else if (res.status === 403 && data?.error === 'invalid_captcha') {
          setApiError('Güvenlik doğrulaması başarısız. Lütfen tekrar deneyin.')
        } else {
          setApiError('Bir hata oluştu. Lütfen tekrar deneyin.')
        }
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Başarılı gönderim sonrası formu sıfırla
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: '',
          subject: ''
        })
      }, 3000)
    } catch (err) {
      setApiError('Ağ hatası. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mesajınız Gönderildi!
        </h3>
        <p className="text-gray-800 mb-4">
          Bizimle iletişime geçtiğiniz için teşekkürler. En kısa sürede size dönüş yapacağız.
        </p>
        <p className="text-sm text-gray-700">
          Acil durumlar için: (0232) 123 45 67
        </p>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>İletişim Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <info.icon className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{info.title}</div>
                  <div className="text-sm text-gray-800">{info.value}</div>
                </div>
              </motion.a>
            ))}
            
            <div className="pt-6 border-t">
              <h4 className="font-medium text-gray-900 mb-3">Çalışma Saatleri</h4>
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Bizimle İletişime Geçin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Ad Soyad *"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                  placeholder="Adınız ve soyadınız"
                />
                
                <Input
                  label="E-posta *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Telefon *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  error={errors.phone}
                  placeholder="(0532) 123 45 67"
                />
                
                <Input
                  label="İşletme Adı"
                  value={formData.business}
                  onChange={(e) => handleChange('business', e.target.value)}
                  placeholder="İşletmenizin adı"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konu *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.subject ? 'border-red-300' : 'border-neutral-300'
                  }`}
                >
                  <option value="">Konu seçin</option>
                  {subjects.map(subject => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none ${
                    errors.message ? 'border-red-300' : 'border-neutral-300'
                  }`}
                  placeholder="Mesajınızı buraya yazın..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {apiError && (
                <div className="p-3 rounded-md bg-red-50 text-red-700 text-sm">
                  {apiError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Güvenlik Doğrulaması
                </label>
                <Turnstile onToken={setTurnstileToken} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      business: '',
                      message: '',
                      subject: ''
                    })
                    setErrors({})
                  }}
                  className="flex-1 sm:flex-initial"
                >
                  Temizle
                </Button>
              </div>

              <p className="text-xs text-gray-700">
                * Zorunlu alanlar. Kişisel verileriniz KVKK kapsamında korunmaktadır.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
