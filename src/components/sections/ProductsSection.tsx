'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/ui"
import { SpinWheel } from "@/components/demo"
import { 
  SparklesIcon, 
  ChartBarSquareIcon, 
  QrCodeIcon,
  PresentationChartLineIcon,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon
} from "@heroicons/react/24/outline"

const products = [
  {
    name: 'Şans Çarkı Pro',
    description: 'Özelleştirilebilir şans çarkı sistemi ile müşteri etkileşimini maksimuma çıkarın.',
    icon: SparklesIcon,
    features: [
      'Sınırsız özelleştirme',
      'Gerçek zamanlı analytics',
      'Ses ve görsel efektler',
      'Mobil uyumlu tasarım',
      'Otomatik kazanan bildirimi'
    ],
    demoUrl: '/demo/sans-carki',
    learnMoreUrl: '/urunler/sans-carki',
    gradient: 'from-blue-500 to-purple-500',
    bgGradient: 'from-blue-50 to-purple-50'
  },
  {
    name: 'Analytics Dashboard',
    description: 'Detaylı raporlar ve performans analizleri ile işletmenizi yönetin.',
    icon: ChartBarSquareIcon,
    features: [
      'Gerçek zamanlı veriler',
      'Müşteri segmentasyonu',
      'ROI hesaplaması',
      'Trend analizleri',
      'Özelleştirilebilir raporlar'
    ],
    demoUrl: '/demo/analytics',
    learnMoreUrl: '/urunler/analytics',
    gradient: 'from-green-500 to-blue-500',
    bgGradient: 'from-green-50 to-blue-50'
  },
  {
    name: 'QR Menü Sistemi',
    description: 'Temassız menü deneyimi ve hızlı sipariş alma sistemi.',
    icon: QrCodeIcon,
    features: [
      'Temassız menü görüntüleme',
      'Direkt sipariş alma',
      'Çoklu dil desteği',
      'Fiyat güncellemeleri',
      'Stok takibi entegrasyonu'
    ],
    demoUrl: '/demo/qr-menu',
    learnMoreUrl: '/urunler/qr-menu',
    gradient: 'from-emerald-500 to-blue-500',
    bgGradient: 'from-emerald-50 to-blue-50'
  },
  {
    name: 'Performance Tracker',
    description: 'Kampanya performansı ve müşteri davranışlarını izleyin.',
    icon: PresentationChartLineIcon,
    features: [
      'Kampanya analizi',
      'Müşteri davranış takibi',
      'A/B test desteği',
      'Conversion optimizasyonu',
      'Automated insights'
    ],
    demoUrl: '/demo/performance',
    learnMoreUrl: '/urunler/performance',
    gradient: 'from-orange-500 to-purple-500',
    bgGradient: 'from-orange-50 to-purple-50'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export default function ProductsSection() {
  const [showSpinWheelDemo, setShowSpinWheelDemo] = useState(false)
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-700 bg-blue-50 px-4 py-2 rounded-full inline-block">
              Ürünlerimiz
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kapsamlı Dijital Çözümler
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              İşletmenizin ihtiyaçlarına özel tasarlanmış, entegre çözümlerle 
              müşteri deneyimini dönüştürün ve satışlarınızı artırın.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {products.map((product, index) => (
            <motion.div key={product.name} variants={item}>
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium">
                <CardHeader className="pb-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.bgGradient} mb-4`}>
                    <product.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-800">
                        <CheckIcon className="h-4 w-4 text-success-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${product.gradient} hover:opacity-90 flex-1`}
                      onClick={() => {
                        if (product.name === 'Şans Çarkı Pro') {
                          setShowSpinWheelDemo(true)
                        } else {
                          window.location.href = product.demoUrl
                        }
                      }}
                      leftIcon={product.name === 'Şans Çarkı Pro' ? <PlayIcon className="h-4 w-4" /> : undefined}
                    >
                      {product.name === 'Şans Çarkı Pro' ? 'Canlı Demo' : 'Demo Dene'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      rightIcon={<ArrowRightIcon className="h-4 w-4" />}
                      asChild
                    >
                      <a href={product.learnMoreUrl}>
                        Detaylar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 px-6 py-16 sm:px-12 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Tüm Ürünler Tek Platformda
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Ürünlerimiz birbirleriyle entegre çalışır. Tek dashboard'dan 
                tüm işlemlerinizi yönetin, verilerinizi birleştirin.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:from-yellow-500 hover:to-red-600 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  asChild
                >
                  <a href="/demo-talep">
                    Tüm Ürünleri Dene
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  asChild
                >
                  <a href="/urunler">
                    Ürün Karşılaştırması
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SpinWheel Demo Modal */}
        <Modal 
          isOpen={showSpinWheelDemo} 
          onClose={() => setShowSpinWheelDemo(false)}
          size="lg"
        >
          <ModalHeader>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <SparklesIcon className="h-6 w-6 text-primary-600" />
              Şans Çarkı Pro - Canlı Demo
            </h3>
            <p className="text-gray-800 mt-2">
              Gerçek bir şans çarkı deneyimi yaşayın! Çarkı çevirin ve ödülünüzü kazanın.
            </p>
          </ModalHeader>
          
          <ModalBody>
            <div className="flex justify-center py-8">
              <SpinWheel />
            </div>
          </ModalBody>
          
          <ModalFooter>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button 
                variant="outline" 
                onClick={() => setShowSpinWheelDemo(false)}
                className="flex-1"
              >
                Kapat
              </Button>
              <Button 
                asChild
                className="flex-1"
              >
                <a href="/demo-talep">
                  Kendi Çarkınızı Oluşturun
                </a>
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
