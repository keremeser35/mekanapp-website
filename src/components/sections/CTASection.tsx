'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui"
import { 
  ArrowRightIcon, 
  CheckIcon, 
  PhoneIcon, 
  CalendarIcon, 
  SparklesIcon 
} from "@heroicons/react/24/outline"

const benefits = [
  "24 saat içinde kurulum tamamlanır",
  "İlk 30 gün ücretsiz deneme",
  "Teknik destek ve eğitim dahil",
  "İstediğiniz zaman iptal edebilirsiniz"
]

const urgencyReasons = [
  {
    title: "Sınırlı Zamanlı",
    description: "İlk 50 işletmeye özel kurulum paketi",
    highlight: "15 kalan",
    color: "text-warning-600"
  },
  {
    title: "Yılsonu Kampanyası",
    description: "%30 indirim fırsatı",
    highlight: "Aralık sonu",
    color: "text-success-600"
  }
]

export default function CTASection() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 h-full w-full" fill="currentColor">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white" fillOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {urgencyReasons.map((reason, index) => (
              <div key={reason.title} className="flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <SparklesIcon className="h-4 w-4 text-yellow-600" />
                <span className="text-gray-900 text-sm">
                  <span className="font-semibold">{reason.title}:</span> {reason.description} 
                  <span className={`font-bold ${reason.color} bg-white px-2 py-0.5 rounded ml-2 text-xs`}>
                    {reason.highlight}
                  </span>
                </span>
              </div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl mb-6">
              <span className="block">Dijital Dönüşümünüzü</span>
              <span className="block text-black">
                Bugün Başlatın!
              </span>
            </h2>
            
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              İzmir'in en inovatif dijital loyalty platformu ile müşteri deneyimini dönüştürün. 
              Kurulum sadece 24 saat, sonuçları hemen görmeye başlayın.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-black">
                <CheckIcon className="h-5 w-5 text-black flex-shrink-0" />
                <span className="text-left font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button
              size="xl"
              className="bg-white text-primary-700 hover:bg-neutral-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 min-w-64"
              rightIcon={<ArrowRightIcon className="h-5 w-5" />}
              asChild
            >
              <a href="/demo-talep">
                <span className="flex flex-col">
                  <span className="font-bold">Ücretsiz Demo</span>
                  <span className="text-sm font-normal">30 gün deneme dahil</span>
                </span>
              </a>
            </Button>

            <Button
              size="xl"
              variant="ghost"
              className="bg-white text-gray-700 hover:bg-gray-50 border-2 border-white backdrop-blur-sm min-w-64 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold"
              leftIcon={<PhoneIcon className="h-5 w-5" />}
              asChild
            >
              <a href="tel:+905055555555">
                <span className="flex flex-col">
                  <span className="font-bold">Hemen Ara</span>
                  <span className="text-sm font-normal">(505) 555 55 55</span>
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Alternative CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-black mb-4 font-medium">
              Önce daha fazla bilgi almak ister misiniz?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold"
                leftIcon={<CalendarIcon className="h-4 w-4" />}
                asChild
              >
                <a href="/randevu-al">
                  Online Görüşme Planla
                </a>
              </Button>
              
              <span className="text-black hidden sm:inline">•</span>
              
              <Button
                variant="ghost"
                size="sm"
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold"
                asChild
              >
                <a href="/fiyatlandirma">
                  Fiyatlandırma Bilgileri
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <p className="text-black text-sm mb-4 font-medium">
              İzmir'de 150+ işletmenin güvenilir dijital partneri
            </p>
            <div className="flex items-center justify-center gap-8 text-black text-xs">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-black" />
                <span className="font-medium">SSL Güvenlik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-black" />
                <span className="font-medium">KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-black" />
                <span className="font-medium">7/24 Destek</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-black" />
                <span className="font-medium">Para İade Garantisi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
