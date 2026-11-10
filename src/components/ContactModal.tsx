import React, { useEffect, useRef } from 'react'
import { X, ShieldCheck, Phone, MessageSquare, Mail, MapPin, Copy, Check, QrCode } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  lang: 'zh' | 'ja'
  onCopyText: (text: string, label: string) => void
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

  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://harryli-7.github.io/portfolio/'

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby="contact-dialog-title"
      className="command-dialog w-[min(92vw,28rem)] rounded-3xl p-0 bg-white text-zinc-900 border border-zinc-200 shadow-2xl m-auto"
    >
      <div className="p-6 sm:p-7 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-3 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#34A853]" />
          </div>
          <h3 id="contact-dialog-title" className="text-xl font-bold text-zinc-950 tracking-tight">
            {lang === 'zh' ? '联络沟通与身份核验' : 'ご連絡・各種確認のご案内'}
          </h3>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {lang === 'zh'
              ? '本页面已公开展示学历、JLPT N1/BJT 成绩与打码版 N1 成绩单；为防爬虫骚扰，手机号、个人微信、邮箱及证件号仅于面试沟通阶段提供。'
              : '学歴・語学スコア・マスキング済N1証明書は公開済みです。スパム対策のため、連絡先・個人番号のみ選考連絡時にご案内いたします。'}
          </p>
        </div>

        {/* Contact & Verification Rows */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-[#4285F4] flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">{lang === 'zh' ? '手机号码' : '電話番号'}</div>
              <div className="text-sm font-semibold text-zinc-800">
                {lang === 'zh' ? '通过招聘平台或私信对接后提供' : '求人媒体・メッセージ経由でご案内'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-[#34A853] flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">{lang === 'zh' ? '微信联系' : 'WeChat'}</div>
              <div className="text-sm font-semibold text-zinc-800">
                {lang === 'zh' ? '防爬虫保护中 · 沟通过程中交换对接' : 'スパム防止のため個別にご案内'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-[#EA4335] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">{lang === 'zh' ? '完整简历与原件核验' : '履歴書・原本確認'}</div>
              <div className="text-sm font-semibold text-zinc-800">
                {lang === 'zh' ? '可随时提供完整简历、毕业证及驾照/日美签证原件核验' : '完全版履歴書・卒業証書・免許/ビザ原本提示可'}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio QR Section */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0 border border-zinc-200">
              <img src="./qrcode.png" alt="作品集网页二维码" width={96} height={96} className="w-24 h-24 object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-950 mb-1 flex items-center justify-center sm:justify-start gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-zinc-700" />
                <span>{lang === 'zh' ? '本作品集网页二维码' : 'ポートフォリオQRコード'}</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed mb-2.5">
                {lang === 'zh'
                  ? '扫码可在手机端打开或分享本技能与项目展示页。'
                  : 'スマートフォンでの閲覧・共有にご利用いただけます。'}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => onCopyText(siteUrl, 'url')}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-900 hover:underline cursor-pointer"
                >
                  {copiedKey === 'url' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#34A853]" />
                      <span>{lang === 'zh' ? '已复制链接' : 'コピー済'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '复制页面链接' : 'URLをコピー'}</span>
                    </>
                  )}
                </button>
                <span className="text-zinc-300">|</span>
                <a
                  href="./qrcode.png"
                  download="portfolio_qrcode.png"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-600 hover:underline"
                >
                  <span>{lang === 'zh' ? '下载页面二维码' : 'QR画像を保存'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Notice */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-100 text-xs text-zinc-600">
          <MapPin className="w-4 h-4 text-[#4285F4] shrink-0" />
          <span>
            {lang === 'zh'
              ? '常驻城市：广州（中心城区地铁 45 分钟通勤圈 · 内地C1/香港双驾照 · 日5年/美10年商务签）'
              : '拠点エリア：中国・広州（地下鉄45分圏内 · 中港両運転免許 · 日5年/米10年ビザ完備）'}
          </span>
        </div>
      </div>
    </dialog>
  )
}
