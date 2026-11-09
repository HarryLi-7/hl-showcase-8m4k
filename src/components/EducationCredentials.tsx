import React from 'react'
import { GraduationCap, Award, ShieldCheck, Globe, Lock } from 'lucide-react'

interface EducationCredentialsProps {
  lang: 'zh' | 'ja'
}

export const EducationCredentials: React.FC<EducationCredentialsProps> = ({ lang }) => {
  const credentials = [
    {
      title: lang === 'zh' ? '综合类本科院校（已脱敏）' : '総合大学 学士課程修了（非公開）',
      subtitle: lang === 'zh' ? '本科学历（学士学位）' : '学士（大学卒業）',
      tag: lang === 'zh' ? '高等教育学历' : '高等教育',
      icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
      detail:
        lang === 'zh'
          ? '具体院校名称、专业及毕业时间已在公开页隐藏，将在正式简历附件或面试沟通时完整披露。'
          : '大学名・専攻等の詳細はプライバシー保護のため公開ページでは非掲載。面談時に正規書類をご案内いたします。'
    },
    {
      title: lang === 'zh' ? 'JLPT 高阶语言认证' : 'JLPT 上級日本語能力認定',
      subtitle: lang === 'zh' ? '成绩单及证书号已隐藏' : '証明書番号・スコア詳細は非公開',
      tag: lang === 'zh' ? '官方语言资质' : '公的語学認定',
      icon: <Award className="w-5 h-5 text-amber-500" />,
      detail:
        lang === 'zh'
          ? '具备高阶日语阅读与听力应用水准，个人准考证号、证书编号及原件扫描件不面向公开网页展示。'
          : '高度な日本語読解・聴解力を保持。受験番号・証明書番号・スキャン画像は公開Web上では非表示としております。'
    },
    {
      title: lang === 'zh' ? 'BJT 商务日语能力评估' : 'BJT ビジネス日本語能力評価',
      subtitle: lang === 'zh' ? '涉外职场沟通实践标准' : '日系実務コミュニケーション水準',
      tag: lang === 'zh' ? '商务即战力' : 'ビジネス実践力',
      icon: <Award className="w-5 h-5 text-blue-500" />,
      detail:
        lang === 'zh'
          ? '胜任日企日常办公、敬语邮件往来、会议记录与跨文化商务对接。'
          : '日系企業の社内調整、ビジネスメール対応、議事・折衝サポートを円滑に遂行可能です。'
    },
    {
      title: lang === 'zh' ? '跨区域合规驾驶资质' : '正規運転免許資格',
      subtitle: lang === 'zh' ? '支持左舵及多区域出行' : '複数地域での運転対応可',
      tag: lang === 'zh' ? '机动驾驶资质' : '運転・移動資格',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      detail:
        lang === 'zh'
          ? '具备多年安全驾驶经验与商务接待配合能力，具体准驾类型与证照仅作私下核验。'
          : '安全な運転経験を有し、ビジネス送迎・移動を伴う業務にも柔軟に対応可能です。'
    },
    {
      title: lang === 'zh' ? '跨境商务差旅就绪' : '海外渡航・出張対応基盤',
      subtitle: lang === 'zh' ? '具体签证详情私下提供' : '査証詳細は面談時確認',
      tag: lang === 'zh' ? '涉外差旅适配' : '海外渡航即応',
      icon: <Globe className="w-5 h-5 text-cyan-500" />,
      detail:
        lang === 'zh'
          ? '可配合企业进行跨城及赴日等跨境商务支持与出差协调。'
          : '国内出張および日本現地への業務支援出張に迅速に対応できる体制を整えております。'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            {lang === 'zh' ? '资质概览（隐私保护版）' : 'CREDENTIALS (PRIVACY MODE)'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {lang === 'zh' ? '学历背景、语言水平与业务资质说明' : '学歴・語学レベル・実務資格の概要'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {lang === 'zh'
              ? '为防范公开网络信息爬取，本站已撤下个人证书原图、证件号与具体毕业院校全称；正式招聘流程中均可按需核验原件。'
              : '個人情報保護のため、証明書画像・登録番号・大学名等は公開ページから除外しています。正式選考時に原本確認が可能です。'}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((c, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 glow-card border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-50 mb-0.5">
                  {c.title}
                </h3>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {c.subtitle}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {c.detail}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{lang === 'zh' ? '面试阶段提供核验' : '面談時に原本提示可'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
