import React, { useEffect, useRef, useState } from 'react'
import { Mail, FileText, CheckCircle2, ClipboardCheck, ArrowRight } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface BusinessSamplesProps {
  lang: 'zh' | 'ja'
}

type SampleTabId = 'email' | 'minutes'

interface ActionItemRow {
  id: string
  taskJa: string
  taskZh: string
  taskJaNote: string
  owner: string
  ownerJa: string
  deadline: string
  statusZh: string
  statusJa: string
  statusClass: string
}

const ACTION_ITEMS: ActionItemRow[] = [
  {
    id: 'AI-01',
    taskJa: '型番 A-204 仕様変更の差分抽出＆日本語修正案作成',
    taskZh: '对照研发变更单逐条更新日文宣传册参数表',
    taskJaNote: '開発変更シートと照合し、日本語パンフレットの仕様表を更新',
    owner: 'Harry L.',
    ownerJa: 'Harry L.',
    deadline: '11/13 12:00 JST',
    statusZh: '进行中',
    statusJa: '対応中',
    statusClass: 'bg-blue-50 text-blue-700',
  },
  {
    id: 'AI-02',
    taskJa: '日本語修正案の最終承認および印刷入稿',
    taskZh: '日方主管复核修订文稿并确认印刷档定稿',
    taskJaNote: '日本側責任者による修正案の最終確認・入稿完了',
    owner: '高桥（日方 PM）',
    ownerJa: '高橋（JP PM）',
    deadline: '11/14 17:00 JST',
    statusZh: '待复核',
    statusJa: '確認待ち',
    statusClass: 'bg-zinc-100 text-zinc-700',
  },
]

