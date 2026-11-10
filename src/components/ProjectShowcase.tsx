import React, { useState } from 'react'
import {
  PROJECTS,
  ARCHIVE_CLUSTERS,
  ProjectItem,
} from '../data/content'
import {
  Monitor,
  Cpu,
  Terminal,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  ChevronDown,
  FolderGit2,
} from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface ProjectShowcaseProps {
  lang: 'zh' | 'ja'
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'native' | 'ai' | 'miniprogram'>('all')

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  const getCategoryIcon = (cat: ProjectItem['category']) => {
    switch (cat) {
      case 'web':
        return <Terminal className="w-4 h-4 text-[#4285F4]" aria-hidden="true" />
      case 'native':
        return <Monitor className="w-4 h-4 text-[#34A853]" aria-hidden="true" />
      case 'ai':
        return <Cpu className="w-4 h-4 text-[#EA4335]" aria-hidden="true" />
      case 'miniprogram':
        return <Smartphone className="w-4 h-4 text-zinc-500" aria-hidden="true" />
    }
  }

  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div className="shrink-0">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              PROOF OF WORK // {lang === 'zh' ? '产品交付档案' : 'SHIPPED PRODUCTS'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
              {lang === 'zh' ? '主力 Web 系统与跨端工具矩阵' : '主力 Web＆マルチ開発群'}
            </h2>
          </div>

          {/* Single-Row Crisp Filter Controls */}
          <div
            role="group"
            aria-label={lang === 'zh' ? '按工程类别筛选作品' : 'プロジェクトカテゴリ絞り込み'}
            className="filter-scroller gap-1 p-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium max-w-full self-start lg:self-auto"
          >
            {[
              { id: 'all', zh: '全部 (6)', ja: 'すべて (6)' },
              { id: 'web', zh: '日语 Web', ja: '日本語 Web' },
              { id: 'native', zh: '双端原生', ja: '両OSアプリ' },
              { id: 'ai', zh: 'DSH / 扩展', ja: 'DSH / 拡張' },
              { id: 'miniprogram', zh: '小程序（未发布）', ja: '複製（未公開）' },
            ].map((item) => {
              const isSelected = filter === item.id
              return (
                <button
                  type="button"
                  key={item.id}
                  aria-pressed={isSelected}
                  onClick={(e) => {
                    setFilter(item.id as typeof filter)
                    e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' })
                  }}
                  className={`flex-none snap-start min-h-8 px-3 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-zinc-900 text-white shadow-2xs ring-1 ring-zinc-900/20'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {isSelected && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{lang === 'zh' ? item.zh : item.ja}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Project Cards Grid: Flagship spans full width first, 4 standard cards form two balanced rows, replica spans bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => {
            const isFullWidth =
              filter !== 'all' || project.tier === 'flagship' || project.tier === 'replica'
            const spanClass = isFullWidth ? 'md:col-span-2' : ''
            const isFlagship = project.tier === 'flagship'
            const isReplica = project.tier === 'replica'

            return (
              <SpotlightCard
                as="article"
                key={project.id}
                className={`@container rounded-3xl p-6 sm:p-7 flex flex-col justify-between ${spanClass} ${
                  isFlagship
                    ? 'border-zinc-300/90 ring-1 ring-zinc-900/5'
                    : isReplica
                      ? 'bg-white/75 border-dashed border-zinc-300'
                      : ''
                }`}
              >
                {/* Header & Intro Region */}
                <header className="relative mb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-xs font-semibold">
                      {getCategoryIcon(project.category)}
                      <span>{project.tag}</span>
                    </div>

                    {isFlagship ? (
                      <span className="text-[11px] font-mono font-semibold text-white bg-zinc-950 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
                        <Sparkles className="w-3 h-3 text-[#FBBC05]" aria-hidden="true" />
                        {lang === 'zh' ? project.statusLabel : project.statusLabelJa}
                      </span>
                    ) : isReplica ? (
                      <span className="text-[11px] font-mono font-medium text-zinc-600 bg-zinc-100 border border-zinc-200/90 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                        <Layers className="w-3 h-3 text-zinc-500" aria-hidden="true" />
                        {lang === 'zh' ? project.statusLabel : project.statusLabelJa}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200/80 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#34A853]" aria-hidden="true" />
                        {lang === 'zh' ? project.statusLabel : project.statusLabelJa}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-bold tracking-tight text-zinc-950 mb-1 ${isFlagship ? 'text-xl sm:text-2xl' : 'text-xl'}`}>
                    {lang === 'zh' ? project.title : project.titleJa}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-zinc-500">
                    {lang === 'zh' ? project.subtitle : project.subtitleJa}
                  </p>

                  {isReplica && (project.relationNote || project.relationNoteJa) && (
                    <div className="mt-3.5 px-3.5 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200/90 text-xs text-zinc-600 leading-relaxed flex items-start gap-2">
                      <Layers className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{lang === 'zh' ? project.relationNote : project.relationNoteJa}</span>
                    </div>
                  )}
                </header>

                {/* Adaptive Content + Footer layout keyed to the card's own @container width */}
                <div className="grid grid-cols-1 @2xl:grid-cols-12 gap-5 items-stretch flex-1 relative">
                  {/* Problem vs Solution Column */}
                  <div className="@2xl:col-span-7 flex flex-col gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex-1">
                      <span className="font-semibold text-zinc-900 block mb-1">
                        {lang === 'zh' ? '解决痛点：' : '課題・ボトルネック：'}
                      </span>
                      <p className="text-zinc-600 leading-relaxed">
                        {lang === 'zh' ? project.problem : project.problemJa}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex-1">
                      <span className="font-semibold text-zinc-900 block mb-1">
                        {lang === 'zh' ? '工程落地：' : '解決アプローチ＆実装：'}
                      </span>
                      <p className="text-zinc-600 leading-relaxed">
                        {lang === 'zh' ? project.solution : project.solutionJa}
                      </p>
                    </div>
                  </div>

                  {/* Highlights + Tech Stack + Impact Footer Column */}
                  <footer className="@2xl:col-span-5 flex flex-col justify-between pt-1 @2xl:pt-0 @2xl:pl-5 border-t @2xl:border-t-0 @2xl:border-l border-zinc-200/70">
                    <div className="space-y-2 mb-4 pt-3 @2xl:pt-0">
                      {(lang === 'zh' ? project.highlights : project.highlightsJa).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isReplica ? 'text-zinc-500' : 'text-[#4285F4]'}`}
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-zinc-200/70">
                      <div className="pill-group gap-1.5 mb-3">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-mono text-[11px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col gap-1 text-xs">
                        <span className="font-mono uppercase text-[11px] text-zinc-500">
                          {lang === 'zh' ? '定位与成效' : 'IMPACT'}
                        </span>
                        <span className="text-zinc-900 font-semibold leading-snug">
                          {lang === 'zh' ? project.metrics : project.metricsJa}
                        </span>
                      </div>
                    </div>
                  </footer>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* Progressive Native Disclosure for Deep Module Index (collapsed by default to minimize noise) */}
        <details className="archive-disclosure group mt-5 rounded-3xl bg-white/85 border border-zinc-200/90 shadow-2xs overflow-hidden">
          <summary className="px-5 sm:px-6 py-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-zinc-50/80 transition-colors select-none">
            <span className="flex items-center gap-2.5 min-w-0">
              <FolderGit2 className="w-4 h-4 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 leading-snug">
                {lang === 'zh'
                  ? '工程模块归档索引：DSH 插件 · Chrome MV3 扩展 · Android / Codex 细节（9 项实证）'
                  : '工程インデックス：DSH拡張 · Chrome MV3 · Android / Codex 実戦一覧（9件）'}
              </span>
            </span>
            <ChevronDown
              className="w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-zinc-200/70 bg-zinc-50/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ARCHIVE_CLUSTERS.map((cluster, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                  <div className="text-xs font-mono font-bold text-zinc-900 mb-3 pb-2 border-b border-zinc-100">
                    {lang === 'zh' ? cluster.title : cluster.titleJa}
                  </div>
                  <ul className="space-y-2.5 text-xs">
                    {cluster.items.map((item, j) => (
                      <li key={j} className="leading-snug">
                        <div className="font-semibold text-zinc-800">{item.name}</div>
                        <div className="text-zinc-500 mt-0.5">
                          {lang === 'zh' ? item.detail : item.detailJa}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}