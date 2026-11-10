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
  category: 'ai' | 'web' | 'desktop' | 'miniprogram'
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
    businessContextJa: "スキルを企業貢献へと直结させる自己PRの標準フレーズ。"
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
    subtitle: "726 条 N1 句型 + 220 条核心词双站体系 · Kuromoji 形态素拆解 · Vercel Blob ETag 云端并发同步",
    subtitleJa: "726題文法＋220題語彙の2サイト構成・Kuromoji形態素解析・Vercel Blob ETag クラウド同期",
    tag: "Flagship · Full-Stack Web",
    statusLabel: "核心主项目 · 主力交付",
    statusLabelJa: "主力プロジェクト · 運用中",
    category: "web",
    problem: "备考高阶日语 JLPT N1 及商务 BJT 时，传统教材与孤立题库难以同时解决「形态素级词性拆解、多设备无冲突进度同步、断网单文件便携训练」三大痛点，跨端刷题记录极易互相覆盖。",
    problemJa: "N1やBJTの高度な学習において、従来の教材やアプリでは「形態素単位の構文解析」「複数デバイス間の競合しない同期」「オフライン単一HTML持ち出し」を同時に満たすことが困難でした。",
    solution: "作为个人最核心主打项目，采用 Next.js + React 19 + TypeScript 独立构建文法/词汇全栈 Web 应用：集成 Kuromoji 形态素分析与 Wanakana 注音引擎实时标注词性；基于 Vercel Blob 实现哈希鉴权与 ETag 条件覆盖并发同步（自动重放合并多端记录），内置“错题连对 3 次自动移出”状态机与单文件离线 HTML 打包能力。",
    solutionJa: "主力プロジェクトとして Next.js＋React 19＋TypeScript で文法・語彙Webシステムを独力開発。Kuromoji形態素解析＆Wanakanaによるリアルタイムふりがな展開、Vercel Blob＋ETag楽観的ロックによる自動リプレイ同期、連続3回正解アーカイブ機構、単一HTMLオフライン書き出しまで一貫実装。",
    highlights: [
      "726 条 N1 句型 + 220 条高频词库全量审计，内嵌 Kuromoji 分词与四色词性高亮",
      "Vercel Blob ETag 并发锁与状态重放合并，多端做题进度与学习时长零冲突同步",
      "配套 Playwright 全链路回归校验（移动端 / 错题池 / 同步面板）与单文件离线导出"
    ],
    highlightsJa: [
      "726題文法＋220題語彙の全量監査DB、Kuromoji形態素解析＆品詞別ハイライト実装",
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
    title: "片巢 ClipNest",
    titleJa: "ClipNest（クリップネスト）",
    subtitle: "原生 macOS 桌面剪贴板与多媒体素材资产管理系统",
    subtitleJa: "macOS ネイティブ志向のクリップボード＆マルチメディア資産管理アプリ",
    tag: "Desktop / Local-First",
    statusLabel: "Verified · 实战投入",
    statusLabelJa: "Verified · 実務運用",
    category: "desktop",
    problem: "日常在开发、整理和写作过程中，频繁复制的大量文本、代码块、截图与音视频片段极易遗失；市面现有剪贴板工具要么臃肿耗电，要么缺乏本地化结构化沉淀能力。",
    problemJa: "開発やリサーチ中にコピーしたテキスト・画像・音声断片の散逸を防ぐため、完全ローカル稼働・高速検索・低消費電力にこだわった管理基盤が不足していた課題を解決。",
    solution: "自主研发基于本地优先（Local-First）的轻量客户端，搭载快捷全屏呼出、毫秒级模糊检索、历史版本回溯与本地免同步数据安全存储。",
    solutionJa: "完全ローカル優先アーキテクチャを採用し、ミリ秒単位のインクリメンタル検索、ショートカット呼出、安全なプライベート保存を実現する独自アプリを自作。",
    highlights: [
      "系统级极速唤醒，低内存常驻",
      "支持图片、格式化代码、纯文本多维筛选",
      "本地数据库直读，零隐私泄露风险"
    ],
    highlightsJa: [
      "ショートカットによる瞬時呼出と省リソース常駐",
      "画像・コード・テキストの自動判別と多次元フィルタ",
      "完全ローカル保存によるプライバシー100%保護"
    ],
    techStack: ["TypeScript", "Electron / Native Hook", "SQLite", "Tailwind CSS"],
    metrics: "日常全天候稳定运行，毫秒级响应，素材留存效率提升 300%",
    metricsJa: "毎日実務で使用中、検索応答15ms未満、情報整理効率が約3倍向上"
  },
  {
    id: "transcribe-hub",
    tier: "standard",
    title: "TranscribeHub 转录中心",
    titleJa: "TranscribeHub（転写ハブ）",
    subtitle: "音视频智能提取、长音频切片与高精度转录工作流",
    subtitleJa: "長尺音声・動画のインテリジェント自動文字起こし＆要約パイプライン",
    tag: "AI Audio Pipeline",
    statusLabel: "Verified · 300+ hrs",
    statusLabelJa: "Verified · 300h+",
    category: "ai",
    problem: "处理动辄数小时的长音频播客或海外会议录音时，人工听写耗时费力，传统云端 API 费用高昂且长音频容易遇到网络超时断流与标点混乱问题。",
    problemJa: "数時間に及ぶ長尺ポッドキャストや海外音声をテキスト化する際、手動作業のコストと既存クラウドAPIのタイムアウト・高額コストが大きな障壁となっていた。",
    solution: "搭建自动化音频预处理与批处理流水线，利用 FFmpeg 智能静音检测进行无损音频切片，串联 Whisper 深度学习模型，自动拼接对齐并生成结构化文字摘要。",
    solutionJa: "FFmpeg による無音検出分割パイプラインを構築し、Whisper 認識エンジンと連携。タイムスタンプ付きの構造化テキストを完全自動出力するワークフローを確立。",
    highlights: [
      "长音频智能切片与防失真拼接",
      "批量自动化任务列队，无人值守转录",
      "智能去除口语语气词与标点恢复"
    ],
    highlightsJa: [
      "長尺音声の無音検出によるスマート自動スライシング",
      "バッチ処理キューによるバックグラウンド放置実行",
      "句読点復元およびタイムスタンプ付きMarkdown出力"
    ],
    techStack: ["Python", "OpenAI Whisper", "FFmpeg", "Streamlit", "Automation"],
    metrics: "累计处理 300+ 小时音频素材，转录准确率 98%+，生产力提升 10 倍",
    metricsJa: "累計300時間以上の音声を処理、認識精度98%以上、生産性10倍以上"
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
