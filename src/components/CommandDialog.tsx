import React, { useEffect, useRef } from 'react'
import { X, Compass, Cpu, Sparkles, ShieldCheck, Printer, Languages } from 'lucide-react'

interface CommandDialogProps {
  isOpen: boolean
  onClose: () => void
  lang: 'zh' | 'ja'
  onToggleLang: () => void
  onOpenContact: () => void
}

export const CommandDialog: React.FC<CommandDialogProps> = ({
  isOpen,
  onClose,
  lang,
  onToggleLang,
  onOpenContact,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => {
      onClose()
    }
    dialog.addEventListener('close', handleClose)

    // Safari fallback for browsers without declarative closedby="any"
    const handleBackdropClick = (event: MouseEvent) => {
      if ('closedBy' in HTMLDialogElement.prototype) return
      if (event.target !== dialog) return
      const rect = dialog.getBoundingClientRect()
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      if (!isInside) {
        dialog.close()
      }
    }

    dialog.addEventListener('click', handleBackdropClick)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('click', handleBackdropClick)
    }
  }, [onClose])

  const jumpTo = (selector: string) => {
    onClose()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby="cmd-dialog-title"
      className="command-dialog rounded-3xl p-0 border border-zinc-200 bg-white text-zinc-900 shadow-2xl w-[min(92vw,30rem)] m-auto"
    >
      <div className="px-5 py-4 border-b border-zinc-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
          </span>
          <h2 id="cmd-dialog-title" className="text-sm font-bold tracking-tight">
            {lang === 'zh' ? '⌘K 快捷导航控制台' : '⌘K クイックナビゲーション'}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-mono text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span>Esc</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-3 space-y-1">
        <div className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
          {lang === 'zh' ? '页面分区跳转' : 'SECTIONS'}
        </div>

        <button
          type="button"
          onClick={() => jumpTo('#metrics')}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Compass className="w-4 h-4 text-zinc-500" />
            <span>{lang === 'zh' ? '核心能力 Bento 矩阵' : 'コア能力 Bento'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#metrics</span>
        </button>

        <button
          type="button"
          onClick={() => jumpTo('#projects')}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Cpu className="w-4 h-4 text-zinc-500" />
            <span>{lang === 'zh' ? '4 款自研软件交付成果' : '開発実績（4アプリ）'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#projects</span>
        </button>

        <button
          type="button"
          onClick={() => jumpTo('#interactive-demo')}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{lang === 'zh' ? '日语商务句型交互试听台' : 'ビジネス日本語インタラクティブ検証'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#demo</span>
        </button>

        <div className="px-2.5 pt-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500 border-t border-zinc-100 mt-1">
          {lang === 'zh' ? '常用操作' : 'ACTIONS'}
        </div>

        <button
          type="button"
          onClick={() => {
            onToggleLang()
            onClose()
          }}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Languages className="w-4 h-4 text-blue-600" />
            <span>{lang === 'zh' ? '切换界面语言为 日本語' : '表示言語を 中文 に切替'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">ZH / JA</span>
        </button>

        <button
          type="button"
          onClick={() => {
            onClose()
            window.print()
          }}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Printer className="w-4 h-4 text-zinc-500" />
            <span>{lang === 'zh' ? '打印或另存为白底 PDF 档案' : '白地PDFとして印刷・保存'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">PDF</span>
        </button>

        <button
          type="button"
          onClick={() => {
            onClose()
            onOpenContact()
          }}
          className="w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'zh' ? '查看隐私保护与沟通联络方式' : 'プライバシー保護・連絡方法を見る'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">QR</span>
        </button>
      </div>
    </dialog>
  )
}
