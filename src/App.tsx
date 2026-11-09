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
import { Check } from 'lucide-react'

export function App() {
  const [lang, setLang] = useState<'zh' | 'ja'>('zh')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
      const supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = stored || (supportDark ? 'dark' : 'light')
      setTheme(initialTheme)
      applyTheme(initialTheme)
    } catch (_) {}
  }, [])

  const applyTheme = (t: 'dark' | 'light') => {
    if (t === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    const meta = document.querySelector('meta[name="color-scheme"]')
    if (meta) {
      meta.setAttribute('content', t)
    }
    localStorage.setItem('theme', t)
  }

  const handleSetTheme = (t: 'dark' | 'light') => {
    setTheme(t)
    applyTheme(t)
  }

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
        colors: ['#3b82f6', '#10b981', '#6366f1', '#f59e0b']
      })
    } catch (_) {}
  }

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      fireConfetti()
      if (key === 'email') {
        triggerToast(lang === 'zh' ? '示例占位邮箱已复制：demo@example.com' : 'デモ用メールアドレスをコピーしました')
      } else {
        triggerToast(lang === 'zh' ? '已复制当前网页链接' : 'ポートフォリオURLをコピーしました')
      }
      setTimeout(() => setCopiedKey(null), 2500)
    })
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-200 no-print">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs sm:text-sm font-semibold shadow-xl border border-zinc-700/50 dark:border-zinc-200">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={handleSetTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Body */}
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

      {/* Floating Bottom Dock */}
      <FloatingDock
        lang={lang}
        setLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
        onCopyText={handleCopyText}
        copiedKey={copiedKey}
      />
    </div>
  )
}

export default App
