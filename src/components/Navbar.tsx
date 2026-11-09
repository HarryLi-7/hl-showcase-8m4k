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
    <header className="sticky top-0 z-40 w-full px-3 sm:px-6 pt-3 no-print">
      <div className="max-w-5xl mx-auto liquid-glass rounded-2xl px-4 sm:px-5 h-14 flex items-center justify-between gap-3">
        {/* Monogram Brand + Google 4-color micro status */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 flex items-center gap-1.5">
              <span>Alex Lin</span>
              <span className="text-xs font-normal text-zinc-500 hidden sm:inline">
                {lang === 'zh' ? '· 作品展台' : '· ポートフォリオ'}
              </span>
            </span>
            <span className="text-[11px] text-zinc-500 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-0.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              </span>
              <span className="hidden xs:inline sm:inline">
                {lang === 'zh' ? '隐私脱敏展示版' : 'プライバシー保護モード'}
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Minimal Nav */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-zinc-600">
          <a href="#intent" className="hover:text-zinc-950 transition-colors">
            {lang === 'zh' ? '求职意向' : '希望条件'}
          </a>
          <a href="#metrics" className="hover:text-zinc-950 transition-colors">
            {lang === 'zh' ? '能力矩阵' : 'コア能力'}
          </a>
          <a href="#projects" className="hover:text-zinc-950 transition-colors">
            {lang === 'zh' ? '自研产品' : '開発実績'}
          </a>
          <a href="#interactive-demo" className="hover:text-zinc-950 transition-colors">
            {lang === 'zh' ? '日语 Demo' : '語学デモ'}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
          <button
            type="button"
            onClick={onOpenCommand}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer"
            title={lang === 'zh' ? '打开快捷指令台 (Cmd/Ctrl+K)' : 'コマンドメニュー'}
          >
            <Command className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden sm:inline">⌘K</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
            title={lang === 'zh' ? '打印或保存白底 PDF' : '白地PDF出力'}
          >
            <Printer className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden lg:inline">{lang === 'zh' ? '打印' : 'PDF'}</span>
          </button>

          <button
            type="button"
            onClick={() => setLang(lang === 'zh' ? 'ja' : 'zh')}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-zinc-200/90 bg-white/80 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
            title={lang === 'zh' ? '切换为日文' : '切换为中文'}
          >
            <Languages className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>{lang === 'zh' ? '日本語' : '中文'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="expressive-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '联络说明' : '連絡案内'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
