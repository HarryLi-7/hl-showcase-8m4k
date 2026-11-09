import React, { useState } from 'react'
import { DEMO_SENTENCES, DemoSentence } from '../data/content'
import { Sparkles, Volume2, BookOpen, Layers, Check } from 'lucide-react'

interface InteractiveSentenceDemoProps {
  lang: 'zh' | 'ja'
}

export const InteractiveSentenceDemo: React.FC<InteractiveSentenceDemoProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<number>(1)
  const [showFurigana, setShowFurigana] = useState<boolean>(true)
  const [showRomaji, setShowRomaji] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const activeSentence: DemoSentence =
    DEMO_SENTENCES.find((s) => s.id === selectedId) || DEMO_SENTENCES[0]

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ja-JP'
    utterance.rate = 0.95

    const voices = window.speechSynthesis.getVoices()
    // Select mature natural adult voice, avoiding high-pitched child voice
    const jaVoice = voices.find(
      (v) =>
        v.lang.startsWith('ja') &&
        !v.name.includes('Aoi') &&
        (v.name.includes('Nanami') || v.name.includes('Kyoko') || v.name.includes('Otoya') || true)
    )
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
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '交互式现场查验' : 'INTERACTIVE LIVE DEMO'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {lang === 'zh' ? 'JLPT N1 商务实战微特训器' : 'JLPT N1・BJT 実践例文インタラクティブ検証'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
            {lang === 'zh'
              ? '提取自本人自研「JLPT 句型特训系统」的核心模块，你可以在此实时试玩高阶商务句型的形态素拆解与语境。'
              : '独自開発「JLPT学習システム」のコア機能を本ポートフォリオ内に直接移植。品詞解析とビジネス文脈をリアルタイム検証可能です。'}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 relative overflow-hidden shadow-sm">
          {/* Top Sentence Switcher Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-zinc-200/70 dark:border-zinc-800/80">
            {DEMO_SENTENCES.map((item) => {
              const active = item.id === selectedId
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-xs scale-[1.02]'
                      : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  {lang === 'zh' ? `例句 ${item.id}：` : `例文 ${item.id}：`}
                  {item.id === 1 && (lang === 'zh' ? '求职志望动机' : '志望動機・自己PR')}
                  {item.id === 2 && (lang === 'zh' ? '业务自动化实施' : '業務改善・自動化')}
                  {item.id === 3 && (lang === 'zh' ? '对日礼仪与协作' : 'ビジネスマナー・協調性')}
                </button>
              )
            })}
          </div>

          {/* Sentence Display Area */}
          <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 mb-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300">
                {lang === 'zh' ? '高阶语法解析' : '文型・構文ポイント'}：{lang === 'zh' ? activeSentence.grammarPoint : activeSentence.grammarPointJa}
              </span>

              {/* Speak Audio Button */}
              <button
                onClick={() => handleSpeak(activeSentence.japanese)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  isPlaying
                    ? 'bg-emerald-500 text-white border-emerald-500 animate-pulse'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100'
                }`}
                title="点击试听原生发音"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isPlaying ? (lang === 'zh' ? '播放中...' : '再生中...') : (lang === 'zh' ? '朗读发音' : '音声再生')}</span>
              </button>
            </div>

            {/* Japanese Text */}
            <div className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-relaxed tracking-wide mb-3 font-jp">
              {activeSentence.japanese}
            </div>

            {/* Furigana Display */}
            {showFurigana && (
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed mb-2 bg-zinc-200/40 dark:bg-zinc-800/40 px-3 py-2 rounded-lg">
                <span className="text-zinc-400 dark:text-zinc-500 mr-2">[假名]</span>
                {activeSentence.furigana}
              </div>
            )}

            {/* Romaji Display */}
            {showRomaji && (
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed mb-2 bg-zinc-200/40 dark:bg-zinc-800/40 px-3 py-2 rounded-lg">
                <span className="text-zinc-400 dark:text-zinc-500 mr-2">[罗马音]</span>
                {activeSentence.romaji}
              </div>
            )}

            {/* Translation & Context */}
            <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <div className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                {lang === 'zh' ? activeSentence.translation : activeSentence.translationJa}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>{lang === 'zh' ? activeSentence.businessContext : activeSentence.businessContextJa}</span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showFurigana}
                  onChange={(e) => setShowFurigana(e.target.checked)}
                  className="rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500"
                />
                <span>{lang === 'zh' ? '平假名注音' : 'ふりがな表示'}</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showRomaji}
                  onChange={(e) => setShowRomaji(e.target.checked)}
                  className="rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500"
                />
                <span>{lang === 'zh' ? '罗马音' : 'ローマ字'}</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px]">
                <Layers className="w-3 h-3 text-zinc-400" />
                Kuromoji NLP Engine
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                <Check className="w-3 h-3" />
                N1 / BJT 对齐
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
