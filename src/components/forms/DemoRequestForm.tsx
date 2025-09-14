'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from "@/components/ui"
import { CheckIcon, SparklesIcon, CalendarIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { Turnstile } from "@/components/forms/Turnstile"

interface DemoRequestData {
  name: string
  email: string
  phone: string
  business: string
  businessType: string
  employeeCount: string
  currentSolutions: string
  interests: string[]
  preferredTime: string
  message: string
}

const businessTypes = [
  { value: 'restaurant', label: 'Restoran' },
  { value: 'cafe', label: 'Kafe' },
  { value: 'retail', label: 'Perakende' },
  { value: 'hotel', label: 'Otel' },
  { value: 'beauty', label: 'Güzellik Salonu' },
  { value: 'fitness', label: 'Spor Salonu' },
  { value: 'other', label: 'Diğer' }
]

const employeeCounts = [
  { value: '1-5', label: '1-5 çalışan' },
  { value: '6-20', label: '6-20 çalışan' },
  { value: '21-50', label: '21-50 çalışan' },
  { value: '50+', label: '50+ çalışan' }
]

const interestOptions = [
  { id: 'spinwheel', label: 'Şans Çarkı Sistemi' },
  { id: 'qrmenu', label: 'QR Menü' },
  { id: 'loyalty', label: 'Sadakat Programı' },
  { id: 'analytics', label: 'Analytics Dashboard' },
  { id: 'pos', label: 'POS Entegrasyonu' },
  { id: 'mobile', label: 'Mobil Uygulama' }
]

const preferredTimes = [
  { value: 'morning', label: 'Sabah (09:00-12:00)' },
  { value: 'afternoon', label: 'Öğleden sonra (13:00-17:00)' },
  { value: 'evening', label: 'Akşam (18:00-20:00)' },
  { value: 'flexible', label: 'Esnek' }
]

export default function DemoRequestForm() {
  const [formData, setFormData] = useState<DemoRequestData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    businessType: '',
    employeeCount: '',
    currentSolutions: '',
    interests: [],
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<DemoRequestData>>({})
  const [apiError, setApiError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>(undefined)

  const totalSteps = 3

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<DemoRequestData> = {}
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'İsim gerekli'
      if (!formData.email.trim()) newErrors.email = 'E-posta gerekli'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Geçerli e-posta adresi girin'
      if (!formData.phone.trim()) newErrors.phone = 'Telefon gerekli'
    } else if (step === 2) {
      if (!formData.business.trim()) newErrors.business = 'İşletme adı gerekli'
      if (!formData.businessType) newErrors.businessType = 'İşletme türü seçin'
      if (!formData.employeeCount) newErrors.employeeCount = 'Çalışan sayısı seçin'
    } else if (step === 3) {
      if (formData.interests.length === 0) newErrors.interests = ['En az bir ilgi alanı seçin'] as any
      if (!formData.preferredTime) newErrors.preferredTime = 'Tercih edilen zaman seçin'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    setApiError(null)

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || data?.ok === false) {
        if (res.status === 400 && data?.errors) {
          // Backend errors anahtarı DemoRequestData alanları ile eşleşiyor
          setErrors(data.errors as Partial<DemoRequestData>)
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
      // Reset için buton zaten success ekranında var; formu temizleme success butonunda yapılıyor
    } catch (err) {
      setApiError('Ağ hatası. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof DemoRequestData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const toggleInterest = (interestId: string) => {
    const newInterests = formData.interests.includes(interestId)
      ? formData.interests.filter(id => id !== interestId)
      : [...formData.interests, interestId]
    handleChange('interests', newInterests)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <SparklesIcon className="h-10 w-10 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Demo Talebiniz Alındı! 🎉
        </h3>
        <p className="text-lg text-gray-800 mb-6">
          Kişiselleştirilmiş demo için sizinle 24 saat içinde iletişime geçeceğiz.
        </p>
        <div className="bg-primary-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-primary-900 mb-2">Sıradaki Adımlar:</h4>
          <ul className="text-sm text-primary-700 space-y-1">
            <li>✅ Demo talebiniz ekibimize iletildi</li>
            <li>📞 Demo uzmanımız sizi arayacak</li>
            <li>🎯 İhtiyaçlarınıza özel demo hazırlanacak</li>
            <li>💡 Canlı demo oturumu gerçekleştirilecek</li>
          </ul>
        </div>
        <Button 
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
            setFormData({
              name: '',
              email: '',
              phone: '',
              business: '',
              businessType: '',
              employeeCount: '',
              currentSolutions: '',
              interests: [],
              preferredTime: '',
              message: ''
            })
          }} 
          variant="outline"
        >
          Yeni Demo Talebi
        </Button>
      </motion.div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="flex items-center gap-2">
            <SparklesIcon className="h-6 w-6 text-primary-600" />
            Ücretsiz Demo Talebi
          </CardTitle>
          <div className="text-sm text-gray-700">
            {currentStep} / {totalSteps}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  <Input
                    label="Ad Soyad *"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    error={errors.name}
                    placeholder="Adınız ve soyadınız"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="E-posta *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="ornek@email.com"
                    />
                    
                    <Input
                      label="Telefon *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="(0532) 123 45 67"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  İşletme Bilgileri
                </h3>
                <div className="space-y-4">
                  <Input
                    label="İşletme Adı *"
                    value={formData.business}
                    onChange={(e) => handleChange('business', e.target.value)}
                    error={errors.business}
                    placeholder="İşletmenizin adı"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        İşletme Türü *
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => handleChange('businessType', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                          errors.businessType ? 'border-red-300' : 'border-neutral-300'
                        }`}
                      >
                        <option value="">Seçin</option>
                        {businessTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Çalışan Sayısı *
                      </label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => handleChange('employeeCount', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                          errors.employeeCount ? 'border-red-300' : 'border-neutral-300'
                        }`}
                      >
                        <option value="">Seçin</option>
                        {employeeCounts.map(count => (
                          <option key={count.value} value={count.value}>
                            {count.label}
                          </option>
                        ))}
                      </select>
                      {errors.employeeCount && (
                        <p className="mt-1 text-sm text-red-600">{errors.employeeCount}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mevcut Çözümler
                    </label>
                    <textarea
                      value={formData.currentSolutions}
                      onChange={(e) => handleChange('currentSolutions', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Şu anda kullandığınız dijital çözümler (isteğe bağlı)"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Demo Preferences */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Demo Tercihleri
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      İlgilendiğiniz Özellikler *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {interestOptions.map(option => (
                        <label
                          key={option.id}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.interests.includes(option.id)
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-neutral-300 hover:border-primary-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option.id)}
                            onChange={() => toggleInterest(option.id)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                            formData.interests.includes(option.id)
                              ? 'border-primary-500 bg-primary-500'
                              : 'border-neutral-300'
                          }`}>
                            {formData.interests.includes(option.id) && (
                              <CheckIcon className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.interests && (
                      <p className="mt-1 text-sm text-red-600">{errors.interests[0]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tercih Edilen Demo Zamanı *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                        errors.preferredTime ? 'border-red-300' : 'border-neutral-300'
                      }`}
                    >
                      <option value="">Zaman dilimi seçin</option>
                      {preferredTimes.map(time => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ek Notlar
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Demo ile ilgili özel istekleriniz veya sorularınız"
                    />
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
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'invisible' : ''}
            >
              Geri
            </Button>

            <div className="text-sm text-gray-700">
              {currentStep} / {totalSteps}
            </div>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
              >
                İleri
              </Button>
            ) : (
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary-600 to-secondary-600"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Demo Talep Et'}
              </Button>
            )}
          </div>

          <p className="text-xs text-gray-700 mt-4 text-center">
            Demo talebiniz 24 saat içinde değerlendirilecektir. Kişisel verileriniz KVKK kapsamında korunmaktadır.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
