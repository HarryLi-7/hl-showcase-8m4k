import React from 'react'
import { Rocket, Zap, ShieldAlert, CheckCircle, GraduationCap } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface CareerStrengthsProps {
  lang: 'zh' | 'ja'
}

export const CareerStrengths: React.FC<CareerStrengthsProps> = ({ lang }) => {
  return (
    <section id="strengths" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            PROFESSIONAL VALUE // {lang === 'zh' ? '职业价值匹配' : 'VALUE PILLARS'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '我能为团队带来的核心价值' : 'チームにもたらす即戦力バリュー'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <SpotlightCard className="rounded-3xl p-6 flex flex-col justify-between">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 text-[#4285F4] flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                {lang === 'zh' ? 'AI 原生工具落地力' : 'AIによる業務自動化＆生産性改革'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '日常高频实战 Codex、Antigravity 与 DeepSeek Harness，不只是简单对话，更能通过自研 Agent Skills、DSH 插件与多端客户端工程（Web / macOS SwiftUI / Android Kotlin / Chrome MV3）把复杂业务流程直接转化为可复用工具方案。'
                  : 'Codex · Antigravity · DeepSeek Harness を実戦投入し、単なるチャット活用を超えた自作Skills・DSHプラグイン・マルチプラットフォーム実装（Web / SwiftUI / Kotlin / MV3）により、業務課題を自動化ソリューションへ落とし込みます。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/70 text-xs text-zinc-800 font-semibold relative">
              • {lang === 'zh' ? 'Codex · Antigravity · DeepSeek Harness 日常实战' : 'Codex · Antigravity · DeepSeek Harness 日常実戦'}
            </div>
          </SpotlightCard>

          <SpotlightCard className="rounded-3xl p-6 flex flex-col justify-between">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 text-[#FBBC05] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                {lang === 'zh' ? '极速自学的破局力' : '圧倒的な自己学習力と適応スピード'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备极高密度的跨界自主吸收能力，从外语体系掌握到全栈应用开发均能高效完成知识转化，面对陌生业务或新工具极快上手产出结果。'
                  : '未知の語学分野や最新開発ツールに対しても短期間で自律的にキャッチアップし、即座に実務成果へと変換する高い適応力を備えています。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/70 text-xs text-zinc-800 font-semibold relative">
              • {lang === 'zh' ? '极低培训成本，极快形成战力' : '指導コスト最小、短期間で独り立ち'}
            </div>
          </SpotlightCard>

          <SpotlightCard className="rounded-3xl p-6 flex flex-col justify-between">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 text-[#34A853] flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">
                {lang === 'zh' ? '责任闭环与实务交付' : '徹底した責任感と完遂コミットメント'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                {lang === 'zh'
                  ? '具备沉稳的心态与极高工作责任感。无论是涉外商务邮件沟通、业务流梳理还是数字化工具研发，始终保持凡事有交待、件件有着落的交付闭环。'
                  : '高い職務責任感を保持。社内外のビジネス連絡から実務フロー改善まで、投げ出さず最後まで着実にやり切る確実なコミットメントがあります。'}
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-200/70 text-xs text-zinc-800 font-semibold relative">
              • {lang === 'zh' ? '言出必行，事事有回音' : '報告・連絡・相談の徹底と確実な遂行'}
            </div>
          </SpotlightCard>
        </div>

        {/* Summary Strip */}
        <SpotlightCard className="rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 relative">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-700">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-950">
                {lang === 'zh' ? '华南师范大学本科 · 常驻广州' : '華南師範大学卒（学士）· 広州拠点'}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                {lang === 'zh' ? '双休 · 五险一金规范保障（地铁 45 分钟通勤圈）' : '完全週休2日・社会保険完備（地下鉄45分圏内）'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs relative">
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium border border-zinc-200 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#34A853]" />
              {lang === 'zh' ? '心态沉稳 · 注重长期发展' : '安定した長期就労を希望'}
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium border border-zinc-200">
              {lang === 'zh' ? '支持广州地铁通勤 · 配合短期出差' : '広州市内通勤・短期出張対応可'}
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
