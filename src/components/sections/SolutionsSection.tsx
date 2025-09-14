'use client'

import { motion } from "framer-motion"
import { 
  CogIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  SparklesIcon,
  GiftIcon
} from "@heroicons/react/24/outline"

const solutions = [
  {
    name: 'Dijital Sadakat Programları',
    description: 'Müşterilerinizi puan biriktirme, kademeli ödüller ve kişiselleştirilmiş kampanyalarla sadık tutun.',
    icon: GiftIcon,
    features: ['Puan Sistemi', 'Kademeli Ödüller', 'SMS/WhatsApp Entegrasyonu', 'Müşteri Segmentasyonu'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Oyunlaştırma Sistemleri',
    description: 'Şans çarkı, çekiliş kampanyaları ve interaktif oyunlarla müşteri deneyimini eğlenceli hale getirin.',
    icon: SparklesIcon,
    features: ['Şans Çarkı', 'Çekiliş Kampanyaları', 'Günlük Ödüller', 'Sosyal Paylaşım'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Digital Signage Çözümleri',
    description: 'Mağaza içi ekranlarınızda dinamik içerikler, promosyonlar ve müşteri etkileşim araçları gösterin.',
    icon: PresentationChartLineIcon,
    features: ['Dinamik İçerik', 'Kampanya Yönetimi', 'Sosyal Medya Feed', 'Hava Durumu Widget'],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Analytics & Raporlama',
    description: 'Müşteri davranışlarını analiz edin, kampanya performansını ölçün ve veri odaklı kararlar alın.',
    icon: ChartBarIcon,
    features: ['Müşteri Analizi', 'Kampanya ROI', 'Gerçek Zamanlı Dashboard', 'Özel Raporlar'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Mobil Uygulama Entegrasyonu',
    description: 'iOS ve Android uygulamalarınızla tam entegrasyon sağlayın, push bildirimler gönderin.',
    icon: DevicePhoneMobileIcon,
    features: ['Native Apps', 'Push Notifications', 'Geofencing', 'Offline Sync'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    name: 'POS & ERP Entegrasyonu',
    description: 'Mevcut sistemlerinizle sorunsuz entegrasyon. Satış verilerini otomatik senkronize edin.',
    icon: CogIcon,
    features: ['POS Entegrasyonu', 'ERP Bağlantısı', 'API Desteği', 'Real-time Sync'],
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function SolutionsSection() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-700 bg-blue-100 px-4 py-2 rounded-full inline-block">
            Dijital Çözümlerimiz
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kapsamlı Dijital Dönüşüm Platformu
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Müşteri sadakati, oyunlaştırma, dijital signage ve analitik çözümlerinin 
            tamamını tek platformda birleştiren entegre sistem.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid max-w-xl mx-auto lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.name} 
              variants={item}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${solution.bgColor} mb-6`}>
                <solution.icon className={`w-6 h-6 ${solution.color}`} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-gray-800 mb-4">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-800">
                      <div className={`w-2 h-2 rounded-full ${solution.color.replace('text-', 'bg-')} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent hover:border-opacity-20 hover:${solution.color.replace('text-', 'border-')} transition-colors duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-12 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              İhtiyacınıza Özel Çözüm Tasarlayalım
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Hangi modüllere ihtiyacınız olduğunu belirleyelim ve işletmeniz için 
              en uygun paketi birlikte oluşturalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo-talep"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Ücretsiz Danışmanlık Al
              </a>
              <a
                href="/cozumler"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Tüm Çözümleri İncele
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}