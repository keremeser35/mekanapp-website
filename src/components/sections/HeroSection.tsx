'use client'

import { motion } from "framer-motion"
import { PlayIcon, StarIcon } from "@heroicons/react/24/solid"
import { Button } from "@/components/ui"
import Link from "next/link"

const stats = [
  { label: 'Çözüm Modülü', value: '4+' },
  { label: 'Sektör Deneyimi', value: '5 Yıl' },
  { label: 'Entegrasyon', value: 'Kolay' },
  { label: 'Müşteri Artışı', value: '%40+' },
]

export default function HeroSection() {

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              İşletmenizi{' '}
              <span className="text-blue-600">Oyunlaştırma</span> ile{' '}
              Dijital Çağa Taşıyın
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Müşteri sadakat programları, dijital signage sistemleri ve oyunlaştırma çözümleri ile 
              <span className="font-semibold text-green-600">satışlarınızı artırın</span>, 
              <span className="font-semibold text-blue-600">müşteri bağlılığını güçlendirin</span>. 
              KOBİ'ler için özel tasarlanmış entegre dijital dönüşüm platformu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="xl" asChild>
              <Link href="/demo-talep">
                Ücretsiz Demo Al
              </Link>
            </Button>
            <Button variant="ghost" size="xl" leftIcon={<PlayIcon className="h-5 w-5" />}>
              Video İzle
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-x-2 text-sm text-gray-900"
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 - 200+ mutlu müşteri</span>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="mx-auto max-w-4xl">
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <dt className="text-base leading-7 text-gray-800">{stat.label}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>

      </div>

      
    </div>
  )
}
