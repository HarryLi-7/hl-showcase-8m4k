export interface FeaturedProject {
  id: 'jlpt-trainer' | 'transcribe-hub'
  title: string
  titleJa: string
  subtitle: string
  subtitleJa: string
  badge: string
  badgeJa: string
  liveUrl?: string
  liveLabel?: string
  liveLabelJa?: string
  previewImage: string
  previewWidth: number
  previewHeight: number
  previewAlt: string
  previewAltJa: string
  previewCaption: string
  previewCaptionJa: string
  problem: string
  problemJa: string
  action: string
  actionJa: string
  verification: string
  verificationJa: string
  techStack: string[]
}

export interface OtherWorkCluster {
  title: string
  titleJa: string
  summary: string
  summaryJa: string
  items: { name: string; detail: string; detailJa: string }[]
}

export interface DemoSentence {
  id: number
  tabLabel: string
  tabLabelJa: string
  japanese: string
  furigana: string
  romaji: string
  grammarPoint: string
  grammarPointJa: string
  translation: string
  translationJa: string
  businessContext: string
  businessContextJa: string
}

export const CONTACT_EMAIL = 'liharry2002@outlook.com'

export const DEMO_SENTENCES: DemoSentence[] = [
  {
    id: 1,
    tabLabel: '交期确认与缓冲措辞',
    tabLabelJa: '納期確認・クッション言葉',
    japanese: 'お忙しいところ恐れ入りますが、今週金曜日までに出荷予定日をご教示いただけますでしょうか。',
    furigana: 'お いそがしい ところ おそれいりますが、こんしゅう きんようび までに しゅっか よていび を ごきょうじ いただけます でしょうか。',
    romaji: 'O-isogashii tokoro osoreirimasu ga, konshuu kinyoubi made ni shukka yoteibi o go-kyouji itadakemasu deshou ka.',
    grammarPoint: '恐れ入りますが（缓冲铺垫）＋ ご教示いただけますでしょうか（客气请教）',
    grammarPointJa: 'クッション言葉＋依頼表現（ビジネスメール標準）',
    translation: '百忙之中打扰十分抱歉，不知可否请您在本周五前告知预计出货日期？',
    translationJa: '取引先や社外担当者に負担感を与えず回答期限を伝える依頼フレーズ。',
    businessContext: '对日邮件催办/确认交期高频表达：先用缓冲词再明确截止时间。',
    businessContextJa: '対日メールでの納期確認・資料催促の基本構文。',
  },
  {
    id: 2,
    tabLabel: '会议纪要与核对确认',
    tabLabelJa: '議事メモ・認識合わせ',
    japanese: '先ほどの打ち合わせ内容を整理いたしましたので、認識に相違がないかご確認をお願いいたします。',
    furigana: 'さきほど の うちあわせ ないよう を せいり いたしました ので、にんしき に そうい が ないか ごかくにん を おねがい いたします。',
    romaji: 'Sakihodo no uchiawase naiyou o seiri itashimashita node, ninshiki ni soui ga nai ka go-kakunin o onegai itashimasu.',
    grammarPoint: '〜いたしました（自谦完成动作）＋ 認識に相違がないか（确认无误解）',
    grammarPointJa: '謙譲語「いたす」＋議事共有時の定型確認表現',
    translation: '我已将刚才的会议内容整理完毕，烦请您确认双方理解是否存在出入。',
    translationJa: '会議後のアジェンダ・決定事項共有時に抜け漏れを防ぐ実務フレーズ。',
    businessContext: '会议录音转写校对后发给日本同事/客户确认 Action Items 时使用。',
    businessContextJa: '議事録や行動項目（Action Items）の確定時に活用。',
  },
  {
    id: 3,
    tabLabel: '缺失资料补全沟通',
    tabLabelJa: '不足書類・差し替え連絡',
    japanese: '通関手続きに一部書類が不足しているため、ご確認の上、データにてお送りいただけますと幸いです。',
    furigana: 'つうかん てつづき に いちぶ しょるい が ふそく している ため、ごかくにん の うえ、データ にて おおくり いただけます と さいわい です。',
    romaji: 'Tsuukan tetsuzuki ni ichibu shorui ga fusoku shite iru tame, go-kakunin no ue, deeta nite o-okuri itadakemasu to saiwai desu.',
    grammarPoint: '〜の上（在……之后）＋ 〜ていただけますと幸いです（礼貌委婉请求）',
    grammarPointJa: '前提行動＋柔らかい依頼（〜と幸いです）',
    translation: '由于清关手续尚缺部分资料，烦请您确认后以电子档形式发送给我们。',
    translationJa: '書類不備の連絡でも角を立てず、具体的な提出形式まで案内する表現。',
    businessContext: '单证审核与资料催齐场景：清晰交代原因、前提动作与交付格式。',
    businessContextJa: '書類不備チェック・提出依頼時の実務対応表現。',
  },
]

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'jlpt-trainer',
    title: 'JLPT N1 日语学习工具（Web 应用）',
    titleJa: 'JLPT N1 日本語学習 Web ツール',
    subtitle: '726 条句型 ＋ 220 个词汇条目 · Kuromoji 形态素拆解 · 多端同步与单文件离线练习',
    subtitleJa: '726条の文型＋220語彙・Kuromoji形態素解析・端末間同期＆単一HTMLオフライン学習',
    badge: '精选案例 01 · 已部署可试用',
    badgeJa: '事例 01 · Web公開中',
    liveUrl: 'https://jlpt-trainer.vercel.app/standalone-grammar/index.html',
    liveLabel: '在线试用',
    liveLabelJa: 'デモを開く',
    previewImage: './jlpt-trainer-preview.png',
    previewWidth: 1080,
    previewHeight: 700,
    previewAlt: 'JLPT N1 日语学习工具在线界面截图：展示总题库 726 条、四色词性高亮、读音释义及错题本功能',
    previewAltJa: 'JLPT N1 日本語学習Webツールの画面キャプチャ（全726文型・品詞ハイライト・誤答プール）',
    previewCaption: '线上实时界面截图（明亮模式：含 726 句型索引、词性着色拆解与错题轮转）',
    previewCaptionJa: '公開版画面（726文型検索・品詞ハイライト・誤答復習ステートマシン）',
    problem:
      '备考 N1 与整理日语表达时，常见刷题工具较难同时满足「整句按词性逐词拆解」「多设备进度合并」与「断网单文件便携练习」的需求。',
    problemJa:
      'N1対策や日本語表現の整理において、既存の学習アプリでは「文単位の品詞分解」「複数端末間の進捗統合」「オフライン単一HTML持ち出し」を同時に満たすことが困難でした。',
    action:
      '使用 Next.js、React 19 与 TypeScript 独立构建练习与错题管理系统：整理 726 条句型＋220 个词汇条目用于本人备考；集成 Kuromoji 分词与 Wanakana 注音标出词性；采用 Vercel Blob 与 ETag 做条件写入，检测到同步冲突后尝试合并记录；内置“连续答对 3 次自动移出”与单文件 HTML 导出。',
    actionJa:
      'Next.js＋React 19＋TypeScript で独力開発。個人学習用に726条の文型と220の語彙項目を整備し、Kuromoji による品詞解析とふりがな付与を実装。Vercel Blob と ETag を用いて同期競合の検知時に履歴統合を試みる仕組みと、連続3回正解でのアーカイブ・単一HTML書き出しを構築。',
    verification:
      '配套 Playwright 回归测试覆盖移动端排版、错题流与同步面板，已在真机验证离线可用，并支撑完成个人备考流程（N1 108 分）；现可点击「在线试用」直接体验。',
    verificationJa:
      'Playwright による回帰テスト（モバイル・誤答プール・同期パネル）を通過し、実機でのオフライン動作を確認。自身の N1 受験（108点）まで継続利用し、公開URLから直接試用可能です。',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Kuromoji.js', 'Wanakana', 'Vercel Blob ETag', 'Playwright'],
  },
  {
    id: 'transcribe-hub',
    title: 'TranscribeHub 转录中心（macOS + Android）',
    titleJa: 'TranscribeHub 文字起こしツール（macOS / Android）',
    subtitle: 'SwiftUI 桌面端 ＋ Kotlin Android 端 · ElevenLabs Scribe v2 音频转写与多格式导出',
    subtitleJa: 'SwiftUI デスクトップ ＋ Kotlin Android · ElevenLabs Scribe v2 音声文字起こし',
    badge: '精选案例 02 · 日常会议录音整理工具',
    badgeJa: '事例 02 · 実務向け開発',
    previewImage: './transcribehub-preview-masked.png',
    previewWidth: 887,
    previewHeight: 618,
    previewAlt: 'TranscribeHub macOS v1.2.2 主界面截图：音频来源选择、专业词库开关、自然分段与多格式导出面板（账号信息已脱敏）',
    previewAltJa: 'TranscribeHub macOS v1.2.2 UIキャプチャ（専門用語辞書・自然段落分け・アカウント情報伏せ済）',
    previewCaption: 'macOS v1.2.2 实机界面截图（个人邮箱与密钥尾号已做遮盖处理）',
    previewCaptionJa: 'macOS v1.2.2 実機画面（アカウント情報・キー末尾はマスキング済）',
    problem:
      '整理长达数小时的日语会议录音或海外视频资料时，常用工具容易出现密钥明文存放、网络波动自动重试导致重复计费，以及在线链接抓取失败后任务直接中断的问题。',
    problemJa:
      '長尺の日本語会議録音や海外動画を整理する際、一般的なツールでは API キー露出、通信断のリトライによる重複課金、リンク取得失敗時の中断が課題でした。',
    action:
      '坚持 macOS SwiftUI 与 Android Kotlin 分离实现并接入 ElevenLabs Scribe v2：将 API 密钥写入系统 Keychain / Android Keystore，启动仅读取名称与末四位；设定失败后不自动重发付费请求；桌面端在远端拉流受阻时自动回退本地 yt-dlp 与 FFmpeg 提取音轨；支持专业词库检索与 TXT / Markdown / JSON / CSV / SRT / WebVTT 六格式导出。',
    actionJa:
      'macOS (SwiftUI) と Android (Kotlin) を個別設計。キーは Keychain / Keystore に保護し、失敗時は有償リクエストを自動再送しない制御を実装。取得失敗時はローカルの yt-dlp＋FFmpeg で音声抽出へフォールバックし、専門語辞書検索および6形式（TXT/MD/JSON/CSV/SRT/VTT）書き出しに対応。',
    verification:
      '已完成 macOS v1.2.2 与 Android v1.1.0 打包部署，实际用于个人长音频转写与文本整理工作流；实测密钥锁定、失败拦截与本地音轨回退流程均按预期运作。',
    verificationJa:
      'macOS v1.2.2 および Android v1.1.0 のビルドを完了し、長尺音声の文字起こしとテキスト整理フローに実投入して動作検証済みです。',
    techStack: ['Swift / SwiftUI', 'Kotlin', 'ElevenLabs Scribe v2', 'Keychain / Keystore', 'yt-dlp / FFmpeg'],
  },
]

