import React, { useEffect, useRef, useState } from 'react'
import { FEATURED_PROJECTS, FeaturedProject, OTHER_WORK_CLUSTERS } from '../data/content'
import {
  ExternalLink,
  ZoomIn,
  X,
  ChevronDown,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'
import { InteractiveSentenceDemo } from './InteractiveSentenceDemo'

interface ProjectShowcaseProps {
  lang: 'zh' | 'ja'
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const [activePreview, setActivePreview] = useState<FeaturedProject | null>(null)
  const previewDialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = previewDialogRef.current
    if (!dialog) return

    if (activePreview && !dialog.open) {
      dialog.showModal()
    } else if (!activePreview && dialog.open) {
      dialog.close()
    }
  }, [activePreview])

  useEffect(() => {
    const dialog = previewDialogRef.current
    if (!dialog) return

    const handleClose = () => {
      setActivePreview(null)
    }
    dialog.addEventListener('close', handleClose)

    const handleBackdropClick = (event: MouseEvent) => {
      if ('closedBy' in HTMLDialogElement.prototype) return
      if (event.target !== dialog) return
      const rect = dialog.getBoundingClientRect()
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      if (!isInside) {
        dialog.close()
      }
    }

    dialog.addEventListener('click', handleBackdropClick)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('click', handleBackdropClick)
    }
  }, [])

  return (
    <section id="projects" className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            FEATURED PROJECTS // {lang === 'zh' ? '两个精选案例' : '厳選プロダクト 2件'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '精选自研项目与可视化实证' : '主要開発プロジェクト（実機画面・デモ付）'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {lang === 'zh'
              ? '重点围绕「解决什么、我做了什么、怎么验证」展示两项与日语学习及音频整理直接相关的代表作；其余作品收拢于下方「其他作品」。'
              : '日本語学習・音声文字起こしに直結する2件を「課題・実装・検証」の順で紹介し、その他の制作物は下部に集約しています。'}
          </p>
        </div>

        {/* Two Featured Projects */}
        <div className="space-y-6">
          {FEATURED_PROJECTS.map((project) => (
            <SpotlightCard
              as="article"
              id={project.id}
              key={project.id}
              className="rounded-3xl p-5 sm:p-7"
            >
              <header className="flex flex-wrap items-start justify-between gap-3 mb-5 relative">
                <div>
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 mb-2">
                    {lang === 'zh' ? project.badge : project.badgeJa}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                    {lang === 'zh' ? project.title : project.titleJa}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                    {lang === 'zh' ? project.subtitle : project.subtitleJa}
                  </p>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target expressive-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold shrink-0 shadow-xs"
                  >
                    <span>{lang === 'zh' ? project.liveLabel : project.liveLabelJa}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                )}
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch relative">
                {/* Structured Case Description: What Problem / What I Built / How Verified */}
                <div className="lg:col-span-7 flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="font-bold text-zinc-950 block mb-1">
                      {lang === 'zh' ? '解决什么问题' : '課題（何を解決したか）'}
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      {lang === 'zh' ? project.problem : project.problemJa}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="font-bold text-zinc-950 block mb-1">
                      {lang === 'zh' ? '我做了什么' : '対応内容（何を作ったか）'}
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      {lang === 'zh' ? project.action : project.actionJa}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <span className="font-bold text-zinc-950 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0" aria-hidden="true" />
                      <span>{lang === 'zh' ? '怎么验证' : '検証方法'}</span>
                    </span>
                    <p className="text-zinc-600 leading-relaxed">
                      {lang === 'zh' ? project.verification : project.verificationJa}
                    </p>
                  </div>
                </div>

                {/* Screenshot Proof Column */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActivePreview(project)}
                    className="group text-left rounded-2xl border border-zinc-200/90 bg-zinc-50 p-2.5 hover:border-zinc-300 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                    aria-label={lang === 'zh' ? `放大查看 ${project.title} 界面截图` : `${project.titleJa} の画面を拡大`}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-zinc-200/80 bg-white">
                      <img
                        src={project.previewImage}
                        alt={lang === 'zh' ? project.previewAlt : project.previewAltJa}
                        width={project.previewWidth}
                        height={project.previewHeight}
                        loading="lazy"
                        className="w-full h-auto aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between gap-2 px-1">
                      <span className="text-[11px] text-zinc-600 leading-snug">
                        {lang === 'zh' ? project.previewCaption : project.previewCaptionJa}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-900 shrink-0">
                        <ZoomIn className="w-3.5 h-3.5 text-[#4285F4]" aria-hidden="true" />
                        <span>{lang === 'zh' ? '点击放大' : '拡大'}</span>
                      </span>
                    </div>
                  </button>

                  <div className="pill-group gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/70 text-zinc-700 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Adjacent Japanese Phrase Audio Demo (honestly scoped, alongside featured projects) */}
        <InteractiveSentenceDemo lang={lang} />

        {/* Collapsed Other Works Section */}
        <details
          id="other-works"
          className="archive-disclosure group mt-6 rounded-3xl bg-white/85 border border-zinc-200/90 shadow-2xs overflow-hidden"
        >
          <summary className="touch-target px-5 sm:px-6 py-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-zinc-50/80 transition-colors select-none">
            <span className="flex items-center gap-2.5 min-w-0">
              <FolderGit2 className="w-4 h-4 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 leading-snug">
                {lang === 'zh'
                  ? '其他作品（默认折叠）：ClipNest 音视频工具 · DSH 插件 · Chrome MV3 扩展 · Android 与未公开小程序复刻版'
                  : 'その他の制作物（折りたたみ）：ClipNest · DSH拡張 · Chrome MV3 · Android / 非公開複製版'}
              </span>
            </span>
            <ChevronDown
              className="w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-zinc-200/70 bg-zinc-50/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {OTHER_WORK_CLUSTERS.map((cluster, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-zinc-200/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 mb-1.5">
                      {lang === 'zh' ? cluster.title : cluster.titleJa}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                      {lang === 'zh' ? cluster.summary : cluster.summaryJa}
                    </p>
                  </div>
                  <ul className="space-y-2.5 pt-2.5 border-t border-zinc-100 text-xs">
                    {cluster.items.map((item, j) => (
                      <li key={j} className="leading-snug">
                        <div className="font-semibold text-zinc-800">{item.name}</div>
                        <div className="text-zinc-500 mt-0.5 leading-relaxed">
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

      {/* Screenshot Lightbox Dialog */}
      <dialog
        ref={previewDialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="project-preview-title"
        className="command-dialog w-[min(94vw,56rem)] max-h-[90dvh] overflow-y-auto overscroll-contain rounded-3xl p-0 bg-white text-zinc-900 border border-zinc-200 shadow-2xl m-auto"
      >
        {activePreview && (
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                  PRODUCT SCREENSHOT
                </div>
                <h3 id="project-preview-title" className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5">
                  {lang === 'zh' ? activePreview.title : activePreview.titleJa}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActivePreview(null)}
                className="touch-target p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer shrink-0 inline-flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
              <img
                src={activePreview.previewImage}
                alt={lang === 'zh' ? activePreview.previewAlt : activePreview.previewAltJa}
                width={activePreview.previewWidth}
                height={activePreview.previewHeight}
                className="w-full max-h-[min(64dvh,calc(90dvh-11rem))] object-contain mx-auto block"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
              <span>{lang === 'zh' ? activePreview.previewCaption : activePreview.previewCaptionJa}</span>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {activePreview.liveUrl && (
                  <a
                    href={activePreview.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-semibold"
                  >
                    <span>{lang === 'zh' ? activePreview.liveLabel : activePreview.liveLabelJa}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="touch-target expressive-pill px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer inline-flex items-center justify-center"
                >
                  {lang === 'zh' ? '关闭预览' : '閉じる'}
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
