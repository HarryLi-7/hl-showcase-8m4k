import React, { useRef, useState } from 'react'
import { DEMO_SENTENCES, DemoSentence } from '../data/content'
import { Sparkles, Volume2, BookOpen, Layers, Check } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'
import { useScrollFade } from '../hooks/useScrollFade'

interface InteractiveSentenceDemoProps {
  lang: 'zh' | 'ja'
}

export const InteractiveSentenceDemo: React.FC<InteractiveSentenceDemoProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<number>(1)
  const [showFurigana, setShowFurigana] = useState<boolean>(true)
  const [showRomaji, setShowRomaji] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const demoScrollerRef = useRef<HTMLDivElement>(null)
  useScrollFade(demoScrollerRef, [lang])

  const activeSentence: DemoSentence =
    DEMO_SENTENCES.find((s) => s.id === selectedId) || DEMO_SENTENCES[0]

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ja-JP'
    utterance.rate = 0.95

    const voices = window.speechSynthesis.getVoices()
    // Select mature natural adult voice, strictly avoiding high-pitched Aoi voice
    const jaVoices = voices.filter((v) => v.lang.startsWith('ja') && !v.name.includes('Aoi'))
    const jaVoice =
      jaVoices.find((v) =>
        ['Nanami', 'Mayu', 'Shiori', 'Keita', 'Naoki', 'Daichi', 'Kyoko', 'Otoya'].some((n) =>
          v.name.includes(n)
        )
      ) || jaVoices[0]
    if (jaVoice) {
      utterance.voice = jaVoice
    }

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    window.speechSynthesis.speak(utterance)
  }

  return (
    <section id="interactive-demo" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
              <span>LIVE CONSOLE // {lang === 'zh' ? '交互式现场查验' : 'INTERACTIVE LIVE DEMO'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
              {lang === 'zh' ? 'JLPT N1 商务实战微特训器' : 'JLPT N1・BJT 実践例文インタラクティブ検証'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
            {lang === 'zh'
              ? '提取自本人核心主打项目「JLPT N1 日语学习全栈 Web 系统」的形态素拆解与语音朗读模块。'
              : '主力Webプロジェクト「JLPT N1 学習システム」から形態素解析・音声検証機能をポートフォリオ内に直接移植。'}
          </p>
        </div>

        {/* Cockpit-style Interactive Card */}
        <SpotlightCard className="rounded-3xl p-5 sm:p-8">
          {/* Segmented Control Sentence Tabs */}
          <div className="mb-6 pb-4 border-b border-zinc-200/80 relative">
            <div
              ref={demoScrollerRef}
              role="group"
              aria-label={lang === 'zh' ? '选择商务日语例句' : '例文切り替え'}
              className="filter-scroller gap-2 max-w-full"
            >
              {DEMO_SENTENCES.map((item) => {
                const active = item.id === selectedId
                return (
                  <button
                    type="button"
                    key={item.id}
                    aria-pressed={active}
                    onClick={(e) => {
                      setSelectedId(item.id)
                      e.currentTarget.scrollIntoView({
                        block: 'nearest',
                        inline: 'nearest',
                        container: 'nearest',
                      } as ScrollIntoViewOptions)
                    }}
                    className={`touch-target flex-none snap-start px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap inline-flex items-center justify-center ${
                      active
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900'
                    }`}
                  >
                    {lang === 'zh' ? `例句 ${item.id} · ` : `例文 ${item.id} · `}
                    {item.id === 1 && (lang === 'zh' ? '求职志望动机' : '志望動機・自己PR')}
                    {item.id === 2 && (lang === 'zh' ? '业务自动化实施' : '業務改善・自動化')}
                    {item.id === 3 && (lang === 'zh' ? '对日礼仪与协作' : 'ビジネスマナー・協調性')}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Sentence Display Console */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50/90 border border-zinc-200/80 mb-5 relative">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-700">
                {lang === 'zh' ? '语法要点' : '構文ポイント'}：{lang === 'zh' ? activeSentence.grammarPoint : activeSentence.grammarPointJa}
              </span>

              {/* Speak Audio + Tesla Waveform Indicator */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-end gap-1 h-4 px-1 text-zinc-800 ${isPlaying ? 'wave-playing' : 'opacity-40'}`}
                  aria-hidden="true"
                >
                  <span className="wave-bar w-1 h-3 rounded-full bg-current origin-bottom" style={{ animationDelay: '0ms' }} />
                  <span className="wave-bar w-1 h-4 rounded-full bg-current origin-bottom" style={{ animationDelay: '120ms' }} />
                  <span className="wave-bar w-1 h-2.5 rounded-full bg-current origin-bottom" style={{ animationDelay: '220ms' }} />
                  <span className="wave-bar w-1 h-4 rounded-full bg-current origin-bottom" style={{ animationDelay: '90ms' }} />
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(activeSentence.japanese)}
                  className={`touch-target expressive-pill inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap ${
                    isPlaying ? 'ring-2 ring-[#34A853]/40' : ''
                  }`}
                  title={lang === 'zh' ? '点击试听日语朗读' : '日本語音声を再生'}
                >
                  <Volume2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{isPlaying ? (lang === 'zh' ? '朗读中...' : '再生中...') : (lang === 'zh' ? '朗读发音' : '音声再生')}</span>
                </button>
              </div>
            </div>

            {/* Japanese Sentence */}
            <div className="text-lg sm:text-2xl font-bold text-zinc-950 leading-relaxed tracking-wide mb-3 font-jp">
              {activeSentence.japanese}
            </div>

            {/* Google 4-color subtle Part-of-Speech badge legend */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#4285F4]/10 text-[#1d4ed8]">名詞・実務</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EA4335]/10 text-[#b91c1c]">動詞</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FBBC05]/15 text-[#92400e]">助詞</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#34A853]/12 text-[#15803d]">敬語・謙譲語</span>
            </div>

            {/* Furigana Display */}
            {showFurigana && (
              <div className="text-xs sm:text-sm text-zinc-600 font-mono leading-relaxed mb-2 bg-white px-3.5 py-2 rounded-xl border border-zinc-200/80">
                <span className="text-zinc-500 mr-2">[假名]</span>
                {activeSentence.furigana}
              </div>
            )}

            {/* Romaji Display */}
            {showRomaji && (
              <div className="text-xs sm:text-sm text-zinc-600 font-mono leading-relaxed mb-2 bg-white px-3.5 py-2 rounded-xl border border-zinc-200/80">
                <span className="text-zinc-500 mr-2">[罗马音]</span>
                {activeSentence.romaji}
              </div>
            )}

            {/* Translation & Context */}
            <div className="pt-3 mt-3 border-t border-zinc-200/80">
              <div className="text-sm sm:text-base font-semibold text-zinc-900 mb-1">
                {lang === 'zh' ? activeSentence.translation : activeSentence.translationJa}
              </div>
              <div className="text-xs text-zinc-600 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                <span>{lang === 'zh' ? activeSentence.businessContext : activeSentence.businessContextJa}</span>
              </div>
            </div>
          </div>

          {/* Controls Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-600 relative">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <label className="touch-target inline-flex items-center gap-2 cursor-pointer select-none font-medium pr-2">
                <input
                  type="checkbox"
                  checked={showFurigana}
                  onChange={(e) => setShowFurigana(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900"
                />
                <span>{lang === 'zh' ? '平假名注音' : 'ふりがな表示'}</span>
              </label>

              <label className="touch-target inline-flex items-center gap-2 cursor-pointer select-none font-medium pr-2">
                <input
                  type="checkbox"
                  checked={showRomaji}
                  onChange={(e) => setShowRomaji(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900"
                />
                <span>{lang === 'zh' ? '罗马音' : 'ローマ字'}</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80 font-mono text-[11px] text-zinc-700">
                <Layers className="w-3 h-3 text-zinc-500" />
                Kuromoji NLP Engine
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80 text-[11px] font-semibold text-zinc-800">
                <Check className="w-3 h-3 text-[#34A853]" />
                N1 / BJT 对齐
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
