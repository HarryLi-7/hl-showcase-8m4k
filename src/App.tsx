import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CareerIntent } from './components/CareerIntent'
import { BentoMetrics } from './components/BentoMetrics'
import { Timeline } from './components/Timeline'
import { InteractiveSentenceDemo } from './components/InteractiveSentenceDemo'
import { ProjectShowcase } from './components/ProjectShowcase'
import { EducationCredentials } from './components/EducationCredentials'
import { CareerStrengths } from './components/CareerStrengths'
import { FloatingDock } from './components/FloatingDock'
import { Footer } from './components/Footer'
import { ContactModal } from './components/ContactModal'
import { CommandDialog } from './components/CommandDialog'
import { Check } from 'lucide-react'

export function App() {
  const [lang, setLang] = useState<'zh' | 'ja'>('zh')
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isCmdOpen, setIsCmdOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCmdOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'],
      })
    } catch (_) {}
  }

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      fireConfetti()
      triggerToast(lang === 'zh' ? '已复制当前展示页链接' : 'ポートフォリオURLをコピーしました')
      setTimeout(() => setCopiedKey(null), 2500)
    })
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-zinc-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-[calc(4.75rem+env(safe-area-inset-top,0px))] left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)] no-print">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold shadow-xl border border-zinc-800">
            <span className="w-5 h-5 rounded-full bg-[#34A853] text-white flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
            </span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Apple Liquid Glass Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCommand={() => setIsCmdOpen(true)}
      />

      {/* Main Content Canvas */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <CareerIntent lang={lang} />
        <BentoMetrics lang={lang} />
        <Timeline lang={lang} />
        <InteractiveSentenceDemo lang={lang} />
        <ProjectShowcase lang={lang} />
        <EducationCredentials lang={lang} />
        <CareerStrengths lang={lang} />
      </main>

      {/* Floating Bottom Liquid Glass Dock */}
      <FloatingDock
        lang={lang}
        setLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCommand={() => setIsCmdOpen(true)}
      />

      {/* Editorial Footer */}
      <Footer
        lang={lang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Contact & Privacy Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
        onCopyText={handleCopyText}
        copiedKey={copiedKey}
      />

      {/* Cmd+K Command Palette */}
      <CommandDialog
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'zh' ? 'ja' : 'zh'))}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  )
}

export default App
