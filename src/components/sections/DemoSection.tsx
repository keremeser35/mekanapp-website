'use client'

import { motion } from "framer-motion"
import { useState } from "react"

// Pre-generate confetti to avoid hydration issues
const confettiColors = ['bg-yellow-400', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500']
const confettiParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  animationDelay: Math.random() * 2,
  animationDuration: 2 + Math.random() * 3,
  color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
}))

// Konfeti component
const Confetti = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-bounce"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`
          }}
        >
          <div className={`w-3 h-3 ${particle.color} rotate-45 opacity-80`} />
        </div>
      ))}
    </div>
  )
}

// Win Notification
const WinNotification = ({ isVisible, prize, onClose, onClaimPrize }: { 
  isVisible: boolean
  prize: number
  onClose: () => void
  onClaimPrize: () => void
}) => {
  if (!isVisible) return null
  
  return (
    <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center animate-bounce">
      <div className="text-4xl mb-2">🎉</div>
      <h4 className="text-xl font-bold text-green-800 mb-2">Tebrikler!</h4>
      <p className="text-green-700 mb-4">
        <span className="text-2xl font-bold text-green-600">{prize}₺</span> kazandınız!
      </p>
      <div className="flex gap-2">
        <button
          onClick={onClaimPrize}
          className="flex-1 bg-green-600 text-white py-2 px-4 text-sm rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Ödülümü Al
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 text-sm rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Devam Et
        </button>
      </div>
    </div>
  )
}

// Prize Claim Form
const PrizeClaimForm = ({ isVisible, prize, onClose }: {
  isVisible: boolean
  prize: number
  onClose: () => void
}) => {
  if (!isVisible) return null
  
  return (
    <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h4 className="text-lg font-bold text-gray-900 mb-3">Ödül Talep Formu</h4>
      <p className="text-gray-700 mb-4 text-sm">
        <span className="font-semibold text-green-600">{prize}₺</span> ödülünüzü almak için:
      </p>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Telefon Numarası
          </label>
          <input
            type="tel"
            placeholder="0555 123 45 67"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled
          />
          <p className="text-xs text-gray-500 mt-1">
            *Demo amaçlı - gerçek numara girmeyiniz
          </p>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Ad Soyad
          </label>
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled
          />
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-xs text-blue-800">
            📱 Bu bir demo sürümüdür. Gerçek ödül verilmemektedir. 
            Gerçek uygulamada SMS ile doğrulama kodu gönderilir.
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Demo Tamamlandı
        </button>
      </div>
    </div>
  )
}

