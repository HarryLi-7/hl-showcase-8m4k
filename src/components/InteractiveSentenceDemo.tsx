import React, { useRef, useState } from 'react'
import { DEMO_SENTENCES, DemoSentence } from '../data/content'
import { Volume2, BookOpen, ExternalLink } from 'lucide-react'
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
    <div id="interactive-demo" className="mt-6">
      <SpotlightCard className="rounded-3xl p-5 sm:p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              SPEECH DEMO // {lang === 'zh' ? '预置例句与浏览器朗读' : 'PRE-SET PHRASE AUDIO'}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950" style={{ letterSpacing: '-0.02em' }}>
              {lang === 'zh' ? '商务日语例句演示' : 'ビジネス日本語フレーズ試聴デモ'}
            </h3>
          </div>
          <p className="text-xs text-zinc-500 max-w-md">
            {lang === 'zh'
              ? '此处展示 3 条对日沟通预置例句（浏览器语音合成朗读）；完整的 Kuromoji 实时分词与词性着色可在上方「JLPT N1 日语学习工具」在线版体验。'
              : '3つの定型フレーズ切替とブラウザ音声読み上げデモです。Kuromoji によるリアルタイム品詞解析は上記の公開版Webツールでお試しいただけます。'}
          </p>
        </div>

        {/* Sentence Selector Buttons */}
        <div className="mb-4 pb-3 border-b border-zinc-200/80 relative">
          <div
            ref={demoScrollerRef}
            role="group"
            aria-label={lang === 'zh' ? '切换预置商务日语例句' : '例文切り替え'}
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
                  className={`touch-target flex-none snap-start px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap inline-flex items-center justify-center ${
                    active
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900'
                  }`}
                >
                  {lang === 'zh' ? `例句 ${item.id} · ${item.tabLabel}` : `例文 ${item.id} · ${item.tabLabelJa}`}
                </button>
              )
            })}
          </div>
        </div>

        {/* Sentence Display */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/90 border border-zinc-200/80 mb-4 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-700">
              {lang === 'zh' ? '表达要点' : '表現ポイント'}：
              {lang === 'zh' ? activeSentence.grammarPoint : activeSentence.grammarPointJa}
            </span>

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
              >
                <Volume2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{isPlaying ? (lang === 'zh' ? '朗读中...' : '再生中...') : (lang === 'zh' ? '浏览器朗读' : '音声再生')}</span>
              </button>
            </div>
          </div>

          <div className="text-base sm:text-xl font-bold text-zinc-950 leading-relaxed tracking-wide mb-3 font-jp">
            {activeSentence.japanese}
          </div>

          {showFurigana && (
            <div className="text-xs sm:text-sm text-zinc-600 font-mono leading-relaxed mb-2 bg-white px-3.5 py-2 rounded-xl border border-zinc-200/80">
              <span className="text-zinc-500 mr-2">{lang === 'zh' ? '[假名]' : '[かな]'}</span>
              {activeSentence.furigana}
            </div>
          )}

          {showRomaji && (
            <div className="text-xs sm:text-sm text-zinc-600 font-mono leading-relaxed mb-2 bg-white px-3.5 py-2 rounded-xl border border-zinc-200/80">
              <span className="text-zinc-500 mr-2">{lang === 'zh' ? '[罗马音]' : '[ローマ字]'}</span>
              {activeSentence.romaji}
            </div>
          )}

          <div className="pt-3 mt-3 border-t border-zinc-200/80">
            <div className="text-sm font-semibold text-zinc-900 mb-1">
              {lang === 'zh' ? activeSentence.translation : activeSentence.translationJa}
            </div>
            <div className="text-xs text-zinc-600 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? activeSentence.businessContext : activeSentence.businessContextJa}</span>
            </div>
          </div>
        </div>

        {/* Footer toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 relative">
          <div className="flex flex-wrap items-center gap-4">
            <label className="touch-target inline-flex items-center gap-2 cursor-pointer select-none font-medium">
              <input
                type="checkbox"
                checked={showFurigana}
                onChange={(e) => setShowFurigana(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900"
              />
              <span>{lang === 'zh' ? '显示平假名读音' : 'ふりがな表示'}</span>
            </label>

            <label className="touch-target inline-flex items-center gap-2 cursor-pointer select-none font-medium">
              <input
                type="checkbox"
                checked={showRomaji}
                onChange={(e) => setShowRomaji(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900"
              />
              <span>{lang === 'zh' ? '显示罗马音' : 'ローマ字表示'}</span>
            </label>
          </div>

          <a
            href="https://jlpt-trainer.vercel.app/standalone-grammar/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-[#4285F4] transition-colors"
          >
            <span>{lang === 'zh' ? '前往完整学习工具体验词性拆解' : '公開版で品詞解析を体験する'}</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  )
}
