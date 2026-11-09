import React from 'react'
import { Award, Cpu, ShieldCheck, Compass, Globe2, Zap } from 'lucide-react'

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
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              {lang === 'zh' ? '核心能力与方法论' : 'CORE CAPABILITIES'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {lang === 'zh' ? '工程落地与跨语种业务配合能力' : '業務課題を解決する4つの実践力'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
            {lang === 'zh'
              ? '聚焦实际工具产出与系统思考力，具体个人身份证明及证件编号仅在正式面试环节提供核验。'
              : '個人情報は非公開としつつ、自作アプリケーションと技術設計力を中心にご紹介します。'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Bento Card 1: Japanese & Business (7 cols) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 glow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    {lang === 'zh' ? '语言与涉外商务' : '語学・ビジネス実践'}
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100/70 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                  {lang === 'zh' ? '原件私下备查' : '原本提示可'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  N1 <span className="text-amber-500 font-bold">&</span> BJT
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300">
                  {lang === 'zh' ? '商务日语认证等级' : 'ビジネス日本語認定'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备高阶日语阅读、听力与商务书面表达能力（对应官方高阶语言认证水平，具体成绩单与编号已在公开版隐藏）。可独立研读日文业务资料、撰写敬语邮件并配合跨国业务推进。'
                  : 'ビジネスレベルの日本語読解・聴解・文書作成能力を保持（成績証書の原本・番号はプライバシー保護のため非公開）。日系業務ドキュメントの読解やメール対応、折衝業務を円滑に遂行できます。'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                🇯🇵 日语商务读写与会话
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                🗣️ 双语及地方方言流利
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                🌏 涉外商务文书
              </span>
            </div>
          </div>

          {/* Bento Card 2: AI Native Engineering (5 cols) */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-7 glow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {lang === 'zh' ? 'AI 原生工程交付' : 'AIネイティブ開発力'}
                  </span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                  Full-Cycle
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  4 <span className="text-sm font-semibold text-zinc-500">{lang === 'zh' ? '款独立自研产品' : 'プロダクト開発実績'}</span>
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '深度结合 AI 工程工作流与现代开发技术栈，独立完成「JLPT N1 文法随身练」原生微信小程序、「片巢 ClipNest」桌面应用、「转录中心」音频管线与「JLPT 句型系统」，具备从痛点梳理到可用工具交付的闭环能力。'
                  : '先端AI開発ワークフローを駆使し、WeChatミニプログラム「JLPT文法マスター」、デスクトップアプリ「ClipNest」、音声文字起こしパイプライン、Web学習システムを企画から実装まで一貫して構築。'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200/70 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span>WeChat · Electron · Next.js · Python</span>
              <span className="text-blue-600 dark:text-blue-400 font-sans font-semibold">{lang === 'zh' ? '下方展示' : '下記で公開'} ↓</span>
            </div>
          </div>

          {/* Bento Card 3: Agile Self-Learning (5 cols) */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-7 glow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    {lang === 'zh' ? '敏捷自学与吸收力' : '圧倒的学習スピード'}
                  </span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  Zero to One
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  0 → 1 <span className="text-sm font-semibold text-zinc-500">{lang === 'zh' ? '跨界自主突破' : '自律的スキル習得'}</span>
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备极高密度的信息检索、结构化归纳与工程自驱力：能把一门全新外语或陌生技术栈迅速拆解为可执行的每日训练与工具系统，极快适应新业务场景并输出价值。'
                  : '高い情報収集力と構造化思考により、未経験の語学や技術領域でも短期間で本質を掴み、日々の実践システムへと落とし込んで確実に成果へ繋げます。'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200/70 dark:border-zinc-800/80 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              {lang === 'zh' ? '• 上手周期短 · 工具化思维解决复杂问题' : '• 立ち上がりが速く、仕組み化で課題を解決'}
            </div>
          </div>

          {/* Bento Card 4: Mobility & Global Readiness (7 cols) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 glow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                    {lang === 'zh' ? '机动性与跨区协作' : '機動力と海外連携対応'}
                  </span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-100/70 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300">
                  Global Ready
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === 'zh' ? '跨区域出差与合规出行就绪' : '国内外出張・柔軟な業務連携'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {lang === 'zh'
                  ? '具备合规驾照及跨境差旅手续准备（具体证件与签证细节已在公开页面隐藏，面试阶段可完整核验），适应高机动性商务接待、跨城协作及驻外支持任务。'
                  : '運転免許および海外渡航に必要な諸手続きを完備（具体的な証書情報は非公開とし、面談時に確認可能）。現地訪問や出張を伴うビジネス支援にも柔軟に対応可能です。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/80 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{lang === 'zh' ? '合法合规驾驶资质' : '正式運転資格あり'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Globe2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{lang === 'zh' ? '具备海外差旅条件' : '海外出張即応可'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
