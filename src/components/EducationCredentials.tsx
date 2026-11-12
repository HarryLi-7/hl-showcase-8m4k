import React, { useEffect, useRef, useState } from 'react'
import {
  GraduationCap,
  Award,
  Activity,
  Briefcase,
  Lock,
  CheckCircle2,
  ZoomIn,
  X,
} from 'lucide-react'
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
    <section id="credentials" className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            EDUCATION &amp; CREDENTIALS // {lang === 'zh' ? '学历、证书与辅助信息' : '学歴・語学・補足情報'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '学历、语言证书与个人背景' : '学歴・語学証明書・補足資格'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {lang === 'zh'
              ? '列明本科毕业与学位授予时间、日语考级官方参照说明，以及个人长期路跑数据与可选出行资质；所有证件原件均可在面试环节核验。'
              : '学歴（卒業・学位取得年月）、語学資格の公式基準範囲、継続的なランニング記録および出張関連資格を記載しています（原本は面談時確認可）。'}
          </p>
        </div>

        {/* Primary Grid: Education + JLPT N1 + BJT J2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* 1. Education */}
          <SpotlightCard className="rounded-3xl p-5 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#4285F4]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                  {lang === 'zh' ? '本科学历与学位' : '学歴・学位'}
                </span>
              </div>

              <h3 className="text-base font-bold text-zinc-950 mb-0.5">
                {lang === 'zh' ? '华南师范大学 · 本科' : '華南師範大学 · 本科'}
              </h3>
              <div className="text-xs font-semibold text-zinc-700 mb-2">
                {lang === 'zh'
                  ? '人力资源管理 · 管理学学士学位'
                  : '人的資源管理専攻 · 管理学学士'}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {lang === 'zh'
                  ? '2023 年 12 月本科毕业，2024 年 6 月授予管理学学士学位。系统修读组织行为、薪酬绩效及劳动关系课程。'
                  : '2023年12月卒業、2024年6月に管理学学士学位を取得。組織管理・人事労務分野を専攻。'}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium relative">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span>
                {lang === 'zh'
                  ? '脱敏成绩信息可查看，原件可在面试时核验'
                  : '確認用資料提示可・原本は面談時提示可'}
              </span>
            </div>
          </SpotlightCard>

          {/* 2. JLPT N1 */}
          <SpotlightCard className="rounded-3xl p-5 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#FBBC05]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                  {lang === 'zh' ? '脱敏件可查看' : 'マスク済公開中'}
                </span>
              </div>

              <h3 className="text-base font-bold text-zinc-950 mb-0.5">
                {lang === 'zh' ? 'JLPT N1（108 分 · 合格）' : 'JLPT N1（108点 · 合格）'}
              </h3>
              <div className="text-xs font-semibold text-zinc-700 mb-2">
                {lang === 'zh'
                  ? '语言知识 30 · 阅读 41 · 听力 37'
                  : '言語知識 30 · 読解 41 · 聴解 37'}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {lang === 'zh'
                  ? '官方 CEFR 对照参照 B2（测试范围侧重阅读与听力理解；实际书面表达与业务整理见上方实务样本）。'
                  : 'JLPT公式のCEFR対照参照B2（主に読解・聴解の測定基準。実務記述・整理例は上記サンプルをご参照ください）。'}
              </p>

              <button
                type="button"
                onClick={() => setIsCertOpen(true)}
                className="w-full mt-3 p-2 rounded-2xl bg-zinc-50 hover:bg-zinc-100/90 border border-zinc-200/90 hover:border-zinc-300 transition-colors flex items-center gap-3 text-left group cursor-pointer"
              >
                <img
                  src="./jlpt-n1-cert-masked.png"
                  alt={lang === 'zh' ? 'JLPT N1 成绩认定书脱敏缩略图' : 'JLPT N1 認定書マスキング版'}
                  width={1024}
                  height={744}
                  className="w-14 aspect-[1024/744] object-cover rounded-lg border border-zinc-200 shadow-2xs shrink-0 group-hover:scale-[1.03] transition-transform"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-zinc-900 flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
                    <span className="truncate">{lang === 'zh' ? '点击放大 N1 成绩单' : '認定書を拡大表示'}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5 leading-snug">
                    {lang === 'zh' ? '个人姓名及证号已打码' : '氏名・番号のみ非表示'}
                  </div>
                </div>
              </button>
            </div>

            <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium relative">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span>
                {lang === 'zh'
                  ? '脱敏成绩单可查看，原件可在面试时核验'
                  : 'マスク版閲覧可・原本は面談時提示可'}
              </span>
            </div>
          </SpotlightCard>

          {/* 3. BJT J2 */}
          <SpotlightCard className="rounded-3xl p-5 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#4285F4]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                  {lang === 'zh' ? '商务日语考级' : 'ビジネス日本語'}
                </span>
              </div>

              <h3 className="text-base font-bold text-zinc-950 mb-0.5">
                {lang === 'zh' ? 'BJT 商务日语 J2（448 分）' : 'BJT ビジネス日本語 J2（448点）'}
              </h3>
              <div className="text-xs font-semibold text-zinc-700 mb-2">
                {lang === 'zh' ? '对应日常职场听读与敬语辨识' : 'ビジネス場面での一定の伝達能力'}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {lang === 'zh'
                  ? '按 BJT 官方等级说明，J2 表示在有限商务场景下具备一定沟通能力；日常工作中可配合粤语（母语）与普通话推进资料整理、日程确认及书面联络。'
                  : 'BJT公式定義における J2 は「限定されたビジネス場面で一定のコミュニケーション能力」に相当。広東語・中国語と連携し、資料整理・連絡確認業務に対応します。'}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium relative">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4285F4] shrink-0" aria-hidden="true" />
              <span>
                {lang === 'zh'
                  ? '448 分成绩单原件可在面试时核验'
                  : '448点スコアシート原本は面談時提示可'}
              </span>
            </div>
          </SpotlightCard>
        </div>

        {/* Secondary Row: Objective Running Record + Optional Travel/Driving Qualifications at End */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Running & .fit Data Habit */}
          <SpotlightCard className="rounded-3xl p-5 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#34A853]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                  {lang === 'zh' ? '业余习惯 · 数据化记录' : '継続習慣・データ管理'}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-0.5">
                {lang === 'zh' ? '路跑训练与 Garmin .fit 数据解析' : 'ランニング継続＆Garmin .fit 解析習慣'}
              </h3>
              <div className="text-xs font-semibold text-zinc-700 mb-2">
                {lang === 'zh'
                  ? '2026 年累计跑步 1,528+ km · 165 个跑步日 · 5 km 实测 21:04'
                  : '2026年累計 1,528+ km · 165走破日 · 5km公式計測 21:04'}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {lang === 'zh'
                  ? '保持长期规律路跑习惯，业余时间编写 Python 脚本批量解析 Garmin 手表导出的 .fit 原始文件，自行整理月度跑量、配速分布与训练负荷台账。'
                  : '定期的なロードランニングを継続し、趣味で Python スクリプトを作成して Garmin .fit 生データから月間走行距離・ペース・負荷推移を自動集計しています。'}
              </p>
            </div>
          </SpotlightCard>

          {/* Travel & Driving at the end of Credentials */}
          <SpotlightCard className="rounded-3xl p-5 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#EA4335]" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                  {lang === 'zh' ? '差旅补充（有需求时参考）' : '出張・移動補足（必要時）'}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-0.5">
                {lang === 'zh' ? '可配合短期差旅 · 驾照与在持签证' : '短期出張対応可・運転免許および所持査証'}
              </h3>
              <div className="text-xs font-semibold text-zinc-700 mb-2">
                {lang === 'zh'
                  ? '内地 C1 ＋ 香港正式驾照 · 持有日本多次及美国 B1/B2 签证'
                  : '中国本土C1＋香港運転免許 · 日本数次および米国B1/B2査証所持'}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {lang === 'zh'
                  ? '若岗位涉及粤港澳客户拜访或合规短期商务出差，可配合相应差旅与用车安排；实际签证类别、有效期及出入境手续均以口岸规则为准，证件原件可在面试时核验。'
                  : '広東・香港圏の訪問や短期商用出張の要請がある場合に連携可能です。実際の査証種別・有効期限・入国可否は規定に準じ、原本は面談時に確認いただけます。'}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium relative">
              <Lock className="w-3.5 h-3.5 text-zinc-500 shrink-0" aria-hidden="true" />
              <span>
                {lang === 'zh'
                  ? '证件号码与签证页不作公开展示 · 面试时提供核验'
                  : '旅券番号・免許番号は非公開 · 面談時に原本提示可'}
              </span>
            </div>
          </SpotlightCard>
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
                  ? 'JLPT N1 成绩认定书（108 分 · 个人敏感信息已打码）'
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
              alt={
                lang === 'zh'
                  ? 'JLPT N1 官方成绩单脱敏图：总分 108 分（语言知识 30、阅读 41、听力 37）'
                  : 'JLPT N1 公式結果通知書（合計108点）'
              }
              width={1024}
              height={744}
              className="w-full max-h-[min(58dvh,calc(88dvh-12.5rem))] min-h-[140px] object-contain mx-auto block"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#34A853] shrink-0" aria-hidden="true" />
              {lang === 'zh'
                ? '已对准考证号、姓名及证书编号做像素遮盖，原件可在面试时核验。'
                : '受験番号・氏名・証明書番号を遮蔽済み（原本は面談時提示可）。'}
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
