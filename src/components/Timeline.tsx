import React from 'react'
import { Award, Cpu, ShieldCheck } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface TimelineProps {
  lang: 'zh' | 'ja'
}

export const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const events = [
    {
      period: lang === 'zh' ? '阶段一 · 2024.04 起' : 'Phase 01 · 2024.04〜',
      title: lang === 'zh' ? '从零攻坚日语 · 拿下 JLPT N1 (108分) 与 BJT J2 (448分)' : 'ゼロからの日本語突破・JLPT N1 (108点) ＆ BJT J2 (448点)',
      badge: lang === 'zh' ? '语言突破' : '語学認定',
      icon: <Award className="w-4 h-4 text-[#FBBC05]" />,
      desc:
        lang === 'zh'
          ? '2024 年 4 月起从零高密度自学突破日语体系，先后考取 JLPT N1（108分：语言知识 30 / 阅读 41 / 听力 37 · CEFR B2）与 BJT 商务日语 J2 级（448分）；配合母语级粤语与流利普通话，建立起扎实的日文业务文档研读、敬语邮件往来与商务沟通基础。'
          : '2024年4月よりゼロから集中的に独学し、JLPT N1（108点：知識30 / 読解41 / 聴解37・CEFR B2）と BJT J2（448点）を取得。広東語（母語）・標準中国語と合わせ、日文ビジネス文書の読解・敬語メール実務の基盤を確立。'
    },
    {
      period: lang === 'zh' ? '阶段二 · 工程落地' : 'Phase 02 · 開発実装',
      title: lang === 'zh' ? 'AI 原生工程研发 · 主力日语 Web 系统与多工具落地' : 'AIネイティブ開発・主力日本語 Web ＆各種ツール実装',
      badge: lang === 'zh' ? '工程交付' : '技術実装',
      icon: <Cpu className="w-4 h-4 text-[#4285F4]" />,
      desc:
        lang === 'zh'
          ? '以 Next.js + Kuromoji 独立打造核心主项目「JLPT N1 日语学习全栈 Web 系统」（含 726 句型 + 220 核心词与 ETag 多端并发同步），并在同一工作流下研发「片巢 ClipNest」桌面端与「TranscribeHub 转录中心」长音频管线；此外还按主 Web 端逻辑复刻了未公开发布的同源微信小程序版本供个人离线复习使用。'
          : '主力プロジェクトとして「JLPT N1 日本語学習フルスタック Web システム」（726文法＋220語彙・Kuromoji解析・ETag同期）を実装。さらにデスクトップ「ClipNest」、音声パイプライン「TranscribeHub」を構築し、主力Web版のロジックを移植した非公開ミニプログラム複製版もローカル向けに作成しました。'
    },
    {
      period: lang === 'zh' ? '阶段三 · 机动储备' : 'Phase 03 · 機動力整備',
      title: lang === 'zh' ? '双地驾驶与涉外差旅 · 内地 C1/香港双驾照与日美长期商务签证' : '広域機動力・大陸/香港両運転免許と日米長期商用ビザ',
      badge: lang === 'zh' ? '涉外机动' : '移動基盤',
      icon: <ShieldCheck className="w-4 h-4 text-[#34A853]" />,
      desc:
        lang === 'zh'
          ? '已持有中国内地 C1 驾照与香港正式驾照，并持有日本 5 年多次签证及美国 10 年 B1/B2 签证（均支持合规短期商务出差，仅护照及证件编号保留面试环节核验），可快速配合团队开展广州本地接待、粤港澳联动与日美海外差旅支持。'
          : '中国本土C1免許・香港正式運転免許の両方を取得済み、さらに日本5年数次ビザ・米国10年B1/B2ビザを保有（証書番号等のみ非掲載）。広州圏内の現地訪問から香港連携、日米短期商用出張まで即応可能です。'
    }
  ]

  return (
    <section id="timeline" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            CAPABILITY TIMELINE // {lang === 'zh' ? '能力演化路径' : 'EVOLUTION'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '技能突破与产品交付路径' : '自己研鑽とプロダクト創出のプロセス'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {lang === 'zh'
              ? '记录自 2024 年 4 月起语言考级破局、AI 产品闭环落地到国际商务机动能力构建的真实轨迹。'
              : '2024年4月からの語学資格取得、AIアプリ開発、国際移動基盤の整備までの成長プロセスです。'}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-300/80 space-y-6">
          {events.map((e, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[37px] sm:-left-[45px] top-5 w-8 h-8 rounded-full bg-white border border-zinc-300 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                {e.icon}
              </div>

              <SpotlightCard className="rounded-3xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2 relative">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                    {e.period}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 text-white">
                    {e.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-2 relative">
                  {e.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed relative">
                  {e.desc}
                </p>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
