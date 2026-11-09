import React from 'react'
import { Award, Cpu, ShieldCheck, Compass, Globe2, Zap } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface BentoMetricsProps {
  lang: 'zh' | 'ja'
}

export const BentoMetrics: React.FC<BentoMetricsProps> = ({ lang }) => {
  return (
    <section id="metrics" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              CAPABILITY BENTO // {lang === 'zh' ? '核心能力与方法论' : 'CORE STRENGTHS'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
              {lang === 'zh' ? '工程落地与跨语种业务配合能力' : '業務課題を解決する4つの実践力'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm">
            {lang === 'zh'
              ? '聚焦实际工具产出与系统思考力，个人身份证明与证件编号仅在正式面试环节提供核验。'
              : '個人情報は非公開としつつ、自作アプリケーションと技術設計力を中心にご紹介します。'}
          </p>
        </div>

        {/* Asymmetric Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Japanese & Business (7 cols) */}
          <SpotlightCard className="md:col-span-7 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200/80 text-zinc-800 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#FBBC05]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wide">
                    {lang === 'zh' ? '语言与涉外商务' : '語学・ビジネス実践'}
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80">
                  {lang === 'zh' ? '原件私下备查' : '原本提示可'}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 font-mono">
                  N1 <span className="text-zinc-500 font-normal">&amp;</span> BJT
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                  {lang === 'zh' ? '商务日语认证等级' : 'ビジネス日本語認定'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {lang === 'zh'
                  ? '具备高阶日语阅读、听力与商务书面表达能力（对应官方高阶语言认证水平，具体成绩单与编号已在公开版隐藏）。可独立研读日文业务资料、撰写敬语邮件并配合跨国业务推进。'
                  : 'ビジネスレベルの日本語読解・聴解・文書作成能力を保持（成績証書の原本・番号はプライバシー保護のため非公開）。日系業務ドキュメントの読解やメール対応、折衝業務を円滑に遂行できます。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 flex flex-wrap gap-1.5 relative">
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                日语商务读写与会话
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                双语及方言流利
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                涉外商务文书
              </span>
            </div>
          </SpotlightCard>

          {/* Card 2: AI Native Engineering (5 cols) */}
          <SpotlightCard className="md:col-span-5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200/80 text-zinc-800 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-[#4285F4]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wide">
                    {lang === 'zh' ? 'AI 原生工程交付' : 'AIネイティブ開発'}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80">
                  Full-Cycle
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 font-mono tabular-nums">
                  04 <span className="text-sm font-sans font-semibold text-zinc-500">{lang === 'zh' ? '款独立自研产品' : 'プロダクト開発実績'}</span>
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {lang === 'zh'
                  ? '深度结合 AI 工程工作流与现代开发技术栈，独立完成「JLPT N1 文法随身练」原生微信小程序、「片巢 ClipNest」桌面应用、「转录中心」音频管线与「JLPT 句型系统」，具备从痛点梳理到可用工具交付的闭环能力。'
                  : '先端AI開発ワークフローを駆使し、WeChatミニプログラム、デスクトップアプリ「ClipNest」、音声パイプライン、Web学習システムを企画から実装まで一貫して構築。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs text-zinc-500 font-mono relative">
              <span>WeChat · Electron · Next.js · Python</span>
              <span className="text-zinc-900 font-sans font-semibold">{lang === 'zh' ? '下方查验' : '下記で公開'} ↓</span>
            </div>
          </SpotlightCard>

          {/* Card 3: Agile Self-Learning (5 cols) */}
          <SpotlightCard className="md:col-span-5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200/80 text-zinc-800 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#34A853]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wide">
                    {lang === 'zh' ? '敏捷自学与吸收' : '学習スピード'}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80">
                  Zero to One
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 font-mono tabular-nums">
                  0 → 1 <span className="text-sm font-sans font-semibold text-zinc-500">{lang === 'zh' ? '跨界自主突破' : '自律的スキル習得'}</span>
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {lang === 'zh'
                  ? '具备极高密度的信息检索、结构化归纳与工程自驱力：能把一门全新外语或陌生技术栈迅速拆解为可执行的每日训练与工具系统，极快适应新业务场景并输出价值。'
                  : '高い情報収集力と構造化思考により、未経験の語学や技術領域でも短期間で本質を掴み、日々の実践システムへと落とし込んで確実に成果へ繋げます。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium relative">
              • {lang === 'zh' ? '上手周期短 · 工具化思维解决复杂问题' : '立ち上がりが速く、仕組み化で課題を解決'}
            </div>
          </SpotlightCard>

          {/* Card 4: Mobility & Global Readiness (7 cols) */}
          <SpotlightCard className="md:col-span-7 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200/80 text-zinc-800 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-[#EA4335]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wide">
                    {lang === 'zh' ? '机动性与跨区协作' : '機動力と海外連携'}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80">
                  Global Ready
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950">
                  {lang === 'zh' ? '跨区域出差与合规出行就绪' : '国内外出張・柔軟な業務連携'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {lang === 'zh'
                  ? '具备合规驾照及跨境差旅手续准备（具体证件与签证细节已在公开页面隐藏，面试阶段可完整核验），适应高机动性商务接待、跨城协作及驻外支持任务。'
                  : '運転免許および海外渡航に必要な諸手続きを完備（具体的な証書情報は非公開とし、面談時に確認可能）。現地訪問や出張を伴うビジネス支援にも柔軟に対応可能です。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 grid grid-cols-2 gap-2 relative">
              <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>{lang === 'zh' ? '合法合规驾驶资质' : '正式運転資格あり'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                <Globe2 className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>{lang === 'zh' ? '具备海外差旅条件' : '海外出張即応可'}</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
