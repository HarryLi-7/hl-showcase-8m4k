import React from 'react'
import { Languages, ShieldCheck, Printer, Command } from 'lucide-react'

interface NavbarProps {
  lang: 'zh' | 'ja'
  setLang: (lang: 'zh' | 'ja') => void
  onOpenContact: () => void
  onOpenCommand: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenContact,
  onOpenCommand,
}) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <header className="sticky top-0 z-40 w-full safe-header no-print">
      <div className="max-w-5xl mx-auto liquid-glass rounded-2xl px-3 sm:px-5 min-h-14 py-1.5 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        {/* Monogram Brand + Google 4-color micro status */}
        <a href="#" className="touch-target flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:scale-105 transition-transform shrink-0">
            H
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold tracking-tight text-zinc-900 flex items-center gap-1.5 whitespace-nowrap">
              <span>Harry L.</span>
              <span className="text-xs font-normal text-zinc-500 hidden sm:inline">
                {lang === 'zh' ? '· 作品展台' : '· ポートフォリオ'}
              </span>
            </span>
            <span className="text-[11px] text-zinc-500 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-0.5 shrink-0" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              </span>
              <span className="hidden sm:inline whitespace-nowrap">
                {lang === 'zh' ? '广州 · AI 工程与商务日语' : '広州 · AI開発とビジネス日本語'}
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Minimal Nav (shown >= lg so landscape phones and small tablets keep 1 clean row) */}
        <nav aria-label={lang === 'zh' ? '主导航' : 'メインナビゲーション'} className="hidden lg:flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-600">
          <a href="#intent" className="touch-target inline-flex items-center hover:text-zinc-950 transition-colors whitespace-nowrap">
            {lang === 'zh' ? '求职意向' : '希望条件'}
          </a>
          <a href="#metrics" className="touch-target inline-flex items-center hover:text-zinc-950 transition-colors whitespace-nowrap">
            {lang === 'zh' ? '能力矩阵' : 'コア能力'}
          </a>
          <a href="#projects" className="touch-target inline-flex items-center hover:text-zinc-950 transition-colors whitespace-nowrap">
            {lang === 'zh' ? '自研产品' : '開発実績'}
          </a>
          <a href="#interactive-demo" className="touch-target inline-flex items-center hover:text-zinc-950 transition-colors whitespace-nowrap">
            {lang === 'zh' ? '日语 Demo' : '語学デモ'}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0">
          <button
            type="button"
            onClick={onOpenCommand}
            className="touch-target hidden sm:inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer"
            title={lang === 'zh' ? '打开快捷指令台 (Cmd/Ctrl+K)' : 'コマンドメニュー'}
            aria-label={lang === 'zh' ? '打开快捷指令台' : 'コマンドメニュー'}
          >
            <Command className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span>⌘K</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="touch-target hidden md:inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
            title={lang === 'zh' ? '打印或保存白底 PDF' : '白地PDF出力'}
          >
            <Printer className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span className="hidden lg:inline">{lang === 'zh' ? '打印' : 'PDF'}</span>
          </button>

          <button
            type="button"
            onClick={() => setLang(lang === 'zh' ? 'ja' : 'zh')}
            className="touch-target inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
            title={lang === 'zh' ? '切换为日文' : '切换为中文'}
          >
            <Languages className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '日本語' : '中文'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="touch-target expressive-pill inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-full cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>
              {lang === 'zh' ? (
                <>
                  联络<span className="hidden min-[375px]:inline">与核验</span>
                </>
              ) : (
                <>
                  連絡<span className="hidden min-[375px]:inline">・案内</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