export default function DemoSection() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [score, setScore] = useState(0)
  const [spinCount, setSpinCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showWinModal, setShowWinModal] = useState(false)
  const [showPrizeForm, setShowPrizeForm] = useState(false)
  const [currentPrize, setCurrentPrize] = useState(0)

  const spinWheel = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    const spins = 5 + Math.floor(Math.random() * 3) // 5-7 turns
    const randomAngle = Math.random() * 360
    const newRotation = rotation + (360 * spins) + randomAngle
    
    setRotation(newRotation)
    
    // Calculate prize based on final angle - Fixed algorithm
    setTimeout(() => {
      const finalAngle = newRotation % 360
      // Pointer is at top (0 degrees), calculate which segment it lands on
      // Convert wheel rotation to segment index (clockwise from top)
      const segmentAngle = 72 // 360/5 segments
      const pointerOffset = 90 // Adjust for top pointer position
      const normalizedAngle = (360 - finalAngle + pointerOffset) % 360
      const segmentIndex = Math.floor(normalizedAngle / segmentAngle) % 5
      const prizes = [200, 50, 100, 25, 75] // clockwise from top: red, teal, blue, green, yellow
      const prize = prizes[segmentIndex]
      
      setCurrentPrize(prize)
      setScore(score + prize)
      setSpinCount(spinCount + 1)
      setIsSpinning(false)
      
      // Show confetti and win modal
      setShowConfetti(true)
      setShowWinModal(true)
      
      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000)
    }, 3000)
  }

  const handleClaimPrize = () => {
    setShowWinModal(false)
    setShowPrizeForm(true)
  }

  const handleCloseWinModal = () => {
    setShowWinModal(false)
  }

  const handleClosePrizeForm = () => {
    setShowPrizeForm(false)
  }

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            🎯 Canlı Şans Çarkı Demosu
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            mekanapp'ın şans çarkı sistemini hemen deneyin! Gerçek zamanlı demo deneyimi.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-blue-900/50 backdrop-blur-sm p-8 shadow-2xl border border-white/10">
            
            <div className="relative mx-auto w-80 h-80 mb-6">
              {/* Şans Çarkı SVG */}
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl">
                <svg viewBox="0 0 200 200" className="w-full h-full transition-transform duration-[3000ms] ease-out" style={{ transform: `rotate(${rotation}deg)` }}>
                  {/* Çark Segmentleri ve Yazılar - Birlikte döner */}
                  <g>
                    {/* Segment 1 - Top - Red - 200₺ */}
                    <path d="M 100 100 L 100 0 A 100 100 0 0 1 170.71 29.29 Z" fill="#FF6B6B" />
                    <text x="130" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="drop-shadow-lg">200₺</text>
                    
                    {/* Segment 2 - Top Right - Teal - 50₺ */}
                    <path d="M 100 100 L 170.71 29.29 A 100 100 0 0 1 170.71 170.71 Z" fill="#4ECDC4" />
                    <text x="165" y="105" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="drop-shadow-lg">50₺</text>
                    
                    {/* Segment 3 - Bottom Right - Blue - 100₺ */}
                    <path d="M 100 100 L 170.71 170.71 A 100 100 0 0 1 29.29 170.71 Z" fill="#45B7D1" />
                    <text x="130" y="180" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="drop-shadow-lg">100₺</text>
                    
                    {/* Segment 4 - Bottom Left - Green - 25₺ */}
                    <path d="M 100 100 L 29.29 170.71 A 100 100 0 0 1 29.29 29.29 Z" fill="#96CEB4" />
                    <text x="35" y="105" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="drop-shadow-lg">25₺</text>
                    
                    {/* Segment 5 - Top Left - Yellow - 75₺ */}
                    <path d="M 100 100 L 29.29 29.29 A 100 100 0 0 1 100 0 Z" fill="#FFEAA7" />
                    <text x="70" y="25" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="drop-shadow-lg">75₺</text>
                  </g>
                </svg>
              </div>
              
              {/* Merkez Butonu */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button 
                  onClick={spinWheel}
                  disabled={isSpinning}
                  className={`w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl border-4 border-white text-white font-bold text-sm transition-all transform hover:scale-105 active:scale-95 ${
                    isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:from-yellow-300 hover:to-orange-400'
                  }`}
                >
                  {isSpinning ? 'ÇEVİRİYOR...' : 'ÇEVİR!'}
                </button>
              </div>
              
              {/* Pointer - Tam ortada üstte */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-red-600 shadow-lg"></div>
              </div>
            </div>
            
            {/* Skor Display */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="text-white">
                  <span className="text-sm opacity-80">Toplam Kazanç:</span>
                  <div className="text-2xl font-bold text-yellow-400">{score}₺</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-white">
                  <span className="text-sm opacity-80">Çevirme:</span>
                  <div className="text-xl font-bold">{spinCount}</div>
                </div>
              </div>
            </div>

            {/* İnline Prize Claim Form */}
            <PrizeClaimForm
              isVisible={showPrizeForm}
              prize={currentPrize}
              onClose={handleClosePrizeForm}
            />

            {/* Kazanç Bildirimi */}
            <WinNotification 
              isVisible={showWinModal}
              prize={currentPrize}
              onClose={handleCloseWinModal}
              onClaimPrize={handleClaimPrize}
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-yellow-500 opacity-20 blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse" />
          <div className="absolute top-1/2 -right-8 h-16 w-16 rounded-full bg-green-500 opacity-10 blur-lg animate-pulse" />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 mb-6">
            Gördüğünüz gibi müşterileriniz de bu kadar heyecanlanacak! 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo-talep"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              İşletmem İçin Demo İstiyorum
            </a>
            <a
              href="/paketler"
              className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Fiyatları İncele
            </a>
          </div>
        </motion.div>
      </div>

      {/* Konfeti Efekti */}
      <Confetti isActive={showConfetti} />
    </div>
  )
}