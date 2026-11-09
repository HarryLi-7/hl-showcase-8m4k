import React, { useState } from 'react'
import { PROJECTS, ProjectItem } from '../data/content'
import { Monitor, Mic, Terminal, Smartphone, CheckCircle2, TrendingUp } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface ProjectShowcaseProps {
  lang: 'zh' | 'ja'
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'miniprogram' | 'desktop' | 'ai' | 'web'>('all')

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  const getCategoryIcon = (cat: ProjectItem['category']) => {
    switch (cat) {
      case 'miniprogram':
        return <Smartphone className="w-4 h-4 text-[#34A853]" />
      case 'desktop':
        return <Monitor className="w-4 h-4 text-[#4285F4]" />
      case 'ai':
        return <Mic className="w-4 h-4 text-[#EA4335]" />
      case 'web':
        return <Terminal className="w-4 h-4 text-[#FBBC05]" />
    }
  }

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
              PROOF OF WORK // {lang === 'zh' ? '产品交付档案' : 'SHIPPED PRODUCTS'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
              {lang === 'zh' ? '独立自研工具与全栈系统交付' : '自主開発プロダクト＆技術実装'}
            </h2>
          </div>

          {/* Crisp Pill Filter Controls */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium self-start sm:self-auto">
            {[
              { id: 'all', zh: '全部项目', ja: 'すべて' },
              { id: 'miniprogram', zh: '微信小程序', ja: 'ミニプログラム' },
              { id: 'desktop', zh: '桌面客户端', ja: 'デスクトップ' },
              { id: 'ai', zh: 'AI 音频管线', ja: 'AI音声' },
              { id: 'web', zh: 'Web / NLP', ja: 'Web / NLP' },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setFilter(item.id as typeof filter)}
                className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                  filter === item.id
                    ? 'bg-zinc-900 text-white shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {lang === 'zh' ? item.zh : item.ja}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <SpotlightCard key={project.id} className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div className="relative">
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-xs font-semibold">
                    {getCategoryIcon(project.category)}
                    <span>{project.tag}</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#34A853]" />
                    Verified
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold tracking-tight text-zinc-950 mb-1">
                  {lang === 'zh' ? project.title : project.titleJa}
                </h3>
                <p className="text-xs font-medium text-zinc-500 mb-4">
                  {lang === 'zh' ? project.subtitle : project.subtitleJa}
                </p>

                {/* Problem vs Solution Split */}
                <div className="space-y-3 mb-5 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="font-semibold text-zinc-900 block mb-1">
                      {lang === 'zh' ? '解决痛点：' : '課題・ボトルネック：'}
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      {lang === 'zh' ? project.problem : project.problemJa}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="font-semibold text-zinc-900 block mb-1">
                      {lang === 'zh' ? '工程落地：' : '解決アプローチ＆実装：'}
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      {lang === 'zh' ? project.solution : project.solutionJa}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5">
                  {(lang === 'zh' ? project.highlights : project.highlightsJa).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack & Metrics */}
              <div className="pt-4 border-t border-zinc-200/70 relative">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/60 text-zinc-700 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-mono uppercase text-[11px] text-zinc-500">
                    {lang === 'zh' ? '量化成效' : 'IMPACT'}
                  </span>
                  <span className="text-zinc-900 font-semibold">
                    {lang === 'zh' ? project.metrics : project.metricsJa}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
