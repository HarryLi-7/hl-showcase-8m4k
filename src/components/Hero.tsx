import React from 'react'
import { ArrowDownRight, ShieldCheck, Printer, Sparkles, Lock } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface HeroProps {
  lang: 'zh' | 'ja'
  onOpenContact: () => void
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="relative pt-10 pb-10 md:pt-16 md:pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Crisp Editorial Status Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white border border-zinc-200/90 text-zinc-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#34A853]" aria-hidden="true" />
            <span>{lang === 'zh' ? 'AI 原生工程 · 商务日语复合展台' : 'AIエンジニアリング × ビジネス日本語'}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-zinc-200/90 text-zinc-600 shadow-2xs">
            <Lock className="w-3 h-3 text-zinc-500" />
            <span>{lang === 'zh' ? '个人信息已脱敏（仅展实力与作品）' : '個人情報非公開モード公開中'}</span>
          </div>
        </div>

        {/* Apple / Paco Editorial Display Typography */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-950 leading-[1.16] sm:leading-[1.08] mb-6"
          style={{ letterSpacing: '-0.035em' }}
        >
          {lang === 'zh' ? (
            <>
              用工程的确定性，
              <br />
              交付{' '}
              <span className="underline decoration-zinc-300 decoration-2 underline-offset-4 sm:underline-offset-8">
                AI 工具产品
              </span>{' '}
              与跨语种效率。
            </>
          ) : (
            <>
              エンジニアリングの確実性で、
              <br />
              <span className="underline decoration-zinc-300 decoration-2 underline-offset-4 sm:underline-offset-8">
                AIプロダクト
              </span>
              と日系実務を駆動する。
            </>
          )}
        </h1>

        {/* Concise High-Signal Intro */}
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mb-8">
          {lang === 'zh' ? (
            <>
              你好，我是 <strong className="text-zinc-950 font-semibold">Alex Lin（匿名示例档案）</strong>。
              本科学历背景，具备高阶商务日语读写与沟通实战力，并借助现代 AI 工程工作流端到端独立落地{' '}
              <strong className="text-zinc-950 font-semibold">4 款软件应用</strong>（含原生微信小程序、桌面端、长音频转录管线及 NLP Web 系统）。
              个人实名、电话、微信及证件原件已在此公开页隐去，正式沟通后随时核验。
            </>
          ) : (
            <>
              はじめまして、<strong className="text-zinc-950 font-semibold">Alex Lin（匿名公開プロフィール）</strong>と申します。
              学士課程修了、高度なビジネス日本語運用力を備え、AI開発ワークフローを駆使して{' '}
              <strong className="text-zinc-950 font-semibold">4本のソフトウェア</strong>（WeChatミニプログラム・デスクトップ・音声パイプライン・Webアプリ）を独力実装いたしました。
              個人情報・証明書原本は非公開とし、面談時にご提示いたします。
            </>
          )}
        </p>

        {/* Google Material 3 Expressive Pill CTA + Secondary Clean Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-10 no-print">
          <a
            href="#projects"
            className="expressive-pill inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shadow-md shadow-zinc-900/10"
          >
            <ArrowDownRight className="w-4 h-4" />
            <span>{lang === 'zh' ? '查验 4 款自研作品' : '開発実績を見る'}</span>
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300/90 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-colors shadow-2xs cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#34A853]" />
            <span>{lang === 'zh' ? '获取联络与完整简历' : '連絡・履歴書請求案内'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-sm font-medium transition-colors cursor-pointer"
            title={lang === 'zh' ? '打印或另存为白底 PDF' : 'PDF保存'}
          >
            <Printer className="w-4 h-4 text-zinc-500" />
            <span>{lang === 'zh' ? '导出 PDF' : 'PDF出力'}</span>
          </button>

          <a
            href="#interactive-demo"
            className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#FBBC05]" />
            <span>{lang === 'zh' ? '试玩日语 Demo' : '語学デモ'}</span>
          </a>
        </div>

        {/* Tesla Cockpit Precision Telemetry Strip */}
        <SpotlightCard className="rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200/80 relative">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              SYSTEM TELEMETRY // {lang === 'zh' ? '核心交付与能力指标' : 'CORE METRICS'}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" aria-hidden="true" />
              VERIFIED BUILD
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x md:divide-zinc-200/80 relative">
            <div className="md:pr-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '端到端交付产品' : '自作アプリ'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                04 <span className="text-xs font-sans font-medium text-zinc-500">{lang === 'zh' ? '款自研' : 'Apps'}</span>
              </div>
            </div>

            <div className="md:px-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '离线题库极限压缩' : '超圧縮オフラインDB'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                1.1 <span className="text-xs font-sans font-medium text-zinc-500">MB / 726题</span>
              </div>
            </div>

            <div className="md:px-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '商务日语水平' : '日本語実務水準'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                N1 <span className="text-xs font-sans font-medium text-zinc-500">+ BJT J2</span>
              </div>
            </div>

            <div className="md:pl-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '自动化音频管线' : 'AI音声文字起こし'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                300+ <span className="text-xs font-sans font-medium text-zinc-500">hrs</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
