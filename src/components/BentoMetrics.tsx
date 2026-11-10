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
              ? '聚焦 AI 工程交付实效、经官方认证的跨语种能力与跨区域商务机动性，个人证件编号等隐私字段已做脱敏处理。'
              : '自作AIアプリケーション、公的日本語資格スコア、海外出張への機動力を中心にご紹介します（個人番号等のみ非公開）。'}
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
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                  {lang === 'zh' ? '成绩单公开可验' : '証明書画像公開中'}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 font-mono">
                  N1 <span className="text-zinc-500 font-normal">&amp;</span> BJT J2
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                  {lang === 'zh' ? '108分 / 448分 · CEFR B2' : '108点 / 448点 · CEFR B2'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {lang === 'zh'
                  ? '2024 年 4 月起从零高密度突破，先后拿下 JLPT N1（108分：语言知识 30 · 阅读 41 · 听力 37 · CEFR B2）与 BJT 商务日语 J2 级（448分），兼具母语级粤语与流利普通话。可独立研读日文业务资料、撰写敬语邮件并配合跨国业务推进。'
                  : '2024年4月よりゼロから独学し、JLPT N1（108点：知識30・読解41・聴解37・CEFR B2）および BJT J2（448点）を取得。ネイティブレベルの広東語と流暢な標準中国語も備え、日系業務ドキュメント読解・敬語メール対応を円滑に遂行できます。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 flex flex-wrap gap-1.5 relative">
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                {lang === 'zh' ? 'JLPT N1 (108分) · BJT J2 (448分)' : 'JLPT N1 (108点) · BJT J2 (448点)'}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                {lang === 'zh' ? '粤语母语 · 流利普通话' : '広東語ネイティブ・北京語流暢'}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100/90 text-zinc-700 border border-zinc-200/60">
                {lang === 'zh' ? '日文敬语与商务文书' : 'ビジネス敬語・文書作成'}
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
                  Web <span className="text-sm font-sans font-semibold text-zinc-500">{lang === 'zh' ? '为核心主项目 · 多端延展' : '主力＋マルチ連携'}</span>
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                {lang === 'zh'
                  ? '以独立研发的「JLPT N1 日语学习全栈 Web 系统」为核心主力（集成 Kuromoji 形态素拆解与 ETag 云端并发同步），同步延展出「片巢 ClipNest」桌面客户端、「转录中心」音频管线，并基于该主 Web 端逻辑1:1复刻了一套仅供个人离线自用、未公开发布的微信小程序版本。'
                  : '「JLPT N1 日本語学習フルスタック Web システム」（Kuromoji解析・ETagクラウド同期搭載）を主力プロダクトとし、デスクトップ「ClipNest」、音声基盤に加え、主Web版のロジックを再現した非公開・個人用のWeChatミニプログラム複製版も構築しています。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 flex items-center justify-between text-xs text-zinc-500 font-mono relative">
              <span>Next.js · Kuromoji · Electron · Python</span>
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
                  {lang === 'zh' ? '内地/香港双驾照 · 日美长期商务签' : '中港両運転免許 · 日米長期ビザ'}
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {lang === 'zh'
                  ? '已持有中国内地 C1 驾照与香港正式驾照，熟悉多区域安全驾驶规范；同时持有日本 5 年多次签证与美国 10 年 B1/B2 签证，均支持合规短期商务出差、会议与客户拜访（仅具体证件编号保留面试核验），跨城协作与海外差旅零等待期。'
                  : '中国本土C1免許および香港正式運転免許を保有し、広域の移動・接待に柔軟対応。さらに日本5年数次ビザ・米国10年B1/B2ビザを保有しており（証書番号のみ非公開）、短期商用出張・会議・現地訪問へ待機期間なく即応可能です。'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/70 grid grid-cols-1 sm:grid-cols-2 gap-2 relative">
              <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>{lang === 'zh' ? '中国内地 C1 驾照 + 香港正式驾照' : '中国本土C1 ＋ 香港正式運転免許'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                <Globe2 className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>{lang === 'zh' ? '日本 5 年多次 + 美国 10 年 B1/B2 签' : '日本5年数次 ＋ 米国10年B1/B2ビザ'}</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
