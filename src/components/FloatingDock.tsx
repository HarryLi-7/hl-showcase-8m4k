import React from 'react'
import { Languages, ShieldCheck, Printer } from 'lucide-react'

interface FloatingDockProps {
  lang: 'zh' | 'ja'
  setLang: (lang: 'zh' | 'ja') => void
  onOpenContact: () => void
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  lang,
  setLang,
  onOpenContact,
}) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel shadow-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title={lang === 'zh' ? '打印或导出 PDF' : 'PDF出力'}
        >
          <Printer className="w-3.5 h-3.5 text-zinc-500" />
          <span className="hidden sm:inline">{lang === 'zh' ? '打印预览' : 'PDF'}</span>
        </button>

        <button
          onClick={() => setLang(lang === 'zh' ? 'ja' : 'zh')}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="切换语言"
        >
          <Languages className="w-3.5 h-3.5 text-indigo-500" />
          <span>{lang === 'zh' ? '日本語' : '中文'}</span>
        </button>

        <button
          onClick={onOpenContact}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{lang === 'zh' ? '联系说明' : '連絡案内'}</span>
        </button>
      </div>
    </aside>
  )
}
