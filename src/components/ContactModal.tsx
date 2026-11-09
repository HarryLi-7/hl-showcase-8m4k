import React from 'react'
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
  if (!isOpen) return null

  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://harryli-7.github.io/portfolio/'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-3 shadow-md shadow-blue-500/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {lang === 'zh' ? '联络方式与隐私保护说明' : 'ご連絡方法とプライバシー保護について'}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            {lang === 'zh'
              ? '当前公开网页已撤除个人实名、手机号、微信号、个人邮箱及证件原图，以防止公开抓取。'
              : '本ページは公開URLからの情報収集を防ぐため、実名・電話番号・WeChat・証明書原本を非公開としております。'}
          </p>
        </div>

        {/* Masked Contact Rows */}
        <div className="space-y-3 mb-6">
          {/* Phone */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 font-medium">{lang === 'zh' ? '手机号码' : '電話番号'}</div>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  {lang === 'zh' ? '已隐藏（招聘平台/私信沟通后提供）' : '非公開（選考連絡後に共有）'}
                </div>
              </div>
            </div>
          </div>

          {/* WeChat */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 font-medium">{lang === 'zh' ? '微信联络' : 'WeChat'}</div>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  {lang === 'zh' ? '已撤除二维码及账号，请先私信沟通' : 'QR・ID非掲載（別途ご案内）'}
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 font-medium">{lang === 'zh' ? '电子邮箱' : 'メールアドレス'}</div>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  {lang === 'zh' ? '正式完整版简历及证书附于沟通附件' : '完全版履歴書・証明書は個別送付'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio QR Section */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 mb-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-2 rounded-xl bg-white shadow-xs shrink-0 border border-zinc-200">
              <img src="./qrcode.png" alt="作品集网页二维码" className="w-24 h-24 object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center justify-center sm:justify-start gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-blue-500" />
                <span>{lang === 'zh' ? '本作品集网页二维码' : 'ポートフォリオQRコード'}</span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2.5">
                {lang === 'zh'
                  ? '扫码可在手机端打开或分享本技能与项目展示页。'
                  : 'スマートフォンでの閲覧・共有にご利用いただけます。'}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => onCopyText(siteUrl, 'url')}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  {copiedKey === 'url' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{lang === 'zh' ? '已复制链接' : 'コピー済'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'zh' ? '复制页面链接' : 'URLをコピー'}</span>
                    </>
                  )}
                </button>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <a
                  href="./qrcode.png"
                  download="portfolio_qrcode.png"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 hover:underline"
                >
                  <span>{lang === 'zh' ? '下载页面二维码' : 'QR画像を保存'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Notice */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-xs text-zinc-600 dark:text-zinc-400">
          <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
          <span>
            {lang === 'zh'
              ? '常驻区域：华南沿海城市（详细面试地址及到岗安排将在沟通过程中确认）'
              : '拠点エリア：華南エリア（面談詳細・条件は個別調整）'}
          </span>
        </div>
      </div>
    </div>
  )
}
