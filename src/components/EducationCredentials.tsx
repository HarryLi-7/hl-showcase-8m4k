import React from 'react'
import { GraduationCap, Award, ShieldCheck, Globe, Lock } from 'lucide-react'
import { SpotlightCard } from './SpotlightCard'

interface EducationCredentialsProps {
  lang: 'zh' | 'ja'
}

export const EducationCredentials: React.FC<EducationCredentialsProps> = ({ lang }) => {
  const credentials = [
    {
      title: lang === 'zh' ? '综合类本科院校（已脱敏）' : '総合大学 学士課程修了（非公開）',
      subtitle: lang === 'zh' ? '本科学历（学士学位）' : '学士（大学卒業）',
      tag: lang === 'zh' ? '高等教育学历' : '高等教育',
      icon: <GraduationCap className="w-5 h-5 text-[#4285F4]" />,
      detail:
        lang === 'zh'
          ? '具体院校名称、专业及毕业时间已在公开页隐藏，将在正式简历附件或面试沟通时完整披露。'
          : '大学名・専攻等の詳細はプライバシー保護のため公開ページでは非掲載。面談時に正規書類をご案内いたします。'
    },
    {
      title: lang === 'zh' ? 'JLPT 高阶语言认证' : 'JLPT 上級日本語能力認定',
      subtitle: lang === 'zh' ? '成绩单及证书号已隐藏' : '証明書番号・スコア詳細は非公開',
      tag: lang === 'zh' ? '官方语言资质' : '公的語学認定',
      icon: <Award className="w-5 h-5 text-[#FBBC05]" />,
      detail:
        lang === 'zh'
          ? '具备高阶日语阅读与听力应用水准，个人准考证号、证书编号及原件扫描件不面向公开网页展示。'
          : '高度な日本語読解・聴解力を保持。受験番号・証明書番号・スキャン画像は公開Web上では非表示としております。'
    },
    {
      title: lang === 'zh' ? 'BJT 商务日语能力评估' : 'BJT ビジネス日本語能力評価',
      subtitle: lang === 'zh' ? '涉外职场沟通实践标准' : '日系実務コミュニケーション水準',
      tag: lang === 'zh' ? '商务即战力' : 'ビジネス実践力',
      icon: <Award className="w-5 h-5 text-[#4285F4]" />,
      detail:
        lang === 'zh'
          ? '胜任日企日常办公、敬语邮件往来、会议记录与跨文化商务对接。'
          : '日系企業の社内調整、ビジネスメール対応、議事・折衝サポートを円滑に遂行可能です。'
    },
    {
      title: lang === 'zh' ? '跨区域合规驾驶资质' : '正規運転免許資格',
      subtitle: lang === 'zh' ? '支持左舵及多区域出行' : '複数地域での運転対応可',
      tag: lang === 'zh' ? '机动驾驶资质' : '運転・移動資格',
      icon: <ShieldCheck className="w-5 h-5 text-[#34A853]" />,
      detail:
        lang === 'zh'
          ? '具备多年安全驾驶经验与商务接待配合能力，具体准驾类型与证照仅作私下核验。'
          : '安全な運転経験を有し、ビジネス送迎・移動を伴う業務にも柔軟に対応可能です。'
    },
    {
      title: lang === 'zh' ? '已持有日美长期出行资质' : '日米長期ビザ保有・海外出張即応',
      subtitle: lang === 'zh' ? '支持短期商务出差（不含具体证件信息）' : '短期商用対応・証書情報非公開',
      tag: lang === 'zh' ? '日美差旅就绪' : '海外渡航即応',
      icon: <Globe className="w-5 h-5 text-[#EA4335]" />,
      detail:
        lang === 'zh'
          ? '已持有日美长期多次出行签证，可直接用于合规短期商务考察、会议及客户拜访，跨国出差零办签等待期；具体证件细节及编号仅作面试私下核验。'
          : '日本・米国向けの長期数次査証を保有しており、短期商用出張・商談・会議等へ待機期間なく即座に対応可能です（具体的な証書・番号は面談時にのみ提示）。'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            CREDENTIALS // {lang === 'zh' ? '资质概览（隐私保护版）' : 'PRIVACY MODE'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950" style={{ letterSpacing: '-0.025em' }}>
            {lang === 'zh' ? '学历背景、语言水平与业务资质说明' : '学歴・語学レベル・実務資格の概要'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            {lang === 'zh'
              ? '为防范公开网络信息爬取，本站已撤下个人证书原图、证件号与具体毕业院校全称；正式招聘流程中均可按需核验原件。'
              : '個人情報保護のため、証明書画像・登録番号・大学名等は公開ページから除外しています。正式選考時に原本確認が可能です。'}
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
              <SpotlightCard key={idx} className={`rounded-3xl p-5 flex flex-col justify-between ${spanClass}`}>
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
              </div>

              <div className="pt-3 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium relative">
                <Lock className="w-3.5 h-3.5 text-[#34A853]" />
                <span>{lang === 'zh' ? '面试阶段提供核验' : '面談時に原本提示可'}</span>
              </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
