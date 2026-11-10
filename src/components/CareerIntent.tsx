import React from 'react'
import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface CareerIntentProps {
  lang: 'zh' | 'ja'
}

export const CareerIntent: React.FC<CareerIntentProps> = ({ lang }) => {
  return (
    <section id="intent" className="py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SpotlightCard className="rounded-3xl p-6 sm:p-7">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-200/80 relative">
            <div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                {lang === 'zh' ? 'ALIGNMENT // 意向方向与配合方式' : 'ALIGNMENT // 希望条件・ワークスタイル'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950" style={{ letterSpacing: '-0.02em' }}>
                {lang === 'zh' ? '清晰的能力定位与务实工作诉求' : '明確な専門領域と柔軟な協業スタンス'}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
              <span className="w-2 h-2 rounded-full bg-[#34A853]" aria-hidden="true" />
              <span>{lang === 'zh' ? '状态从容 · 支持随时面试对接' : '柔軟に対応可・面談随時受付'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm relative">
            <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
              <div className="flex items-center gap-2 text-zinc-500 mb-1.5 text-xs font-medium">
                <Briefcase className="w-4 h-4 text-[#4285F4]" />
                <span>{lang === 'zh' ? '专注应用领域' : 'ターゲット領域'}</span>
              </div>
              <div className="font-bold text-zinc-950 text-sm">
                {lang === 'zh' ? '对日商务运营 · 流程助理' : '対日ビジネス推進・営業支援'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '兼顾跨境业务、AI 工作流提效方向' : 'グローバル展開・AI業務自動化対応'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
              <div className="flex items-center gap-2 text-zinc-500 mb-1.5 text-xs font-medium">
                <MapPin className="w-4 h-4 text-[#34A853]" />
                <span>{lang === 'zh' ? '城市与通勤偏好' : '希望勤務エリア'}</span>
              </div>
              <div className="font-bold text-zinc-950 text-sm">
                {lang === 'zh' ? '广州中心城区 · 地铁 45 分钟通勤圈' : '広州市中心エリア（地下鉄45分圏内）'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '支持越秀、天河、海珠等核心城区到岗及远程配合' : '越秀・天河・海珠などの主要ビジネスエリア出社対応'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
              <div className="flex items-center gap-2 text-zinc-500 mb-1.5 text-xs font-medium">
                <Clock className="w-4 h-4 text-[#FBBC05]" />
                <span>{lang === 'zh' ? '作息与保障期望' : '就労形態・待遇基準'}</span>
              </div>
              <div className="font-bold text-zinc-950 text-sm">
                {lang === 'zh' ? '标准双休 · 五险一金保障' : '完全週休2日制・社会保険完備'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '常规日间工时 · 注重长期沉淀' : '日勤ベース・長期的キャリア形成'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
              <div className="flex items-center gap-2 text-zinc-500 mb-1.5 text-xs font-medium">
                <Calendar className="w-4 h-4 text-[#EA4335]" />
                <span>{lang === 'zh' ? '配合度与差旅' : '対応柔軟性・出張'}</span>
              </div>
              <div className="font-bold text-zinc-950 text-sm">
                {lang === 'zh' ? '支持差旅 · 日美长签随时出发' : '出張即応・日米長期ビザ保有'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '内地 C1 + 香港双驾照 · 持日本5年 / 美国10年商务签' : '大陸C1・香港運転免許、日5年・米10年ビザ完備'}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
