import React from 'react'
import { Languages, Moon, Sun, ShieldCheck, Sparkles, Printer, QrCode } from 'lucide-react'

interface NavbarProps {
  lang: 'zh' | 'ja'
  setLang: (lang: 'zh' | 'ja') => void
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
  onOpenContact: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  onOpenContact
}) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Alex Lin <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 ml-1">{lang === 'zh' ? '示例档案' : 'デモ'}</span>
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {lang === 'zh' ? '公开脱敏模式 · 隐私已隐藏' : 'プライバシー保護モード公開中'}
              </span>
            </div>
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#intent" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '求职意向' : '希望条件'}
          </a>
          <a href="#metrics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '核心能力' : '強みと実績'}
          </a>
          <a href="#timeline" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '成长履历' : '経歴'}
          </a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === 'zh' ? '自研作品' : '開発実績'}
          </a>
          <a href="#interactive-demo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {lang === 'zh' ? '日语Demo' : '語学デモ'}
          </a>
        </nav>

        {/* Actions: Lang, QR, Print, Theme, Contact */}
        <div className="flex items-center gap-2">
          {/* QR Code trigger */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors shadow-xs"
            title={lang === 'zh' ? '查看扫码与联络说明' : 'QRコード・連絡ガイド'}
          >
            <QrCode className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden md:inline">{lang === 'zh' ? '扫码' : 'QR'}</span>
          </button>

          {/* Print / Save PDF Resume button */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors shadow-xs"
            title={lang === 'zh' ? '打印或另存为 PDF 展示页' : 'PDFとして印刷・保存'}
          >
            <Printer className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden md:inline">{lang === 'zh' ? '打印预览' : '印刷/PDF'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'ja' : 'zh')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors shadow-xs"
            title={lang === 'zh' ? '切换为日文 (日本語に切替)' : '切换为中文'}
          >
            <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'zh' ? '日本語' : '中文'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors shadow-xs"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-600" />
            )}
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-all shadow-xs hover:shadow-blue-500/25"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '联系说明' : '連絡案内'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
