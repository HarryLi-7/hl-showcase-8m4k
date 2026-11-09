import React, { useState } from 'react'
import { PROJECTS, ProjectItem } from '../data/content'
import { Monitor, Mic, Terminal, Smartphone, CheckCircle2, TrendingUp } from 'lucide-react'

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
        return <Smartphone className="w-4 h-4" />
      case 'desktop':
        return <Monitor className="w-4 h-4" />
      case 'ai':
        return <Mic className="w-4 h-4" />
      case 'web':
        return <Terminal className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              {lang === 'zh' ? '真实可查的项目与交付' : 'PROOF OF WORK'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {lang === 'zh' ? '独立自研工具与全栈系统交付' : '自主開発プロダクト＆技術実装'}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-200/60 dark:bg-zinc-800/60 text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              {lang === 'zh' ? '全部项目' : 'すべて'}
            </button>
            <button
              onClick={() => setFilter('miniprogram')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'miniprogram'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              {lang === 'zh' ? '微信小程序' : 'ミニプログラム'}
            </button>
            <button
              onClick={() => setFilter('desktop')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'desktop'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              {lang === 'zh' ? '桌面客户端' : 'デスクトップ'}
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'ai'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              {lang === 'zh' ? 'AI 音视频管线' : 'AI音声'}
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filter === 'web'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              Web / NLP
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 glow-card flex flex-col justify-between border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:border-blue-500/40 transition-all"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                    {getCategoryIcon(project.category)}
                    <span>{project.tag}</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
                  {lang === 'zh' ? project.title : project.titleJa}
                </h3>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  {lang === 'zh' ? project.subtitle : project.subtitleJa}
                </p>

                {/* Problem vs Solution Split */}
                <div className="space-y-3 mb-5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/40 dark:border-rose-900/30">
                    <span className="font-semibold text-rose-700 dark:text-rose-400 block mb-1">
                      {lang === 'zh' ? '⚡️ 解决痛点：' : '⚡️ 課題・ボトルネック：'}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {lang === 'zh' ? project.problem : project.problemJa}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/40 dark:border-blue-900/30">
                    <span className="font-semibold text-blue-700 dark:text-blue-400 block mb-1">
                      {lang === 'zh' ? '💡 解决方案与落地：' : '💡 解決アプローチ＆実装：'}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {lang === 'zh' ? project.solution : project.solutionJa}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5">
                  {(lang === 'zh' ? project.highlights : project.highlightsJa).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack & Metrics */}
              <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/40 flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {lang === 'zh' ? '量化成效：' : '成果数値：'}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {lang === 'zh' ? project.metrics : project.metricsJa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
