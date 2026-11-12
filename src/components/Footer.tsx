import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { CONTACT_EMAIL } from '../data/content'

interface FooterProps {
  lang: 'zh' | 'ja'
  onOpenContact: () => void
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-10 safe-footer border-t border-zinc-200/80 bg-white/75">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-6 text-center sm:text-left">
          <div>
            <div className="text-sm sm:text-base font-bold text-zinc-950 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>Harry L.</span>
              <span className="text-xs font-medium text-zinc-500">
                {lang === 'zh' ? '· 对日商务运营 / 流程助理' : '· 対日ビジネス運営・業務アシスタント'}
              </span>
            </div>

            <div className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              {lang === 'zh'
                ? '广州常驻 · 可跨城出差 · 可远程协作 · 期望双休及五险一金'
                : '広州常駐 · 市外/短期出張可 · リモート連携可 · 完全週休二日制および社会保険完備希望'}
            </div>

            <div className="mt-1.5 text-xs font-mono text-zinc-700">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline decoration-zinc-300 underline-offset-4 hover:text-[#4285F4] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 no-print">
            <button
              type="button"
              onClick={onOpenContact}
              className="touch-target expressive-pill px-4 py-2 text-xs font-semibold rounded-full inline-flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '联系我' : '連絡する'}</span>
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="touch-target p-2 rounded-full border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors cursor-pointer inline-flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-t border-zinc-200/70 text-center text-[11px] font-mono text-zinc-500">
          © {new Date().getFullYear()} Harry L. · Business Japanese &amp; Operations Portfolio
        </div>
      </div>
    </footer>
  )
}