export const OTHER_WORK_CLUSTERS: OtherWorkCluster[] = [
  {
    title: '片巢 ClipNest（macOS + Android 原生音视频工作台）',
    titleJa: 'ClipNest（macOS・Android メディア処理アプリ）',
    summary: '使用安全参数数组调用本机 yt-dlp 与 ffmpeg/ffprobe，完成下载后校验视频轨完整性。',
    summaryJa: '引数配列経由で yt-dlp / ffmpeg / ffprobe を安全実行し、完了後の映像トラック検証まで実装。',
    items: [
      {
        name: 'macOS Build 8 & Android 客户端',
        detail: '优先兼容 QuickTime H.264/AAC，Android 支持分享提取链接、任务排队与 WakeLock 保持。',
        detailJa: 'QuickTime互換優先、Android共有テキストからのURL抽出・キュー永続化に対応。',
      },
    ],
  },
  {
    title: 'DeepSeek Harness 插件与本地提效脚本',
    titleJa: 'DeepSeek Harness 拡張＆ローカル自動化ツール',
    summary: '围绕个人日常 AI 协作与 macOS 办公环境构建的轻量插件与辅助工具。',
    summaryJa: '日常のAI活用・macOS環境向けに整備した拡張プラグインと補助スクリプト群。',
    items: [
      {
        name: 'dsh-japanese-study / dsh-balance-widget / amap MCP',
        detail: '日语练习专区界面扩展、Host 侧密钥隔离的余额显示条及高德地图 MCP 接入。',
        detailJa: '専用学習UIプラグイン、ホスト側キー隔離の残高ウィジェット、地図MCP連携。',
      },
      {
        name: 'apple-suite / qq-mail / disk-raccoon 等本地 Skills',
        detail: '自动化读写苹果备忘录/日历/提醒事项、IMAP 邮件检索与缓存安全体检脚本。',
        detailJa: 'macOS標準アプリ連携・IMAPメール検索・キャッシュ整理補助スクリプト。',
      },
    ],
  },
  {
    title: 'Chrome MV3 媒体辅助扩展与轻量端侧工具',
    titleJa: 'Chrome MV3 拡張群・Android 補助＆移植版',
    summary: '无外部付费依赖的浏览器扩展及个人自用端侧移植练习（均未公开发布）。',
    summaryJa: '外部API不要のブラウザ拡張群および個人用モバイル環境検証ツール。',
    items: [
      {
        name: 'Chrome Manifest V3 扩展（4 款）',
        detail: 'YouTube Eco PRO 通过拦截 AV1 探测引导启用 VP9/AVC 硬件解码并关闭页面背景高光效果；另含画质锁定及 B 站 / X 链接去追踪清理扩展。',
        detailJa: 'YouTube Eco PRO（AV1遮断によるハードウェア再生誘導・アンビエント無効化）ほか画質固定・追跡パラメータ除去拡張。',
      },
      {
        name: 'JLPT 文法小程序复刻版（未公开发布）& Android 工具',
        detail: '复用 Web 版 726 条句型的微信原生 WXML 便携练习版（约 1.1 MB 题库包，仅个人离线自用）；另有 AITranslate 选区翻译及设备/TV 硬件检测 APK。',
        detailJa: 'Web版726文型を流用したWeChatミニプログラム移植版（個人用・未公開）および翻訳/端末診断APK。',
      },
    ],
  },
]
