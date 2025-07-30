'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LoadingScreen from '@/components/LoadingScreen'

export default function IdentityCanceledPage() {
  const [progress, setProgress] = useState(0)
  const [loadingDone, setLoadingDone] = useState(false)
  const [deepLinkFailed, setDeepLinkFailed] = useState(false)

  // Simulierte Fortschrittsanzeige
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoadingDone(true)
          return 100
        }
        return prev + 5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Deep Link Versuch nach Ladevorgang
  const handleRedirect = () => {
    const deepLink = 'aushilfapp://onboarding/identity-canceled'

    // Deeplink starten
    window.location.replace(deepLink)

    // Wenn nach 3 Sekunden nichts passiert ist → Fallback anzeigen
    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        setDeepLinkFailed(true)
      }
    }, 3000)
  }

  return (
    <>
      <LoadingScreen
        isLoading={!loadingDone}
        loadingProgress={progress}
        onLoadingComplete={handleRedirect}
      />

      {/* Fallback falls Deeplink nicht funktioniert */}
      {deepLinkFailed && (
        <div className="flex justify-center items-center min-h-screen px-4">
          <Card className="max-w-md w-full border border-amber-300 bg-white/70 backdrop-blur-md shadow-md">
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="text-xl font-semibold text-amber-600">Identität erfolgreich bestätigt 🎉</h2>
              <p className="text-gray-700">
                Die automatische Weiterleitung zur AushilfApp hat nicht funktioniert.
              </p>
              <p className="text-sm text-gray-600">
                Du kannst die App manuell über den Button unten öffnen:
              </p>
              <Button
                variant="default"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => window.open('aushilfapp://onboarding/identity-canceled')}
              >
                AushilfApp jetzt öffnen
              </Button>
              <p className="text-xs text-gray-400 mt-2">
                Wenn du die App nicht installiert hast, kannst du sie im App Store öffnen.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}