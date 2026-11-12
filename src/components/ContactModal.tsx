import React, { useEffect, useRef } from 'react'
import { X, Mail, Send, Copy, Check, QrCode, ShieldCheck } from 'lucide-react'
import { CONTACT_EMAIL } from '../data/content'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  lang: 'zh' | 'ja'
  onCopyText: (text: string, label: string, toastMsg?: string) => void
  copiedKey: string | null
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
  onCopyText,
  copiedKey,
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

  const siteUrl =
    typeof window !== 'undefined' ? window.location.href : 'https://harryli-7.github.io/hl-showcase-8m4k/'

  const mailtoSubject = encodeURIComponent(
    lang === 'zh'
      ? '【面试邀约/岗位沟通】对日商务运营 / 流程助理 - Harry L.'
      : '【面接・選考のご連絡】対日ビジネス運営・業務アシスタント - Harry L.'
  )

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby="contact-dialog-title"
      className="command-dialog w-[min(92vw,29rem)] max-h-[88dvh] overflow-y-auto overscroll-contain rounded-3xl p-0 bg-white text-zinc-900 border border-zinc-200 shadow-2xl m-auto"
    >
      <div className="p-5 sm:p-7 relative">
        <button
          type="button"
          onClick={onClose}
          className="touch-target absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer inline-flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-5 pr-10">
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-3 shadow-xs">
            <Mail className="w-5 h-5 text-[#4285F4]" aria-hidden="true" />
          </div>
          <h3 id="contact-dialog-title" className="text-xl font-bold text-zinc-950 tracking-tight">
            {lang === 'zh' ? '联系我' : 'お問い合わせ・ご連絡'}
          </h3>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {lang === 'zh'
              ? '欢迎通过下方求职专用邮箱直接发起联系或发送面试邀约（收到后会尽快回复，并可附完整简历）。'
              : '採用・面接に関するご連絡は下記の専用メールアドレス宛に直接お送りください。折り返し履歴書等をお送りいたします。'}
          </p>
        </div>

        {/* Direct Email Primary Card */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/90 mb-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
            {lang === 'zh' ? '求职专用邮箱 / DIRECT EMAIL' : '連絡先メールアドレス'}
          </div>
          <div className="text-base sm:text-lg font-mono font-bold text-zinc-950 break-all mb-3.5">
            {CONTACT_EMAIL}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}`}
              className="touch-target expressive-pill inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold shadow-xs"
            >
              <Send className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '打开邮件客户端发送' : 'メールを送る'}</span>
            </a>

            <button
              type="button"
              onClick={() =>
                onCopyText(
                  CONTACT_EMAIL,
                  'email',
                  lang === 'zh' ? '已复制求职邮箱' : 'メールアドレスをコピーしました'
                )
              }
              className="touch-target inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              {copiedKey === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34A853]" aria-hidden="true" />
                  <span>{lang === 'zh' ? '已复制邮箱' : 'コピー完了'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{lang === 'zh' ? '复制邮箱地址' : 'アドレスをコピー'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Secondary Privacy & Verification Info */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-zinc-200/80 mb-4 text-xs text-zinc-600 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            {lang === 'zh'
              ? '为避免公开页面信息被抓取骚扰，手机号与个人微信未在公开页面列示；通过邮箱联系后即可提供完整版简历、微信及各类证书原件核验。'
              : 'スパム対策として電話番号・WeChat等は非公開としております。メールにてご連絡いただいた後、履歴書および各種原本確認に対応いたします。'}
          </span>
        </div>

        {/* Secondary Share / Page Link + QR */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
          <div className="flex items-center gap-3.5">
            <div className="p-1.5 rounded-xl bg-white shadow-2xs shrink-0 border border-zinc-200">
              <img
                src="./qrcode.png"
                alt={lang === 'zh' ? '本页面访问二维码' : '本ページのQRコード'}
                width={80}
                height={80}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-zinc-600" aria-hidden="true" />
                <span>{lang === 'zh' ? '内部转发与扫码查看' : '社内共有用リンク・QR'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    onCopyText(
                      siteUrl,
                      'url',
                      lang === 'zh' ? '已复制本页展示链接' : 'ページURLをコピーしました'
                    )
                  }
                  className="touch-target inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-zinc-200/80 text-[11px] font-semibold text-zinc-800 hover:bg-zinc-100 cursor-pointer"
                >
                  {copiedKey === 'url' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#34A853]" aria-hidden="true" />
                      <span>{lang === 'zh' ? '已复制链接' : 'コピー済'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{lang === 'zh' ? '复制页面链接' : 'URLをコピー'}</span>
                    </>
                  )}
                </button>
                <a
                  href="./qrcode.png"
                  download="portfolio_qrcode.png"
                  className="touch-target inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-zinc-200/80 text-[11px] font-semibold text-zinc-600 hover:bg-zinc-100"
                >
                  <span>{lang === 'zh' ? '保存二维码' : 'QR保存'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
