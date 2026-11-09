import React from 'react'
import { ShieldCheck, ArrowUp } from 'lucide-react'

interface FooterProps {
  lang: 'zh' | 'ja'
  onOpenContact: () => void
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-12 pb-24 border-t border-zinc-200/80 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              Alex Lin <span className="text-xs font-normal text-zinc-500">{lang === 'zh' ? '· 匿名示例档案' : '· 匿名ポートフォリオ'}</span>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {lang === 'zh'
                ? 'AI 原生工程 · 商务日语作品展台（已启用隐私脱敏）'
                : 'AIエンジニアリング・ビジネス日本語 作品展示サイト'}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '联络与隐私说明' : '連絡・プライバシー案内'}</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center text-[11px] text-zinc-400">
          © {new Date().getFullYear()} Alex Lin Portfolio Demo. Privacy-Protected Showcase · Built with Vite & React.
        </div>
      </div>
    </footer>
  )
}
