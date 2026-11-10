export interface ProjectItem {
  id: string
  tier: 'flagship' | 'standard' | 'replica'
  title: string
  titleJa: string
  subtitle: string
  subtitleJa: string
  tag: string
  statusLabel: string
  statusLabelJa: string
  category: 'web' | 'native' | 'ai' | 'miniprogram'
  relationNote?: string
  relationNoteJa?: string
  problem: string
  problemJa: string
  solution: string
  solutionJa: string
  highlights: string[]
  highlightsJa: string[]
  techStack: string[]
  metrics: string
  metricsJa: string
}

export interface ArchiveCluster {
  title: string
  titleJa: string
  items: { name: string; detail: string; detailJa: string }[]
}

export interface DemoSentence {
  id: number
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

export const DEMO_SENTENCES: DemoSentence[] = [
  {
    id: 1,
    japanese: "これからは、実践的なAI技術と日本語力を活かせる仕事に挑戦したいと考えております。",
    furigana: "これからは、じっせんてきなAIぎじゅつとにほんごりょくをいかせるしごとにちょうせんしたいとかんがえております。",
    romaji: "Korekara wa, jissentekina AI gijutsu to nihongoryoku o ikaseru shigoto ni chousen shitai to kangaete orimasu.",
    grammarPoint: "〜を活かせる（可能形）＋〜と考えております（謙譲語）",
    grammarPointJa: "能力を活かす願望＋面接における謙譲・丁寧表現",
    translation: "从今以后，我希望能挑战能够充分发挥实用 AI 技术与日语能力的工作。",
    translationJa: "将来のキャリア展望を前向きかつ誠実に伝える、王道の志望動機フレーズ。",
    businessContext: "面试自我 PR / 志望动机经典表述：将技能优势与企业需求精准对接。",
    businessContextJa: "スキルを企業貢献へと直結させる自己PRの標準フレーズ。"
  },
  {
    id: 2,
    japanese: "業務フローのボトルネックを特定した上で、最適な自動化スクリプトを迅速に実装いたします。",
    furigana: "ぎょうむフローのボトルネックをとくていしたうえで、さいてきなじどうかスクリプトをじんそくにじっそういたします。",
    romaji: "Gyoumu furou no botorunekku o tokutei shita ue de, saitekina jidouka sukuriputo o jinsoku ni jissou itashimasu.",
    grammarPoint: "〜た上で（〜したあとで）＋ いたす（謙譲語）",
    grammarPointJa: "前提条件の完了を示すビジネス構文＋自発的な実行意志",
    translation: "在准确查明业务流程瓶颈之后，我将迅速实现最契合的自动化脚本方案。",
    translationJa: "課題分析から開発・実装までを一貫して自律遂行できる技術力を示す表現。",
    businessContext: "业务改善与工程推进场景：体现工科严谨与高效行动力。",
    businessContextJa: "課題抽出能力と業務改善スピードをアピール。"
  },
  {
    id: 3,
    japanese: "日系企業の商習慣と実務マナーを尊重し、円滑な社内外コミュニケーションと業務推進に努めます。",
    furigana: "にっけいきぎょうのしょうしゅうかんとじつむマナーをそんちょうし、えんかつなしゃないがいコミュニケーションとぎょうむすいしんにつとめます。",
    romaji: "Nikkei kigyou no shoushuukan to jitsumu manaa o sonchou shi, enkatsuna shanai-gai komyunikeeshon to gyoumu suishin ni tsutomemasu.",
    grammarPoint: "〜を尊重し（並列・敬意）＋〜に努める（真摯な職務姿勢）",
    grammarPointJa: "商習慣への理解＋誠実な職務遂行姿勢",
    translation: "在充分尊重日企商业习惯与实务礼仪的基础上，致力于推进顺畅的对内对外沟通与业务落地。",
    translationJa: "異文化理解とビジネスマナーを兼ね備えた、誠実な実務推進力を伝える自己PR。",
    businessContext: "对日商务沟通与团队协作：展现成熟的职场礼仪与对日业务理解力。",
    businessContextJa: "日系実務への適応力と誠実な協調性を印象付けるフレーズ。"
  }
]

export const PROJECTS: ProjectItem[] = [
  {
    id: "jlpt-trainer",
    tier: "flagship",
    title: "JLPT N1 日语学习全栈 Web 系统（核心主项目）",
    titleJa: "JLPT N1 日本語学習フルスタック Web システム（主力プロジェクト）",
    subtitle: "726 条 N1 句型 + 220 条核心词双站体系 · BJT / 敬语专项扩展 · Kuromoji 拆解 · Vercel Blob ETag 云端并发同步",
    subtitleJa: "726題文法＋220題語彙の2サイト構成・BJT/敬語強化・Kuromoji形態素解析・Vercel Blob ETag 同期",
    tag: "Flagship · Full-Stack Web",
    statusLabel: "核心主项目 · 主力交付",
    statusLabelJa: "主力プロジェクト · 運用中",
    category: "web",
    problem: "备考高阶日语 JLPT N1 及商务 BJT 时，传统教材与孤立题库难以同时解决「形态素级词性拆解、多设备无冲突进度同步、断网单文件便携训练」三大痛点，跨端刷题记录极易互相覆盖。",
    problemJa: "N1やBJTの高度な学習において、従来の教材やアプリでは「形態素単位の構文解析」「複数デバイス間の競合しない同期」「オフライン単一HTML持ち出し」を同時に満たすことが困難でした。",
    solution: "作为个人最核心主打项目，采用 Next.js + React 19 + TypeScript 独立构建文法/词汇全栈 Web 应用：集成 Kuromoji 形态素分析与 Wanakana 注音引擎实时标注词性；基于 Vercel Blob 实现哈希鉴权与 ETag 条件覆盖并发同步（自动重放合并多端记录），内置“错题连对 3 次自动移出”状态机与单文件离线 HTML 打包能力。",
    solutionJa: "主力プロジェクトとして Next.js＋React 19＋TypeScript で文法・語彙Webシステムを独力開発。Kuromoji形態素解析＆Wanakanaによるリアルタイムふりがな展開、Vercel Blob＋ETag楽観的ロックによる自動リプレイ同期、連続3回正解アーカイブ機構、単一HTMLオフライン書き出しまで一貫実装。",
    highlights: [
      "726 条 N1 句型 + 220 条高频词库全量审计（含 BJT 商务敬语沉淀），内嵌 Kuromoji 分词与四色词性高亮",
      "Vercel Blob ETag 并发锁与状态重放合并，多端做题进度与学习时长零冲突同步",
      "配套 Playwright 全链路回归校验（移动端 / 错题池 / 同步面板）与单文件离线导出"
    ],
    highlightsJa: [
      "726題文法＋220題語彙（BJT・敬語特訓含む）の全量監査DB、Kuromoji形態素解析＆品詞別ハイライト",
      "Vercel Blob ETag 楽観的ロック＆履歴リプレイ統合で複数端末間の進捗競合を解消",
      "Playwright自動回帰テスト（モバイル・誤答フロー・同期パネル）＆単一HTML出力対応"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Kuromoji.js", "Wanakana", "Vercel Blob ETag", "Playwright"],
    metrics: "个人核心主力 Web 应用（946 题库全量校验运行），直接支撑本人以 108 分通过 JLPT N1",
    metricsJa: "最主力Webプロダクト（全946問・自動検証済）、JLPT N1 (108点) 合格を直接支えた実用基盤"
  },
  {
    id: "clipnest",
    tier: "standard",
    title: "片巢 ClipNest（macOS + Android 双端原生）",
    titleJa: "ClipNest（macOS・Android 両OSネイティブ）",
    subtitle: "Swift / SwiftUI / AppKit 原生桌面端 + Jetpack Compose Android 端音视频处理工作台",
    subtitleJa: "Swift / SwiftUI / AppKit ＋ Jetpack Compose 製マルチメディア処理クライアント",
    tag: "macOS & Android Native",
    statusLabel: "Build 8 · 双端验证",
    statusLabelJa: "Build 8 · 両OS実機検証",
    category: "native",
    problem: "常见网页与跨平台壳工具下载音视频时格式兼容差、超时卡死无反馈，且经常出现仅下载音轨却误判成功、遗留碎片临时文件、或参数拼接带来安全隐患的问题。",
    problemJa: "汎用ツールはフォーマット互換性やタイムアウト制御に乏しく、映像欠落の誤検知、一時ファイルの残留、シェル文字列結合によるセキュリティ上の課題を抱えていました。",
    solution: "摒弃 Electron/Web 套壳，独立研发 macOS 原生 SwiftUI/AppKit 与 Android Jetpack Compose 双端应用：以安全参数数组调用本机 yt-dlp 与 ffmpeg/ffprobe，内置 QuickTime H.264/AAC 兼容优先、45s 解析超时控制、多档格式自动降级及独立任务临时目录生命周期管理。",
    solutionJa: "Electron等を使わず SwiftUI/AppKit と Jetpack Compose で両OSネイティブ開発。引数配列のみで yt-dlp と ffmpeg/ffprobe を安全実行し、QuickTime互換優先、45秒タイムアウト、自動フォーマット降格、タスク別一時ディレクトリ管理まで実装。",
    highlights: [
      "完成后由 ffprobe 强制校验视频轨，杜绝“仅有声音无画面”的假成功任务",
      "Android 端支持分享口令智能提取链接、队列持久化断点恢复及 WakeLock 前台保活",
      "严格安全审计：Cookie 仅用于本地合法鉴权且不落盘明文，零 shell 拼接风险"
    ],
    highlightsJa: [
      "完了後の ffprobe 映像トラック検証により、音声のみの誤判定を完全排除",
      "Android版は共有テキストからのURL自動抽出・キュー永続化・WakeLock維持を実装",
      "セキュリティ監査済み：Cookie平文非保存・シェルインジェクション完全防止"
    ],
    techStack: ["Swift / SwiftUI", "AppKit", "Kotlin", "Jetpack Compose", "yt-dlp", "ffmpeg / ffprobe"],
    metrics: "macOS v0.1.0 Build 8 + Android 版双端打包落地，附完整真机测试与安全审计记录",
    metricsJa: "macOS Build 8＋Android実機ビルド完了（テスト・セキュリティ監査文書完備）"
  },
  {
    id: "transcribe-hub",
    tier: "standard",
    title: "TranscribeHub 转录中心（macOS + Android）",
    titleJa: "TranscribeHub（macOS・Android 音声文字起こし）",
    subtitle: "SwiftUI 原生桌面端 + 真机优化 Kotlin 端 · ElevenLabs Scribe v2 高精度转写",
    subtitleJa: "SwiftUI デスクトップ ＋ 実機最適化 Kotlin Android · ElevenLabs Scribe v2 対応",
    tag: "Native AI Pipeline",
    statusLabel: "v1.1.0 · 防误扣费设计",
    statusLabelJa: "v1.1.0 · 二重課金防止設計",
    category: "native",
    problem: "处理数小时长音频与海外音视频链接时，普通工具常存在 API Key 明文风险、网络抖动自动重试导致重复计费，以及在线抓取 YouTube 失败后流程直接中断的痛点。",
    problemJa: "長尺音声や海外動画の文字起こしでは、APIキー漏洩リスク、通信断時の二重課金リトライ、YouTube取得失敗時の中断が実運用上の障壁でした。",
    solution: "坚持 macOS 与 Android 代码隔离开发，接入 ElevenLabs Scribe v2 引擎：密钥分别写入 macOS Keychain 与 Android Keystore 硬件加密区，支持多命名密钥隔离与“失败不自动重发收费 POST”；当远端抓取受阻时，macOS 端自动启用 yt-dlp + Deno/Node + FFmpeg 8 路分片本机提取音轨回退。",
    solutionJa: "macOSとAndroidを分離設計し ElevenLabs Scribe v2 を統合。キーは Keychain / Keystore で暗号化保護し、有償POSTの自動再試行を禁止。取得失敗時は yt-dlp＋Deno/Node＋FFmpeg によるローカル音声抽出フォールバックへ移行。",
    highlights: [
      "启动仅读取密钥名称与末四位，避免误弹钥匙串授权窗；任务期间锁定密钥防止切号错账",
      "内置专业词库检索与 TXT / Markdown / JSON / CSV / SRT / WebVTT 六格式导出",
      "macOS 端完成状态横幅 8 秒自动清理且不含正文隐私，Android v1.1.0 专为旗舰真机调优"
    ],
    highlightsJa: [
      "起動時は末尾4桁のみ参照し誤プロンプトを防止、処理中のキー切替ロック機構を搭載",
      "専門用語辞書検索および TXT / Markdown / JSON / CSV / SRT / WebVTT の6形式出力に対応",
      "プライバシー配慮通知（本文非表示・8秒自動消去）＆ Android v1.1.0 実機ビルド完成"
    ],
    techStack: ["Swift / SwiftUI", "Kotlin", "ElevenLabs Scribe v2", "Keychain / Keystore", "yt-dlp / FFmpeg", "Deno"],
    metrics: "双端高频投入海外资料与长音频结构化整理实战，零密钥泄露与零重复扣费事故",
    metricsJa: "両OSで高頻度の長尺音声テキスト化に実戦投入、キー保護・課金安全性を徹底担保"
  },
  {
    id: "dsh-agent-ecosystem",
    tier: "standard",
    title: "DeepSeek Harness 插件与 Codex 工程基建",
    titleJa: "DeepSeek Harness プラグイン＆Codex自動化基盤",
    subtitle: "DSH Cordis 客户端插件集 · Codex 回合完成声音提醒 · 自研 Agent Skills 生态",
    subtitleJa: "DSH Cordis クライアント拡張群 · Codex完了通知フック · 自作Agent Skills基盤",
    tag: "AI Agent Tooling",
    statusLabel: "日常提效 · 多模块沉淀",
    statusLabelJa: "日常実戦 · ツール群整備",
    category: "ai",
    problem: "日常跨 Codex、Antigravity 与 DeepSeek Harness 多工具高频协作时，缺少定制化语言学习界面、实时 API 余额感知，且长任务运行完毕缺乏温和的本地无扰提醒。",
    problemJa: "Codex・Antigravity・DeepSeek Harness 間の高頻度な併用において、専用学習UIや残高把握、長時間タスク完了時の非割り込み通知基盤が不足していました。",
    solution: "基于 DSH Cordis 插件体系自研「日语学习专区（和纸视觉 + 专属教学预设）」、输入栏实时余额芯片与高德官方 MCP 接入；同时构建 Codex 完成提示钩子（codex_done.py 文件锁防抖）及覆盖 macOS 苹果套件、QQ 邮箱与缓存清理的可复用本地 Skills。",
    solutionJa: "DSH Cordis 拡張として「日本語学習ゾーン（専用プリセット・和紙UI）」、入力欄残高ウィジェット、高徳地図MCPを自作。さらにファイルロック付き Codex 完了通知スクリプトや、macOS/メール/キャッシュ診断 Skills を体系化。",
    highlights: [
      "dsh-balance-widget：API Key 严格滞留 Host 侧，前端零落盘实现每分钟刷新与低余额橙红告警",
      "dsh-japanese-study：注入 DSH 布局与会话控制器，复用原生模型链路保留完整学习摘要",
      "沉淀 codex_done.py、apple-suite、qq-mail、disk-raccoon 等多套跨 Agent 本地自动化工具"
    ],
    highlightsJa: [
      "dsh-balance-widget：APIキーをホスト側に完全隔離し、残高不足をオレンジ/赤で即時警告",
      "dsh-japanese-study：DSHの既存モデル基盤にシームレス統合した専用日本語学習プラグイン",
      "codex_done.py・apple-suite・qq-mail・disk-raccoon 等の自動化スキル群を資産化"
    ],
    techStack: ["DeepSeek Harness", "Cordis Plugin", "MCP", "Python", "Codex Hooks", "Agent Skills"],
    metrics: "打通个人跨 Agent 研发流与合规插件规范，让高频 AI 辅助与环境维护一键复用",
    metricsJa: "日々のAI開発フローを統合標準化し、プラグイン開発・環境保守を高再現性で運用"
  },
  {
    id: "android-browser-suite",
    tier: "standard",
    title: "Chrome MV3 媒体扩展 & Android 实用工具矩阵",
    titleJa: "Chrome MV3拡張群 ＆ Android実用ツール群",
    subtitle: "Mac 芯片级硬解节能扩展 · AITranslate 设计系统 · 设备及 Android TV 自检 APK",
    subtitleJa: "Mac向けハードウェア再生省電力拡張 · AITranslate設計基盤 · 端末/TV診断アプリ",
    tag: "Browser MV3 & Mobile",
    statusLabel: "零付费依赖 · 原生效率",
    statusLabelJa: "外部API不要 · 軽量高速",
    category: "ai",
    problem: "MacBook 在 Chrome 播放高分辨率视频时易受 AV1 软解与氛围灯高斯模糊拖累导致高功耗发热；移动端则缺少克制无打扰的文本选区翻译与设备/电视遥控硬件体检工具。",
    problemJa: "MacでのAV1ソフトウェアデコードによる発熱・電池消耗や、モバイルテキスト選択直訳・Android TVリモコン診断に使える軽量ネイティブツールの不足を解消。",
    solution: "纯原生 Chrome Manifest V3 开发 4 款轻量扩展（核心 YouTube Eco PRO 拦截 AV1 探测，引导走 Apple VideoToolbox VP9/AVC 硬解并关闭微光渲染）；在 Android 侧落地遵循完整 DESIGN_SYSTEM.md 的 AITranslate、模块化 RedmiToolbox 与面向大屏 Leanback 遥控器的 TV 自检工具。",
    solutionJa: "外部依存ゼロの Chrome MV3 拡張4本を開発（YouTube Eco PRO はAV1を遮断しAppleハードウェア再生とアンビエント無効化で省電力化）。Android側でも DESIGN_SYSTEM.md 準拠の AITranslate、RedmiToolbox、TV診断APKを構築。",
    highlights: [
      "YouTube Eco PRO：强制启用芯片级 VP9/AVC 硬解并卸载氛围灯 GPU 负载，显著降低播放功耗",
      "同系列 X / YouTube / B 站 MV3 扩展：最高画质 HLS 锁定、去推广与纯净防追踪短链分享",
      "Android 工具矩阵：支持系统文本选中直译、电池/存储/WorkManager 诊断及电视按键/AudioTrack 自检"
    ],
    highlightsJa: [
      "YouTube Eco PRO：Macハードウェアデコード強制＆GPU負荷削減で発熱と消費電力を抑制",
      "X / YouTube / Bilibili 向けMV3拡張：最高HLS画質固定・追跡パラメータ除去・クリーン共有",
      "Android実機ツール：テキスト選択翻訳・ストレージ/バッテリー診断・TVリモコン/AudioTrack検査"
    ],
    techStack: ["Chrome Manifest V3", "MediaSource Hook", "Kotlin", "Jetpack Compose", "Java Android TV", "Design System"],
    metrics: "覆盖桌面浏览器能效调优与手机/电视真机工程验证的纯本地轻量工具集群",
    metricsJa: "ブラウザ省電力化からスマホ/TV実機検証までを網羅した純ローカル軽量ツール群"
  },
  {
    id: "jlpt-miniprogram",
    tier: "replica",
    title: "JLPT N1 文法随身练（同源小程序复刻版 · 未公开发布）",
    titleJa: "JLPT N1 文法マスター（Web版移植ミニプログラム · 未公開）",
    subtitle: "复刻主打日语 Web 项目逻辑的轻量移动端延伸版 · 1.1MB 离线包 · 仅供个人本地自用（未上架）",
    subtitleJa: "主力Webシステムのロジックを再現した軽量モバイル複製版・1.1MBオフライン（一般未公開）",
    tag: "Mini Program Replica",
    statusLabel: "同源复刻 · 未公开发布",
    statusLabelJa: "Web版複製 · 未公開",
    category: "miniprogram",
    relationNote: "本项目为 #1 主打项目「JLPT N1 日语学习全栈 Web 系统」面向微信生态的 1:1 复刻移植版，仅作个人离线复习与跨端技术验证，未在微信平台公开发布。",
    relationNoteJa: "※ 本ミニプログラムは主力 #1「JLPT N1 Webシステム」の機能・データ構造をWeChat環境向けに再現した移植版です（一般公開なし・個人利用限定）。",
    problem: "为主力日语 Web 应用补充微信内置随手打开、纯离线免流量秒开的使用场景，需要将 Web 端的核心语法题库与状态机算法轻量化迁移至微信小程序。",
    problemJa: "主力Webプロジェクトの補助として、通信環境を問わずWeChat内から即起動できるようコアデータと復習ロジックを移植検証。",
    solution: "直接复用主 Web 端的 726 道语法题库与“连续答对 3 次自动移出”状态机，采用微信原生 WXML / WXSS / JS 1:1 复刻客户端并深度压缩至 1.1MB（整包 1.2MB），结合原生音频 API 供个人手机离线刷题使用；未提交微信公众平台审核或公开发布。",
    solutionJa: "主力Web版の726題DBと「3回連続正解でアーカイブ」機構をベースに、WeChatネイティブ（WXML/WXSS/JS）で再現・1.1MBへ超圧縮。個人のオフライン学習と技術検証用として構築（ストア公開なし）。",
    highlights: [
      "同源复刻主 Web 端题库结构、四色词性高亮与错题轮转状态机",
      "726 题压缩至 1.1MB / 整包 1.2MB，弱网与离线场景 0 秒冷启动",
      "严格定位为个人本地自用复制版（未向微信平台公开发布）"
    ],
    highlightsJa: [
      "主力Web版のDB構造・品詞4色解析・定着ステートマシンを同源再現",
      "726題を1.1MBに超圧縮し、オフライン環境でも遅延ゼロで起動",
      "技術移植検証および個人用クローズド環境として運用（一般未公開）"
    ],
    techStack: ["WeChat WXML/WXSS", "JavaScript", "WeChat Audio API", "Offline Compression"],
    metrics: "主 Web 端核心逻辑的小程序轻量复刻（未公开发布，本地零网络延展验证）",
    metricsJa: "主力Webシステムの軽量ミニプログラム複製版（一般未公開・個人オフライン運用）"
  }
]

export const ARCHIVE_CLUSTERS: ArchiveCluster[] = [
  {
    title: "DeepSeek Harness & Codex 工具链",
    titleJa: "DeepSeek Harness ＆ Codex 基盤",
    items: [
      {
        name: "dsh-japanese-study",
        detail: "Cordis 侧边栏日语专区（和纸纹样 / 教学预设）",
        detailJa: "Cordis サイドバー日本語学習プラグイン"
      },
      {
        name: "dsh-balance-widget / amap MCP",
        detail: "Host 侧鉴权输入栏余额芯片与高德官方 MCP",
        detailJa: "ホスト側認証の残高表示＆地図MCP連携"
      },
      {
        name: "codex_done.py + 自定义 Skills",
        detail: "文件锁防抖提醒、apple-suite / qq-mail / disk-raccoon",
        detailJa: "完了音声フック＆apple-suite/メール/診断Skills"
      }
    ]
  },
  {
    title: "Chrome MV3 效率扩展（4 款）",
    titleJa: "Chrome MV3 拡張スイート（4本）",
    items: [
      {
        name: "YouTube Eco PRO",
        detail: "屏蔽 AV1 强制 Mac VideoToolbox VP9/AVC 硬解",
        detailJa: "AV1遮断でMacハードウェアデコード強制省電力"
      },
      {
        name: "YouTube Video Best Quality 1.2",
        detail: "10 档画质锁定、倍速记忆与 Shorts 净化",
        detailJa: "画質ロック・再生速度記憶・Shorts非表示"
      },
      {
        name: "X Video Best Quality & Bilibili Clean PRO",
        detail: "HLS 最高码率强制与 B 站去追踪短链 / 宽屏",
        detailJa: "最高HLS画質固定・追跡パラメータ除去・ワイド標準"
      }
    ]
  },
  {
    title: "Android 真机与测试工程",
    titleJa: "Android 実機アプリ＆テスト",
    items: [
      {
        name: "AITranslate（Kotlin / Compose）",
        detail: "规范化 Light/Dark 设计系统与系统文本选区直译",
        detailJa: "統一デザインシステム＆テキスト選択即翻訳"
      },
      {
        name: "RedmiToolbox",
        detail: "电池、存储、网络、通知与 WorkManager 模块化诊断",
        detailJa: "バッテリー・ストレージ・通信・WorkManager診断"
      },
      {
        name: "电视自检 TV Self-Check",
        detail: "Leanback 遥控键测试、AudioTrack 音频与独立 build.sh",
        detailJa: "TVリモコンキー＆AudioTrack音声テストAPK"
      }
    ]
  }
]
