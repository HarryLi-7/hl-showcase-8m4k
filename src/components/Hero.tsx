import React from 'react'
import { Sparkles, ShieldCheck, ArrowDownRight, CheckCircle2, Printer } from 'lucide-react'

interface HeroProps {
  lang: 'zh' | 'ja'
  onOpenContact: () => void
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  const handlePrint = () => {
    window.print()
  }
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none -z-10 opacity-40 dark:opacity-25">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
            {lang === 'zh' ? 'AI 原生工程 · 商务日语作品展台' : 'AIエンジニアリング・ビジネス日本語 ポートフォリオ'}
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
            <span>📍</span>
            <span>{lang === 'zh' ? '华南沿海城市（可远程/线下沟通）' : '華南エリア（リモート・対面面談対応可）'}</span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === 'zh' ? '个人信息已脱敏（仅展示技术与语言能力）' : '個人情報非公開モード（スキル・実績のみ掲載）'}</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-6">
          {lang === 'zh' ? (
            <>
              用 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">AI 原生工程力</span> 与 <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">商务日语</span>，
              <br className="hidden sm:inline" /> 交付确定性的实际成果。
            </>
          ) : (
            <>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">AIエンジニアリング力</span> と <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">ビジネス日本語</span> で、
              <br className="hidden sm:inline" /> 確かな価値と事業成果を創出する。
            </>
          )}
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
          {lang === 'zh' ? (
            <>
              你好，我是 <strong className="text-zinc-900 dark:text-white font-semibold">Alex Lin（匿名示例档案）</strong>。
              本科学历背景，具备 <strong className="text-zinc-900 dark:text-white font-semibold">高阶商务日语</strong> 读写与沟通能力，并深度运用 AI 工程工具独立开发落地 4 款软件产品（含微信原生小程序、桌面端、音频管线及 Web 系统）。
              完整实名信息、证件原件与直接联系方式出于隐私保护已在本公开页隐去，可在正式沟通阶段按需提供。
            </>
          ) : (
            <>
              はじめまして、<strong className="text-zinc-900 dark:text-white font-semibold">Alex Lin（匿名公開プロフィール）</strong>と申します。
              学士課程修了、高度な<strong className="text-zinc-900 dark:text-white font-semibold">ビジネス日本語能力</strong>を備え、AI開発ツールを活用して4本のプロダクト（WeChatミニプログラム・デスクトップ・音声パイプライン・Webアプリ）を独力開発いたしました。
              個人情報・証明書番号・直接連絡先はプライバシー保護のため本ページでは非公開とし、面談時に別途共有いたします。
            </>
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
          >
            <ArrowDownRight className="w-4 h-4" />
            <span>{lang === 'zh' ? '查验自研作品展示' : '開発実績を見る'}</span>
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{lang === 'zh' ? '联络与完整简历获取说明' : '連絡先・履歴書請求案内'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all shadow-xs"
            title={lang === 'zh' ? '打印或另存为 PDF 展示页' : 'PDFとして印刷・保存'}
          >
            <Printer className="w-4 h-4 text-zinc-500" />
            <span>{lang === 'zh' ? '打印/导出页面' : 'PDF出力'}</span>
          </button>

          <a
            href="#interactive-demo"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium text-sm transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{lang === 'zh' ? '试玩日语 Demo' : '語学デモを試す'}</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{lang === 'zh' ? '语言能力' : '語学スキル'}</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{lang === 'zh' ? 'N1 / 商务日语等级' : 'N1・ビジネス日本語'}</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{lang === 'zh' ? '敏捷学习' : '学習スピード'}</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{lang === 'zh' ? '快速跨界自驱进阶' : '短期間での独学習得'}</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{lang === 'zh' ? '交付应用' : '自作アプリ'}</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{lang === 'zh' ? '4 款自研交付' : '4アプリ開発'}</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{lang === 'zh' ? '工作适应' : '実務適性'}</div>
            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{lang === 'zh' ? '跨区域商务差旅就绪' : '出張・機動対応可'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
