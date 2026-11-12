import React from 'react'
import { ArrowDownRight, Mail } from 'lucide-react'

interface HeroProps {
  lang: 'zh' | 'ja'
  onOpenContact: () => void
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  return (
    <section className="relative pt-8 pb-8 md:pt-14 md:pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white/85 border border-zinc-200/90 p-6 sm:p-10 shadow-2xs">
          {/* Role Target & Headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-50 border border-zinc-200/90 text-zinc-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#34A853]" aria-hidden="true" />
            <span>{lang === 'zh' ? '求职意向 · 即日可到岗' : '希望職種 · 即日勤務可'}</span>
          </div>

          <h1
            className="text-[1.45rem] sm:text-4xl md:text-[2.65rem] font-extrabold text-zinc-950 leading-[1.22] tracking-tight mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            {lang === 'zh' ? (
              <>
                Harry L.
                <span className="hidden sm:inline">｜</span>
                <br className="sm:hidden" />
                对日商务运营 / 流程助理
              </>
            ) : (
              <>
                Harry L.
                <span className="hidden sm:inline">｜</span>
                <br className="sm:hidden" />
                対日ビジネス運営・業務アシスタント
              </>
            )}
          </h1>

          {/* Fact Summary Line */}
          <p className="text-sm sm:text-base font-semibold text-zinc-800 mb-4">
            {lang === 'zh'
              ? '广州 · 华南师范大学本科 · JLPT N1（108 分）· BJT J2（448 分）'
              : '広州拠点 · 華南師範大学（学士）· JLPT N1（108点）· BJT J2（448点）'}
          </p>

          {/* Concise Value Statement */}
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mb-6 sm:mb-7">
            {lang === 'zh'
              ? '独立做过日语学习和长音频转录工具，希望把这些能力用在日文资料整理、对日沟通和流程提效上。'
              : '日本語学習ツールと長尺音声文字起こしツールを独力開発。これらの実践力を、日文資料の整理・対日コミュニケーション・業務フロー改善に活かします。'}
          </p>

          {/* Primary Actions: Mobile shows cleanly `看日语实务样本` (since Navbar already keeps `联系我` sticky on top) */}
          <div className="flex flex-wrap items-center gap-3 no-print">
            <a
              href="#samples"
              className="touch-target expressive-pill inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm"
            >
              <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '看日语实务样本' : '実務サンプルを見る'}</span>
            </a>

            <button
              type="button"
              onClick={onOpenContact}
              className="touch-target hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/90 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-colors shadow-2xs cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '联系我' : '連絡する'}</span>
            </button>

            <a
              href="#projects"
              className="touch-target inline-flex items-center justify-center px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {lang === 'zh' ? '查看精选项目 ↓' : '厳選実績へ ↓'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