export const BusinessSamples: React.FC<BusinessSamplesProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<SampleTabId>('email')
  const emailTabRef = useRef<HTMLButtonElement>(null)
  const minutesTabRef = useRef<HTMLButtonElement>(null)
  const emailPanelRef = useRef<HTMLDivElement>(null)
  const minutesPanelRef = useRef<HTMLDivElement>(null)

  // Support `hidden="until-found"` & `beforematch` so browser Ctrl+F can discover and auto-reveal inactive tab panels
  useEffect(() => {
    const emailPanel = emailPanelRef.current
    const minutesPanel = minutesPanelRef.current
    if (!emailPanel || !minutesPanel) return

    const syncHiddenUntilFound = (el: HTMLDivElement, isActive: boolean) => {
      if (isActive) {
        el.removeAttribute('hidden')
      } else {
        el.setAttribute('hidden', 'until-found')
      }
    }

    syncHiddenUntilFound(emailPanel, activeTab === 'email')
    syncHiddenUntilFound(minutesPanel, activeTab === 'minutes')

    const onBeforeMatchEmail = () => setActiveTab('email')
    const onBeforeMatchMinutes = () => setActiveTab('minutes')

    emailPanel.addEventListener('beforematch', onBeforeMatchEmail)
    minutesPanel.addEventListener('beforematch', onBeforeMatchMinutes)

    return () => {
      emailPanel.removeEventListener('beforematch', onBeforeMatchEmail)
      minutesPanel.removeEventListener('beforematch', onBeforeMatchMinutes)
    }
  }, [activeTab])

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, current: SampleTabId) => {
    const order: SampleTabId[] = ['email', 'minutes']
    const idx = order.indexOf(current)
    let nextTab: SampleTabId | null = null

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextTab = order[(idx + 1) % order.length]
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextTab = order[(idx - 1 + order.length) % order.length]
    } else if (e.key === 'Home') {
      nextTab = order[0]
    } else if (e.key === 'End') {
      nextTab = order[order.length - 1]
    }

    if (nextTab) {
      e.preventDefault()
      setActiveTab(nextTab)
      const targetBtn = nextTab === 'email' ? emailTabRef.current : minutesTabRef.current
      targetBtn?.focus()
    }
  }

  return (
    <section id="samples" className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 text-[11px] font-mono font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              {lang === 'zh' ? '模拟业务样本 · Work Sample' : '模擬実務サンプル · Work Sample'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
              {lang === 'zh' ? '日语实务样本：邮件与会议纪要' : 'ビジネス日本語サンプル：メール・議事整理'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              {lang === 'zh'
                ? '注：以下内容为用于展示日文敬语书写格式、业务核对习惯与双语整理能力的模拟样本，不涉及任何脱敏前实际企业机密。'
                : '※ 以下の2点は日本語敬語・実務連絡形式および議事要約力を示す模擬サンプルであり、実際の企業機密情報は含みません。'}
            </p>
          </div>

          {/* Accessible ARIA Tablist */}
          <div
            role="tablist"
            aria-label={lang === 'zh' ? '日语实务样本切换' : '実務サンプル切替'}
            className="inline-flex p-1 rounded-2xl bg-zinc-100 border border-zinc-200/80 self-start md:self-auto shrink-0"
          >
            <button
              ref={emailTabRef}
              type="button"
              role="tab"
              id="tab-sample-email"
              aria-selected={activeTab === 'email'}
              aria-controls="panel-sample-email"
              tabIndex={activeTab === 'email' ? 0 : -1}
              onClick={() => setActiveTab('email')}
              onKeyDown={(e) => handleTabKeyDown(e, 'email')}
              className={`touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'email'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '模拟日文邮件' : '確認メール例'}</span>
            </button>

            <button
              ref={minutesTabRef}
              type="button"
              role="tab"
              id="tab-sample-minutes"
              aria-selected={activeTab === 'minutes'}
              aria-controls="panel-sample-minutes"
              tabIndex={activeTab === 'minutes' ? 0 : -1}
              onClick={() => setActiveTab('minutes')}
              onKeyDown={(e) => handleTabKeyDown(e, 'minutes')}
              className={`touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'minutes'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{lang === 'zh' ? '会议录音整理表' : '議事録フロー例'}</span>
            </button>
          </div>
        </div>

        {/* Tab Panel 1: Business Email Sample */}
        <div
          ref={emailPanelRef}
          role="tabpanel"
          id="panel-sample-email"
          aria-labelledby="tab-sample-email"
        >
          <SpotlightCard className="rounded-3xl p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-zinc-200/80 relative">
              <div>
                <div className="text-[11px] font-mono text-zinc-500">
                  SAMPLE 01 //{' '}
                  {lang === 'zh'
                    ? '模拟场景（供货方协调）：向日本采购客户确认交期、外箱唛头变更及清关单证所需材质规格'
                    : '想定（供給側担当）：日本顧客へ納期・ケースマーク変更期限・インボイス記載材質の確認'}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5">
                  {lang === 'zh'
                    ? '对日供货跟单确认邮件（明确时区与双方分工）'
                    : '【模擬】出荷納期・ケースマーク・通関書類仕様確認メール'}
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600">
                {lang === 'zh' ? '模拟样本' : '模擬サンプル'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative">
              {/* Japanese Email Body */}
              <div className="lg:col-span-7 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-4 sm:p-5 font-jp text-xs sm:text-[13px] text-zinc-800 leading-relaxed space-y-3">
                <div className="pb-2.5 border-b border-zinc-200/80 space-y-1 text-xs">
                  <div>
                    <span className="font-semibold text-zinc-500 mr-2">件名：</span>
                    <span className="font-bold text-zinc-950">
                      【ご確認のお願い】11月出荷分（PO-2026-114）の納期・印刷・通関仕様について
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-500 mr-2">宛先：</span>
                    <span className="text-zinc-700">〇〇商事株式会社 購買管理部 佐藤様</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p>
                    〇〇商事株式会社 購買管理部
                    <br />
                    佐藤様
                  </p>
                  <p>
                    いつも大変お世話になっております。広州〇〇の李（Harry）でございます。
                    <br />
                    ご注文いただいております 11月出荷予定分（発注番号：PO-2026-114）につきまして、現在出荷準備を進めております。つきましては、下記 3 点をご確認いただきたくご連絡いたしました。
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-zinc-200/80 space-y-2">
                    <div>
                      <strong className="text-zinc-950">1. 出荷予定日（ETD）について</strong>
                      <br />
                      弊社工場より「11月20日（金）出荷可能」との回答がございましたが、貴社ご希望の倉庫搬入スケジュールと相違ございませんでしょうか。
                    </div>
                    <div>
                      <strong className="text-zinc-950">2. 外箱ケースマーク変更の有無（先行締切：11月15日（日）17:00 日本時間）</strong>
                      <br />
                      前回ロットと同様の品番・ロット表記にて準備しております。変更のご希望がない場合はご対応不要です。デザインや表記を変更される場合のみ、印刷手配の都合上、<strong>11月15日（日）17:00（日本時間）</strong>までに変更データをご送付ください。
                    </div>
                    <div>
                      <strong className="text-zinc-950">3. 通関用書類（インボイス・パッキングリスト）の材質確認</strong>
                      <br />
                      通関書類一式は弊社にて作成いたしますが、記載必須となる「商品材質内訳」のみ貴社最終仕様のご確認をお願いいたします。仕様をご確定いただき次第、弊社にて書類を補完し改めて提出いたします。
                    </div>
                  </div>
                  <p>
                    お忙しいところ誠に恐れ入りますが、項目 1・3（および全体スケジュール）につきましては、<strong>11月16日（月）12:00（日本時間）</strong>までにご返信いただけますと幸いです。
                    <br />
                    （※項目 2 の変更ご要望がある場合のみ、上記のとおり 15 日 17:00 までに先行してお知らせください）
                  </p>
                  <p>何卒よろしくお願い申し上げます。</p>
                </div>
              </div>

              {/* Breakdown & Pre-send Verification Notes */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="rounded-2xl bg-white border border-zinc-200/90 p-4 flex-1">
                  <div className="text-xs font-bold text-zinc-950 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4285F4]" aria-hidden="true" />
                    <span>{lang === 'zh' ? '中文要点与职责划分' : 'メール構成・役割分担のポイント'}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-600 leading-relaxed">
                    <li>
                      <strong className="text-zinc-800">
                        {lang === 'zh' ? '区分先行截止与日本时间：' : '優先締切と日本時間（JST）の明記：'}
                      </strong>
                      {lang === 'zh'
                        ? '因外箱印刷排产需要提前锁版，在文中明确区分「变更唛头需于周日 17:00（日本时间）前先行提交（无变更可略）」与「整体回复截至周一 12:00（日本时间）」。'
                        : 'ケースマーク変更のみ印刷都合で 15 日 17:00（JST）を先行締切とし、全体の通常回答期限（16 日 12:00 JST）との優先順を明確化しています。'}
                    </li>
                    <li>
                      <strong className="text-zinc-800">
                        {lang === 'zh' ? '供货方与采购方分工清晰：' : 'サプライヤー側の作成責任の明確化：'}
                      </strong>
                      {lang === 'zh'
                        ? '第 3 点明确发票和装箱单由我方（供货方）制作，只请客户确认「商品材质明细」，避免让客户代填我方单证。'
                        : 'インボイスとパッキングリストの作成は供給側（弊社）で担い、顧客側には「商品材質の最終仕様確認」のみを依頼する構成としています。'}
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-4">
                  <div className="text-xs font-bold text-zinc-950 mb-2 flex items-center gap-1.5">
                    <ClipboardCheck className="w-4 h-4 text-[#34A853]" aria-hidden="true" />
                    <span>{lang === 'zh' ? '发前核对清单（个人习惯）' : '送信前チェックリスト'}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    <li>• {lang === 'zh' ? '所有截止时间均标注具体时区（日本时间 JST）' : '全締切日時に日本時間（JST）および曜日を明記'}</li>
                    <li>• {lang === 'zh' ? '先交项写明前置原因，避免对方漏看先后顺序' : '先行締切がある場合は理由と対象項目を明示'}</li>
                    <li>• {lang === 'zh' ? '双方权责清楚：对方只确认，我方据此补齐单证' : '自社作成書類と相手方確認項目の切り分けを確認'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Tab Panel 2: Meeting Recording -> Minutes -> Bilingual Action Items */}
        <div
          ref={minutesPanelRef}
          role="tabpanel"
          id="panel-sample-minutes"
          aria-labelledby="tab-sample-minutes"
        >
          <SpotlightCard className="rounded-3xl p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-zinc-200/80 relative">
              <div>
                <div className="text-[11px] font-mono text-zinc-500">
                  SAMPLE 02 //{' '}
                  {lang === 'zh'
                    ? '模拟流程：日语会议录音 → TranscribeHub 转写校对 → 中日双语纪要'
                    : '想定：会議音声 → TranscribeHub 文字起こし校正 → 日中行動項目'}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5">
                  {lang === 'zh'
                    ? '日语项目周会：录音校对与 Action Items 跟进表'
                    : '【模擬】定例ミーティング音声の文字起こし校正・Action Items 整理'}
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600">
                {lang === 'zh' ? '模拟样本' : '模擬サンプル'}
              </span>
            </div>

            {/* 3-Step Workflow Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 relative">
              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] font-mono font-semibold text-zinc-500 mb-1">
                  STEP 1 · {lang === 'zh' ? '转写稿片段（已校对专有名词）' : '文字起こし（固有名詞校正済）'}
                </div>
                <p className="text-xs font-jp text-zinc-700 leading-relaxed">
                  「高橋：来週の新製品カタログですが、型番 A-204 の仕様変更がまだ日本語版に反映されていません。李さん、明日の午前中に差分を確認して、翻訳修正案をまとめてもらえますか？」
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <div className="text-[11px] font-mono font-semibold text-zinc-500 mb-1">
                  STEP 2 · {lang === 'zh' ? '中日双语结论提炼' : '日中バイリンガル決定事項'}
                </div>
                <ul className="text-xs text-zinc-700 space-y-1.5 leading-relaxed">
                  <li>
                    <strong>JA：</strong>カタログ型番 A-204 の仕様差分を抽出し、日本語版を更新する。
                  </li>
                  <li>
                    <strong>ZH：</strong>核对 A-204 型号最新规格差异，次日上午前整理日文修订对照稿供复核。
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950 text-zinc-100 flex flex-col justify-between">
                <div className="text-[11px] font-mono text-zinc-400">
                  STEP 3 · {lang === 'zh' ? '工具配合方式' : 'ツール活用ポイント'}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mt-1">
                  {lang === 'zh'
                    ? '先用自研 TranscribeHub 导入专有名词表转写长录音，再人工核对型号、人名与截止时间，整理为统一格式的跟进表分发给中外团队。'
                    : '自作の TranscribeHub に専門用語リストを読み込ませて一次テキスト化し、型番・固有名詞・期限を人手で厳密確認して共有表へ落とし込みます。'}
                </p>
                <a
                  href="#transcribe-hub"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:underline mt-2"
                >
                  <span>{lang === 'zh' ? '查看 TranscribeHub 案例详情' : 'TranscribeHub の詳細を見る'}</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Mobile (< md): Card-per-Task Layout so text never wraps single-char vertically or clips status */}
            <div className="md:hidden space-y-3 relative">
              {ACTION_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-zinc-200/90 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-zinc-500">{item.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.statusClass}`}>
                      {lang === 'zh' ? item.statusZh : item.statusJa}
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-zinc-950 font-jp leading-snug">
                      {item.taskJa}
                    </div>
                    <div className="text-xs text-zinc-600 mt-1 leading-relaxed">
                      {lang === 'zh' ? item.taskZh : item.taskJaNote}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600">
                    <div>
                      <span className="text-zinc-500 mr-1">{lang === 'zh' ? '负责人：' : '担当：'}</span>
                      <span className="font-semibold text-zinc-900">
                        {lang === 'zh' ? item.owner : item.ownerJa}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 mr-1">{lang === 'zh' ? '截止：' : '期限：'}</span>
                      <span className="font-mono font-medium text-zinc-900">{item.deadline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop (>= md): Structured Table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-zinc-200/90 relative">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-semibold">
                    <th className="py-2.5 px-3.5 whitespace-nowrap">#</th>
                    <th className="py-2.5 px-3.5">{lang === 'zh' ? '待办事项（日/中对照）' : 'タスク内容（日中）'}</th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap">{lang === 'zh' ? '负责人' : '担当'}</th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap">{lang === 'zh' ? '截止时间' : '期限'}</th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap">{lang === 'zh' ? '交付状态' : '状態'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70 bg-white text-zinc-700">
                  {ACTION_ITEMS.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2.5 px-3.5 font-mono text-zinc-500">{item.id}</td>
                      <td className="py-2.5 px-3.5">
                        <div className="font-medium text-zinc-900 font-jp">{item.taskJa}</div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          {lang === 'zh' ? item.taskZh : item.taskJaNote}
                        </div>
                      </td>
                      <td className="py-2.5 px-3.5 whitespace-nowrap font-medium">
                        {lang === 'zh' ? item.owner : item.ownerJa}
                      </td>
                      <td className="py-2.5 px-3.5 whitespace-nowrap font-mono">{item.deadline}</td>
                      <td className="py-2.5 px-3.5 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded-full font-medium ${item.statusClass}`}>
                          {lang === 'zh' ? item.statusZh : item.statusJa}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
