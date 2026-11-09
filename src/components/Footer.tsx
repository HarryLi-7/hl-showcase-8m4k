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
    <footer className="pt-12 pb-24 border-t border-zinc-200/80 bg-white/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-base font-bold text-zinc-950 flex items-center gap-2">
              <span>Alex Lin</span>
              <span className="text-xs font-normal text-zinc-500">
                {lang === 'zh' ? '· 匿名示例档案' : '· 匿名ポートフォリオ'}
              </span>
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              {lang === 'zh'
                ? 'AI 原生工程 · 商务日语作品展台（白底精密设计版 · 已启用隐私脱敏）'
                : 'AIエンジニアリング・ビジネス日本語 作品展示サイト'}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="expressive-pill px-4 py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '联络与隐私说明' : '連絡・プライバシー案内'}</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200/70 text-center text-[11px] font-mono text-zinc-500">
          © {new Date().getFullYear()} Alex Lin Portfolio Demo · Privacy-Protected Showcase
        </div>
      </div>
    </footer>
  )
}
