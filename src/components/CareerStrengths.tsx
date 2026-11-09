import React from 'react'
import { Rocket, Zap, ShieldAlert, CheckCircle, GraduationCap } from 'lucide-react'

interface CareerStrengthsProps {
  lang: 'zh' | 'ja'
}

export const CareerStrengths: React.FC<CareerStrengthsProps> = ({ lang }) => {
  return (
    <section id="strengths" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            {lang === 'zh' ? '职业画像与价值匹配' : 'PROFESSIONAL VALUE'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {lang === 'zh' ? '我能为团队带来的核心价值' : 'チームにもたらす即戦力バリュー'}
          </h2>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Pillar 1 */}
          <div className="glass-panel rounded-2xl p-6 glow-card border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {lang === 'zh' ? 'AI 原生工具落地力' : 'AIによる業務自動化＆生産性改革'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '不仅是日常打字文员，更善于用 AI 工具链重塑业务流。能独立把枯燥的重复流程、海量音视频资料或表格数据转化为自动化脚本，直接为团队降本增效。'
                  : '単なる事務処理にとどまらず、最新AI技術を活用して既存の定型業務や長尺コンテンツの整理を自動化。チーム全体の生産性を劇的に向上させます。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-blue-600 dark:text-blue-400 font-medium">
              {lang === 'zh' ? '• 拒绝低效内耗，工程化提效' : '• 属人化業務の仕組み化・効率化'}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel rounded-2xl p-6 glow-card border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {lang === 'zh' ? '极速自学的破局力' : '圧倒的な自己学習力と適応スピード'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备极高密度的跨界自主吸收能力，从外语体系掌握到全栈应用开发均能高效完成知识转化，面对陌生业务或新工具极快上手产出结果。'
                  : '未知の語学分野や最新開発ツールに対しても短期間で自律的にキャッチアップし、即座に実務成果へと変換する高い適応力を備えています。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-amber-600 dark:text-amber-400 font-medium">
              {lang === 'zh' ? '• 极低培训成本，极快形成战力' : '• 指導コスト最小、短期間で独り立ち'}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel rounded-2xl p-6 glow-card border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {lang === 'zh' ? '责任闭环与实务交付' : '徹底した責任感と完遂コミットメント'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备沉稳的心态与极高工作责任感。无论是涉外商务邮件沟通、业务流梳理还是数字化工具研发，始终保持凡事有交待、件件有着落的交付闭环。'
                  : '高い職務責任感を保持。社内外のビジネス連絡から実務フロー改善まで、投げ出さず最後まで着実にやり切る確実なコミットメントがあります。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              {lang === 'zh' ? '• 言出必行，事事有回音、闭环交付' : '• 報告・連絡・相談の徹底と確実な遂行'}
            </div>
          </div>
        </div>

        {/* Education & Credentials Strip */}
        <div className="glass-panel rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                {lang === 'zh' ? '本科院校背景（公开页已脱敏）' : '大卒（学士）※大学名は非公開'}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {lang === 'zh' ? '双休 / 规范社保保障岗位意向' : '完全週休2日・社会保険完備ポジションを希望'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              {lang === 'zh' ? '心态沉稳 · 注重长期发展' : '安定した長期就労を希望'}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-800">
              {lang === 'zh' ? '支持城市地铁通勤或远程配合' : '通勤・リモート両対応可'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
