'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import BienenLogo from '@/public/BienenLogoNeat.png'

interface ParticlePosition {
  x: number
  y: number
  targetX: number
  duration: number
  delay: number
}

interface LoadingScreenProps {
  onLoadingComplete: () => void
  loadingProgress: number
  isLoading: boolean
}

const getLoadingText = (progress: number): string => {
  if (progress < 10) return 'Willkommen bei Wir helfen aus e.V.!'
  if (progress < 15) return 'Lade Schriftarten...'
  if (progress < 40) return 'Lade Bilder...'
  if (progress < 65) return 'Optimiere Inhalte...'
  if (progress < 80) return 'Bereite Komponenten vor...'
  if (progress < 90) return 'Finalisiere...'
  return 'Fast fertig...'
}

export default function LoadingScreen({ onLoadingComplete, loadingProgress, isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [particlePositions, setParticlePositions] = useState<ParticlePosition[]>([])
  const [showCompletionMessage, setShowCompletionMessage] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const positions = Array.from({ length: 6 }, () => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        targetX: Math.random() * window.innerWidth,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
      setParticlePositions(positions)
    }
  }, [])

  useEffect(() => {
    if (!isLoading && loadingProgress >= 100) {
      setShowCompletionMessage(true)
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
        const completeTimer = setTimeout(() => {
          onLoadingComplete()
        }, 500)
        return () => clearTimeout(completeTimer)
      }, 2000)
      return () => clearTimeout(hideTimer)
    }
  }, [isLoading, loadingProgress, onLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-amber-50/30 dark:via-amber-900/10 to-amber-100/20 dark:to-amber-900/5 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden pt-safe-top"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 relative w-[120px] h-[120px]"
          >
            <Image
              src={BienenLogo}
              alt="Wir helfen aus e.V. Logo"
              fill
              className="object-contain rounded-full shadow-lg"
              priority
            />
          </motion.div>

          {/* Ladeanzeige */}
          <div className="w-64 md:w-80 mb-4 relative">
            <div
              className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-full h-4 overflow-hidden shadow-inner border border-amber-300/30"
              role="progressbar"
              aria-valuenow={loadingProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full relative"
                initial={{ width: '0%' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-amber-600">
              {Math.round(loadingProgress)}%
            </div>
          </div>

          {/* Lade-Text */}
          {!showCompletionMessage ? (
            <div className="text-center" aria-live="polite">
              <p className="text-gray-600 text-lg mb-2">{getLoadingText(loadingProgress)}</p>
              <p className="text-sm text-gray-500">{Math.round(loadingProgress)}% geladen</p>
              <p className="text-xs text-gray-400 mt-2">
                Für eine optimale Erfahrung werden alle Inhalte vorbereitet
              </p>
            </div>
          ) : (
            <Card className="bg-white/60 backdrop-blur-md border border-amber-300">
              <CardContent className="text-center space-y-2">
                <h2 className="text-xl font-bold text-amber-600">✨ Bereit! ✨</h2>
                <p className="text-gray-700">Du wirst gleich weitergeleitet …</p>
              </CardContent>
            </Card>
          )}

          {/* Deko-Teilchen */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((p, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ x: p.x, y: p.y }}
                animate={{ x: p.targetX, y: -10 }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
