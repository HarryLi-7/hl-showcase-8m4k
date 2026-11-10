import React from 'react'
import { ArrowDownRight, ShieldCheck, Printer, Sparkles, MapPin } from 'lucide-react'
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
            <span>{lang === 'zh' ? 'AI 原生工程 · 商务日语实战' : 'AIエンジニアリング × ビジネス日本語'}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-zinc-200/90 text-zinc-700 shadow-2xs">
            <MapPin className="w-3 h-3 text-[#4285F4]" />
            <span>{lang === 'zh' ? '广州 · 华南师范大学本科 · 即日可到岗' : '広州 · 華南師範大学卒 · 即時入社可'}</span>
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
              エンジニアの確実性で、
              <br />
              <span className="underline decoration-zinc-300 decoration-2 underline-offset-4 sm:underline-offset-8">
                AI 製品
              </span>
              と日系実務を駆動。
            </>
          )}
        </h1>

        {/* Concise High-Signal Intro */}
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl mb-8">
          {lang === 'zh' ? (
            <>
              你好，我是 <strong className="text-zinc-950 font-semibold">Harry L.</strong>。
              华南师范大学本科毕业，持有 <strong className="text-zinc-950 font-semibold">JLPT N1（108分）与 BJT J2（448分）</strong>；
              日常深度使用 <strong className="text-zinc-950 font-semibold">Codex · Antigravity · DeepSeek Harness</strong> 驱动研发，端到端独立落地以{' '}
              <strong className="text-zinc-950 font-semibold">JLPT N1 日语学习全栈 Web 系统</strong>为核心主项目，延伸出 ClipNest 与 TranscribeHub（macOS SwiftUI + Android 双端原生）、DeepSeek Harness 插件/本地 Skills 基建、Chrome MV3 硬解效率扩展及未公开发布的同源小程序复刻版。
              现居广州，持有内地 C1 / 香港双驾照及日美长期商务出行签证。
            </>
          ) : (
            <>
              はじめまして、<strong className="text-zinc-950 font-semibold">Harry L.</strong> と申します。
              華南師範大学（学士）修了、<strong className="text-zinc-950 font-semibold">JLPT N1（108点）・BJT J2（448点）</strong>を取得し、
              普段より <strong className="text-zinc-950 font-semibold">Codex · Antigravity · DeepSeek Harness</strong> を開発基盤に活用。
              <strong className="text-zinc-950 font-semibold">JLPT N1 日本語学習フルスタック Web システム</strong>を主力プロジェクトとして、macOS SwiftUI・Android 両OSネイティブ製品（ClipNest / TranscribeHub）、DSHプラグイン・自作Skills基盤、Chrome MV3省電力拡張および非公開のミニプログラム複製版まで独力実装いたしました。
              広州拠点・大陸/香港両運転免許および日米長期商用ビザを保有しております。
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
            <span>{lang === 'zh' ? '查看主打 Web 与自研作品' : '主力 Web・開発実績を見る'}</span>
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300/90 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-colors shadow-2xs cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#34A853]" />
            <span>{lang === 'zh' ? '联络方式与证件核验' : '連絡先・証明書案内'}</span>
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
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '核心主项目 + 工程矩阵' : '主力 Web＋ツール群'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                Web <span className="text-xs font-sans font-medium text-zinc-500 whitespace-nowrap">{lang === 'zh' ? '主打 + 5 项矩阵交付' : '主力＋5領域群'}</span>
              </div>
            </div>

            <div className="md:px-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '主打 Web 日语题库' : '主力 Web 問題DB'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                946 <span className="text-xs font-sans font-medium text-zinc-500 whitespace-nowrap">{lang === 'zh' ? '题 · 726句+220词' : '問 · 726文+220語'}</span>
              </div>
            </div>

            <div className="md:px-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '商务日语双证成绩' : '日本語実務スコア'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                N1 <span className="text-xs font-sans font-medium text-zinc-500 whitespace-nowrap">{lang === 'zh' ? '108分 · BJT J2 (448)' : '108点 · BJT J2 (448)'}</span>
              </div>
            </div>

            <div className="md:pl-6">
              <div className="text-xs text-zinc-500 font-medium">{lang === 'zh' ? '跨端原生与插件覆盖' : '両OSネイティブ＆拡張'}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-mono tabular-nums mt-1">
                Dual <span className="text-xs font-sans font-medium text-zinc-500 whitespace-nowrap">macOS · Android · MV3</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
