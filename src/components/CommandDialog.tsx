import React, { useEffect, useRef } from 'react'
import { X, FileText, Cpu, Award, FolderGit2, Mail, Printer, Languages } from 'lucide-react'

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
      if (selector === '#other-works' && target instanceof HTMLDetailsElement) {
        target.open = true
      }
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby="cmd-dialog-title"
      className="command-dialog rounded-3xl p-0 border border-zinc-200 bg-white text-zinc-900 shadow-2xl w-[min(92vw,30rem)] max-h-[88dvh] overflow-y-auto overscroll-contain m-auto"
    >
      <div className="px-5 py-3.5 border-b border-zinc-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
          </span>
          <h2 id="cmd-dialog-title" className="text-sm font-bold tracking-tight">
            {lang === 'zh' ? '⌘K 快捷导航' : '⌘K クイックナビゲーション'}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="touch-target inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span className="hidden sm:inline">Esc</span>
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <div className="p-3 space-y-1">
        <div className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
          {lang === 'zh' ? '页面分区跳转' : 'SECTIONS'}
        </div>

        <button
          type="button"
          onClick={() => jumpTo('#samples')}
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <FileText className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '日语实务样本（邮件与会议纪要）' : '実務サンプル（メール・議事録）'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#samples</span>
        </button>

        <button
          type="button"
          onClick={() => jumpTo('#projects')}
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Cpu className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '两个精选项目与例句试听' : '厳選事例 2件＆音声デモ'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#projects</span>
        </button>

        <button
          type="button"
          onClick={() => jumpTo('#credentials')}
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Award className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '学历、考级与个人背景' : '学歴・語学スコア・資格'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#credentials</span>
        </button>

        <button
          type="button"
          onClick={() => jumpTo('#other-works')}
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <FolderGit2 className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '展开其他作品' : 'その他の制作物を開く'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">#other-works</span>
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
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Languages className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
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
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Printer className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '打印或另存为白底 PDF' : '白地PDFとして保存'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">PDF</span>
        </button>

        <button
          type="button"
          onClick={() => {
            onClose()
            onOpenContact()
          }}
          className="touch-target w-full px-3 py-2.5 rounded-xl hover:bg-zinc-100/90 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span className="flex items-center gap-2.5 font-medium text-zinc-800">
            <Mail className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
            <span>{lang === 'zh' ? '联系我（获取邮箱与链接）' : '連絡先を見る'}</span>
          </span>
          <span className="font-mono text-xs text-zinc-500">EMAIL</span>
        </button>
      </div>
    </dialog>
  )
}
