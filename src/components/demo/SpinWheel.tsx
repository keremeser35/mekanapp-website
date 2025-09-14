'use client'

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui"
import { SparklesIcon, GiftIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { cn } from "@/lib/utils"

interface WheelSegment {
  id: string
  text: string
  color: string
  value: number
  type: 'discount' | 'gift' | 'points' | 'cashback'
  icon: React.ComponentType<any>
}

const segments: WheelSegment[] = [
  { id: '1', text: '%10 İndirim', color: '#f97316', value: 10, type: 'discount', icon: CurrencyDollarIcon },
  { id: '2', text: 'Hediye Kahve', color: '#0ea5e9', value: 1, type: 'gift', icon: GiftIcon },
  { id: '3', text: '50 Puan', color: '#22c55e', value: 50, type: 'points', icon: SparklesIcon },
  { id: '4', text: '%20 İndirim', color: '#f59e0b', value: 20, type: 'discount', icon: CurrencyDollarIcon },
  { id: '5', text: 'Ücretsiz Tatlı', color: '#ef4444', value: 1, type: 'gift', icon: GiftIcon },
  { id: '6', text: '100 Puan', color: '#8b5cf6', value: 100, type: 'points', icon: SparklesIcon },
  { id: '7', text: '%5 Cashback', color: '#06b6d4', value: 5, type: 'cashback', icon: CurrencyDollarIcon },
  { id: '8', text: '25 Puan', color: '#10b981', value: 25, type: 'points', icon: SparklesIcon },
]

interface EffectParticle {
  id: string
  x: number
  y: number
  type: 'lightning' | 'firefly' | 'laser' | 'shock' | 'energy'
}

export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedPrize, setSelectedPrize] = useState<WheelSegment | null>(null)
  const [showPrizeModal, setShowPrizeModal] = useState(false)
  const [effects, setEffects] = useState<EffectParticle[]>([])
  const wheelRef = useRef<HTMLDivElement>(null)

  const segmentAngle = 360 / segments.length

  const generateEffects = useCallback((prizeValue: number) => {
    const newEffects: EffectParticle[] = []
    const effectCount = prizeValue >= 100 ? 50 : prizeValue >= 50 ? 30 : 20

    for (let i = 0; i < effectCount; i++) {
      let effectType: EffectParticle['type'] = 'firefly'
      
      if (prizeValue >= 100) {
        const types: EffectParticle['type'][] = ['lightning', 'energy', 'laser', 'shock']
        effectType = types[Math.floor(Math.random() * types.length)]
      } else if (prizeValue >= 50) {
        effectType = Math.random() > 0.5 ? 'laser' : 'firefly'
      }

      newEffects.push({
        id: `effect-${i}`,
        x: Math.random() * 400,
        y: Math.random() * 400,
        type: effectType
      })
    }

    setEffects(newEffects)
    setTimeout(() => setEffects([]), 3000)
  }, [])

  const spinWheel = useCallback(() => {
    if (isSpinning) return

    setIsSpinning(true)
    setSelectedPrize(null)
    setShowPrizeModal(false)

    // Calculate random spin (3-5 full rotations + random segment)
    const spins = 3 + Math.random() * 2
    const randomSegment = Math.floor(Math.random() * segments.length)
    const finalRotation = rotation + (spins * 360) + (randomSegment * segmentAngle)

    setRotation(finalRotation)

    setTimeout(() => {
      const normalizedRotation = finalRotation % 360
      const segmentIndex = Math.floor((360 - normalizedRotation + segmentAngle / 2) / segmentAngle) % segments.length
      const prize = segments[segmentIndex]
      
      setSelectedPrize(prize)
      setIsSpinning(false)
      generateEffects(prize.value)
      
      setTimeout(() => {
        setShowPrizeModal(true)
      }, 500)
    }, 4000)
  }, [isSpinning, rotation, segmentAngle, generateEffects])

  const resetWheel = () => {
    setSelectedPrize(null)
    setShowPrizeModal(false)
    setEffects([])
  }

  return (
    <div className="relative">
      {/* Effects Layer */}
      <AnimatePresence>
        {effects.map((effect) => (
          <motion.div
            key={effect.id}
            className={cn(
              "absolute pointer-events-none z-20",
              {
                "w-1 h-8 bg-yellow-400 shadow-lg": effect.type === 'lightning',
                "w-2 h-2 bg-blue-400 rounded-full": effect.type === 'firefly',
                "w-0.5 h-12 bg-red-500": effect.type === 'laser',
                "w-8 h-8 border-2 border-purple-500 rounded-full": effect.type === 'shock',
                "w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full": effect.type === 'energy'
              }
            )}
            initial={{ 
              x: effect.x, 
              y: effect.y, 
              scale: 0, 
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{ 
              x: effect.x + (Math.random() - 0.5) * 200,
              y: effect.y + (Math.random() - 0.5) * 200,
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: Math.random() * 720
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              duration: effect.type === 'energy' ? 2 : 1.5,
              ease: "easeOut"
            }}
            style={{ left: effect.x, top: effect.y }}
          />
        ))}
      </AnimatePresence>

      <div className="flex flex-col items-center space-y-8">
        {/* Wheel Container */}
        <div className="relative">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-neutral-800"></div>
          </div>

          {/* Wheel */}
          <motion.div
            ref={wheelRef}
            className="relative w-80 h-80 rounded-full border-4 border-neutral-800 shadow-2xl overflow-hidden"
            animate={{ rotate: rotation }}
            transition={{ 
              duration: isSpinning ? 4 : 0,
              ease: isSpinning ? [0.23, 1, 0.32, 1] : "linear"
            }}
          >
            {segments.map((segment, index) => {
              const startAngle = index * segmentAngle
              const isSelected = selectedPrize?.id === segment.id

              return (
                <div
                  key={segment.id}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center text-white font-bold text-sm transition-all duration-300",
                    isSelected && !isSpinning && "animate-pulse"
                  )}
                  style={{
                    background: segment.color,
                    clipPath: `polygon(50% 50%, ${
                      50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180)
                    }% ${
                      50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180)
                    }%, ${
                      50 + 50 * Math.cos((startAngle + segmentAngle - 90) * Math.PI / 180)
                    }% ${
                      50 + 50 * Math.sin((startAngle + segmentAngle - 90) * Math.PI / 180)
                    }%)`,
                    transform: `rotate(${startAngle + segmentAngle / 2}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center transform -rotate-90 translate-y-16">
                    <segment.icon className="h-4 w-4 mb-1" />
                    <span className="text-xs whitespace-nowrap">{segment.text}</span>
                  </div>
                </div>
              )
            })}

            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-neutral-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="text-center space-y-4">
          <Button
            size="xl"
            onClick={spinWheel}
            disabled={isSpinning}
            className="min-w-32"
            loading={isSpinning}
          >
            {isSpinning ? 'Çevriliyor...' : 'Çevir!'}
          </Button>

          {selectedPrize && !showPrizeModal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-lg font-semibold text-gray-900">
                🎉 Tebrikler! 🎉
              </p>
              <p className="text-primary-600 font-bold text-xl">
                {selectedPrize.text} kazandınız!
              </p>
            </motion.div>
          )}
        </div>

        {/* Prize Modal */}
        <AnimatePresence>
          {showPrizeModal && selectedPrize && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setShowPrizeModal(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center"
                onClick={e => e.stopPropagation()}
              >
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: selectedPrize.color }}
                  >
                    <selectedPrize.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Tebrikler! 🎉
                  </h3>
                  <p className="text-xl font-semibold" style={{ color: selectedPrize.color }}>
                    {selectedPrize.text}
                  </p>
                  <p className="text-gray-800 mt-4">
                    Hediyenizi kullanmak için aşağıdaki kodu kaydedin veya ekran görüntüsü alın.
                  </p>
                  <div className="bg-neutral-100 rounded-lg p-4 mt-4">
                    <code className="text-lg font-mono font-bold">
                      DEMO{selectedPrize.id}1234
                    </code>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={resetWheel}
                    className="flex-1"
                  >
                    Tekrar Çevir
                  </Button>
                  <Button 
                    onClick={() => setShowPrizeModal(false)}
                    className="flex-1"
                  >
                    Kapat
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
