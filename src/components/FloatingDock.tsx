import React from 'react'
import { Languages, ShieldCheck, Printer, Command } from 'lucide-react'

interface FloatingDockProps {
  lang: 'zh' | 'ja'
  setLang: (lang: 'zh' | 'ja') => void
  onOpenContact: () => void
  onOpenCommand: () => void
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  lang,
  setLang,
  onOpenContact,
  onOpenCommand,
}) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 no-print w-max max-w-[calc(100vw-1.5rem)]">
      <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full liquid-glass whitespace-nowrap">
        <button
          type="button"
          onClick={onOpenCommand}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full text-xs font-mono font-semibold text-zinc-700 hover:bg-zinc-900/5 transition-colors cursor-pointer shrink-0"
          title="⌘K 控制台"
          aria-label="打开快捷指令"
        >
          <Command className="w-3.5 h-3.5 text-zinc-600" />
          <span className="hidden sm:inline">⌘K</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:bg-zinc-900/5 transition-colors cursor-pointer shrink-0"
          title={lang === 'zh' ? '打印或导出 PDF' : 'PDF出力'}
          aria-label={lang === 'zh' ? '打印或导出 PDF' : 'PDF出力'}
        >
          <Printer className="w-3.5 h-3.5 text-zinc-600" />
          <span className="hidden sm:inline">{lang === 'zh' ? '打印' : 'PDF'}</span>
        </button>

        <button
          type="button"
          onClick={() => setLang(lang === 'zh' ? 'ja' : 'zh')}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:bg-zinc-900/5 transition-colors cursor-pointer shrink-0"
          title="切换语言"
        >
          <Languages className="w-3.5 h-3.5 text-[#4285F4]" />
          <span>{lang === 'zh' ? '日本語' : '中文'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenContact}
          className="expressive-pill flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold cursor-pointer shrink-0"
        >
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>{lang === 'zh' ? '联系我' : '連絡先'}</span>
        </button>
      </div>
    </aside>
  )
}
