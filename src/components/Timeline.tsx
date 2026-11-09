import React from 'react'
import { Award, Cpu, ShieldCheck } from 'lucide-react'

interface TimelineProps {
  lang: 'zh' | 'ja'
}

export const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const events = [
    {
      period: lang === 'zh' ? '阶段一 · 语种突破' : 'Phase 01 · 語学習得',
      title: lang === 'zh' ? '高阶日语攻坚 · 掌握涉外商务读写与听力' : '高度な日本語習得・ビジネス実務レベルの確立',
      badge: lang === 'zh' ? '语言能力' : '語学認定',
      icon: <Award className="w-4 h-4 text-amber-500" />,
      desc:
        lang === 'zh'
          ? '从零起步高密度自学突破高阶日语体系（对应 N1 及商务日语评估标准，具体考分及证书编号已在公开版隐藏），建立起流利的日文业务文档研读、邮件往来与商务沟通基础。'
          : '集中的な独学により短期間でビジネスレベルの日本語運用能力を確立（詳細な試験スコア・証明書番号は公開版では非公開）。専門文書の読解、敬語メール、実務コミュニケーションの土台を構築。'
    },
    {
      period: lang === 'zh' ? '阶段二 · 工程落地' : 'Phase 02 · 開発実装',
      title: lang === 'zh' ? 'AI 原生工程研发 · 独立自研 4 款产品闭环交付' : 'AIネイティブ開発・4本の独自プロダクト開発と実装',
      badge: lang === 'zh' ? '工程交付' : '技術実装',
      icon: <Cpu className="w-4 h-4 text-blue-500" />,
      desc:
        lang === 'zh'
          ? '结合 AI 辅助编程与现代工程工具链，独立完成「JLPT N1 文法随身练」原生微信小程序、「片巢 ClipNest」桌面端、「TranscribeHub 转录中心」长音频管线、以及「JLPT 句型特训器」全栈 Web 系统的研发与部署，具备将业务痛点转化为软件效率工具的能力。'
          : 'AI開発ツールとモダン技術基盤を組み合わせ、WeChatミニプログラム「JLPT文法マスター」、デスクトップアプリ「ClipNest」、音声文字起こしパイプライン「TranscribeHub」、Web学習アプリを企画・開発・実装。業務課題をソフトウェアで解決する推進力を実証。'
    },
    {
      period: lang === 'zh' ? '阶段三 · 综合储备' : 'Phase 03 · 実務基盤',
      title: lang === 'zh' ? '涉外机动能力 · 合规出行与跨区域业务支持储备' : '機動的な業務支援体制・運転資格と出張対応基盤',
      badge: lang === 'zh' ? '涉外机动' : '移動基盤',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      desc:
        lang === 'zh'
          ? '具备合法合规驾驶资质与跨境商务差旅基础条件（具体证件及签注细节仅在正规面试环节查验），能够配合团队开展本地商务接待、跨城协作及海外差旅支持。'
          : '運転免許および海外渡航に係る基盤を整備（具体的な証明書情報は面談時にご提示）。現地訪問、出張、オフライン調整など機動的なビジネス支援に即応可能です。'
    }
  ]

  return (
    <section id="timeline" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            {lang === 'zh' ? '能力演化与沉淀轨迹' : 'CAPABILITY TIMELINE'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {lang === 'zh' ? '技能突破与产品交付路径' : '自己研鑽とプロダクト創出のプロセス'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {lang === 'zh'
              ? '隐藏真实日期、地名及敏感履历细节，仅保留核心技能与作品迭代脉络。'
              : '個人特定に繋がる年月・地名等の詳細は伏せ、スキル習得と開発成果の推移のみを掲載しています。'}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
          {events.map((e, idx) => (
            <div key={idx} className="relative group">
              {/* Dot Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-500 transition-all">
                {e.icon}
              </div>

              {/* Card Content */}
              <div className="glass-panel rounded-2xl p-5 sm:p-6 glow-card border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
                      {e.period}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      {e.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {e.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
