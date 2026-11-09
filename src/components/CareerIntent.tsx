import React from 'react'
import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react'

interface CareerIntentProps {
  lang: 'zh' | 'ja'
}

export const CareerIntent: React.FC<CareerIntentProps> = ({ lang }) => {
  return (
    <section id="intent" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-200/80 dark:border-zinc-800">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                {lang === 'zh' ? '意向方向与配合方式' : '希望条件・ワークスタイル'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {lang === 'zh' ? '清晰的能力定位与务实工作诉求' : '明確な専門領域と柔軟な協業スタンス'}
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {lang === 'zh' ? '脱敏公开展示 · 支持正式渠道沟通' : '匿名公開モード・正規ルートより面談調整可'}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            {/* Target Role */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1.5 text-xs font-medium">
                <Briefcase className="w-4 h-4 text-blue-500" />
                <span>{lang === 'zh' ? '专注应用领域' : 'ターゲット領域'}</span>
              </div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                {lang === 'zh' ? '对日商务运营 · 流程助理' : '対日ビジネス推進・営業支援'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '兼顾跨境业务、AI 工作流提效方向' : 'グローバル展開・AI業務自動化対応'}
              </div>
            </div>

            {/* Location & Radius */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1.5 text-xs font-medium">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'zh' ? '城市与通勤偏好' : '希望勤務エリア'}</span>
              </div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                {lang === 'zh' ? '沿海一线城市核心城区' : '主要都市圏（オンライン・出社両対応）'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '具体居住区域与通勤细节私信同步' : '詳細な通勤範囲は個別面談にて共有'}
              </div>
            </div>

            {/* Work Model */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1.5 text-xs font-medium">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>{lang === 'zh' ? '作息与保障期望' : '就労形態・待遇基準'}</span>
              </div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                {lang === 'zh' ? '标准双休 · 规范社保保障' : '完全週休2日制・社会保険完備'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '常规日间工时 · 注重长期沉淀' : '日勤ベース・長期的キャリア形成'}
              </div>
            </div>

            {/* Mobility */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1.5 text-xs font-medium">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>{lang === 'zh' ? '配合度与差旅' : '対応柔軟性・出張'}</span>
              </div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                {lang === 'zh' ? '支持差旅 · 可快速协调安排' : '出張対応可・柔軟なスケジュール調整'}
              </div>
              <div className="text-zinc-500 text-xs mt-1">
                {lang === 'zh' ? '具备合规驾驶与涉外差旅适应力' : '実務移動・出張手配に支障なし'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
