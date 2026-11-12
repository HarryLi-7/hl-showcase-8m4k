import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Award, ShieldCheck, Globe, Lock, CheckCircle2, ZoomIn, X } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface EducationCredentialsProps {
  lang: 'zh' | 'ja'
}

export const EducationCredentials: React.FC<EducationCredentialsProps> = ({ lang }) => {
  const [isCertOpen, setIsCertOpen] = useState(false)
  const certDialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = certDialogRef.current
    if (!dialog) return

    if (isCertOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isCertOpen && dialog.open) {
      dialog.close()
    }
  }, [isCertOpen])

  useEffect(() => {
    const dialog = certDialogRef.current
    if (!dialog) return

    const handleClose = () => {
      setIsCertOpen(false)
    }
    dialog.addEventListener('close', handleClose)

    // Fallback for Safari/browsers without declarative closedby="any"
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

  const credentials = [
    {
      id: 'education',
      title: lang === 'zh' ? '华南师范大学 · 本科' : '華南師範大学 · 本科（大学卒業）',
      subtitle: lang === 'zh' ? '人力资源管理 · 管理学学士学位' : '人的資源管理専攻 · 管理学学士学位',
      tag: lang === 'zh' ? '高等教育双证' : '学歴・学位',
      icon: <GraduationCap className="w-5 h-5 text-[#4285F4]" />,
      detail:
        lang === 'zh'
          ? '已完成本科阶段系统学习并取得管理学学士学位，学信网学历及学位信息齐全，原件可在正式面试环节随时查验。'
          : '華南師範大学にて人的資源管理を専攻し、管理学学士学位を取得。公的学歴・学位証明書は採用選考時にいつでもご提示可能です。',
      footerText: lang === 'zh' ? '学信网学历/学位可查 · 支持面试核验' : '公的学歴・学位確認可 · 面談時提示可',
      isLocked: false,
    },
    {
      id: 'jlpt-n1',
      title: lang === 'zh' ? 'JLPT N1（108分 · 合格）' : 'JLPT N1（108点 · 合格）',
      subtitle: lang === 'zh' ? '知识 30 · 阅读 41 · 听力 37 · CEFR B2' : '知識 30 · 読解 41 · 聴解 37 · CEFR B2',
      tag: lang === 'zh' ? '脱敏原件公开' : '証明書公開中',
      icon: <Award className="w-5 h-5 text-[#FBBC05]" />,
      detail:
        lang === 'zh'
          ? '2024 年 4 月起从零突破，词汇/语法均为 B 级，听力与阅读均衡扎实。已将姓名及证书号做不可逆打码，支持点击下方放大核验。'
          : '2024年4月より独学で合格（文字語彙B・文法B）。氏名・番号のみをマスキングした公式認定書を以下より拡大確認できます。',
      footerText: lang === 'zh' ? '点击缩略图放大查验完整分数' : 'サムネイルから全スコア拡大可',
      isLocked: false,
    },
    {
      id: 'bjt-j2',
      title: lang === 'zh' ? 'BJT 商务日语 J2（448分）' : 'BJT ビジネス日本語 J2（448点）',
      subtitle: lang === 'zh' ? '高阶商务实战沟通与敬语应用' : 'ビジネス実務・敬語コミュニケーション',
      tag: lang === 'zh' ? '商务即战力' : 'ビジネス実践力',
      icon: <Award className="w-5 h-5 text-[#4285F4]" />,
      detail:
        lang === 'zh'
          ? '胜任日企日常办公、敬语邮件往来、会议记录与跨文化商务对接，并兼具母语级粤语与流利普通话沟通优势。'
          : '日系企業の社内調整、敬語メール対応、議事・折衝サポートを円滑に遂行。広東語（母語）・標準中国語との三言語連携が可能です。',
      footerText: lang === 'zh' ? '448 分成绩单支持面试核验' : '448点成績表・面談時提示可',
      isLocked: false,
    },
    {
      id: 'driving-license',
      title: lang === 'zh' ? '中国内地 C1 + 香港正式驾照' : '中国本土C1 ＋ 香港正式運転免許',
      subtitle: lang === 'zh' ? '支持左舵及右舵跨区域安全驾驶' : '中港両地域・左右ハンドル対応',
      tag: lang === 'zh' ? '粤港澳机动资质' : '運転・移動資格',
      icon: <ShieldCheck className="w-5 h-5 text-[#34A853]" />,
      detail:
        lang === 'zh'
          ? '具备多年安全驾驶经验与粤港澳商务接待配合能力，仅具体驾驶证编号与证件照片保留线下面试核验。'
          : '安全な実務運転経験があり、広州・香港圏内のビジネス送迎にも即応可（免許番号等のみ非公開）。',
      footerText: lang === 'zh' ? '双地驾照在持 · 证件号不公开' : '両免許保有・番号のみ非公開',
      isLocked: true,
    },
    {
      id: 'global-visas',
      title: lang === 'zh' ? '日本 5 年 + 美国 10 年 B1/B2 签证' : '日本5年数次 ＋ 米国10年B1/B2ビザ',
      subtitle: lang === 'zh' ? '支持合规短期商务出差，海外差旅零等待期' : '短期商用出張に即応可（取得待ち不要）',
      tag: lang === 'zh' ? '日美差旅就绪' : '海外渡航即応',
      icon: <Globe className="w-5 h-5 text-[#EA4335]" />,
      detail:
        lang === 'zh'
          ? '已持有日本 5 年多次签证与美国 10 年 B1/B2 商务旅游签证，可直接用于合规短期商务考察、会议及客户拜访；仅护照号及签证页编号于面试阶段核验。'
          : '日本5年数次査証・米国10年B1/B2査証を保有しており、短期商用出張・商談・会議等へ待機期間なく即座に対応可能です（旅券番号等のみ非公開）。',
      footerText: lang === 'zh' ? '支持即期海外差旅 · 护照号不公开' : '海外出張即応・番号のみ非公開',
      isLocked: true,
    }
  ]

  return (
    <section id="credentials" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            CREDENTIALS // {lang === 'zh' ? '学历、考级实绩与出行资质' : 'CREDENTIALS & LICENSES'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '华南师范大学本科、语言考级与商务资质' : '学歴・語学スコア・実務資格一覧'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {lang === 'zh'
              ? '公开展示学历背景、官方语言考级实绩、脱敏打码成绩单及日美差旅资质；仅个人姓名、准考证号与证件编号不作公开展示。'
              : '学歴、語学スコア、マスキング済み認定書、運転・渡航資格を公開。氏名・受験番号・証書番号等の個人機密情報のみ保護しています。'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {credentials.map((c, idx) => {
            const spanClass =
              idx < 3
                ? 'lg:col-span-2'
                : idx === 4
                  ? 'sm:col-span-2 lg:col-span-3'
                  : 'lg:col-span-3'
            return (
              <SpotlightCard key={c.id} className={`rounded-3xl p-5 flex flex-col justify-between ${spanClass}`}>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                      {c.icon}
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-0.5">
                    {c.title}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-600 mb-2">
                    {c.subtitle}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {c.detail}
                  </p>

                  {c.id === 'jlpt-n1' && (
                    <button
                      type="button"
                      onClick={() => setIsCertOpen(true)}
                      className="w-full mt-3.5 p-2 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/90 hover:border-zinc-300 transition-colors flex items-center gap-3 text-left group cursor-pointer"
                    >
                      <img
                        src="./jlpt-n1-cert-masked.png"
                        alt={lang === 'zh' ? 'JLPT N1 官方成绩单脱敏版缩略图' : 'JLPT N1 認定書マスキング版サムネイル'}
                        width={1024}
                        height={744}
                        className="w-16 aspect-[1024/744] object-cover rounded-lg border border-zinc-200 shadow-2xs shrink-0 group-hover:scale-[1.03] transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-zinc-900 flex items-center gap-1">
                          <ZoomIn className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                          <span className="truncate">{lang === 'zh' ? '点击放大 N1 成绩单' : '認定書を拡大表示'}</span>
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
                          {lang === 'zh' ? '证号已打码 · 各项得分可查' : '番号伏せ済・得点公開'}
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium relative">
                  {c.isLocked ? (
                    <Lock className="w-3.5 h-3.5 text-[#34A853] shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                  )}
                  <span>{c.footerText}</span>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>

      {/* Masked JLPT N1 Proof Zoom Dialog */}
      <dialog
        ref={certDialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="n1-dialog-title"
        className="command-dialog w-[min(94vw,46rem)] max-h-[88dvh] overflow-y-auto overscroll-contain rounded-3xl p-0 bg-white text-zinc-900 border border-zinc-200 shadow-2xl m-auto"
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                OFFICIAL SCORE REPORT // MASKED
              </div>
              <h3 id="n1-dialog-title" className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5">
                {lang === 'zh'
                  ? 'JLPT N1 成绩认定书（108分 · 个人敏感信息已不可逆打码）'
                  : 'JLPT N1 試験結果通知書（108点・個人情報マスキング済）'}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              className="touch-target p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer shrink-0 inline-flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
            <img
              src="./jlpt-n1-cert-masked.png"
              alt={lang === 'zh' ? 'JLPT N1 官方成绩单完整脱敏图：总分108分（语言知识30、阅读41、听力37）' : 'JLPT N1 公式結果通知書（合計108点）'}
              width={1024}
              height={744}
              className="w-full max-h-[min(58dvh,calc(88dvh-12.5rem))] min-h-[140px] object-contain mx-auto block"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#34A853] shrink-0" aria-hidden="true" />
              {lang === 'zh'
                ? '已对准考证号、个人姓名拼音及证书编号做像素打码，原件可于面试时提供核验。'
                : '受験番号・氏名・証明書番号のみマスキング処理済み（原本は面談時提示可）。'}
            </span>
            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              className="touch-target expressive-pill px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer self-end sm:self-auto inline-flex items-center justify-center"
            >
              {lang === 'zh' ? '关闭预览' : '閉じる'}
            </button>
          </div>
        </div>
      </dialog>
    </section>
  )
}
