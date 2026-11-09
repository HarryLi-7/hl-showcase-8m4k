export interface ProjectItem {
  id: string
  title: string
  titleJa: string
  subtitle: string
  subtitleJa: string
  tag: string
  category: 'ai' | 'web' | 'desktop' | 'miniprogram'
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
    id: "jlpt-miniprogram",
    title: "JLPT N1 文法随身练（原生微信小程序）",
    titleJa: "JLPT N1 文法マスター（WeChatミニプログラム）",
    subtitle: "726 题纯离线高压缩架构 · 掌握度智能轮转算法 · 原生多媒体流",
    subtitleJa: "726題完全オフライン圧縮DB・忘却曲線連動ステートマシン・ネイティブ音声連携",
    tag: "WeChat Mini Program",
    category: "miniprogram",
    problem: "市面主流移动端刷题工具大多包体臃肿（动辄数十兆）、强依赖云端服务器网络，在地铁或弱网环境下容易卡顿甚至断流；且错题复习机制粗糙，缺少动态认知记忆曲线与高保真语音联动。",
    problemJa: "既存の語学アプリは通信依存・大容量で通信環境の悪い場所（地下鉄等）で使えず、復習アルゴリズムが非効率で学習定着率が低い課題を解決。",
    solution: "完全基于微信原生生态（WXML / WXSS / JavaScript）自主研发，将 726 道高阶语法题库深度压缩至 1.1MB，实现 0 秒冷启动完全离线运行；设计“连续答对 3 次移出错题池”与“今日轮转”状态机算法，并搭载四色词性成分拆解与七海神经网络原声音频。",
    solutionJa: "WeChatネイティブフレームワークで自作。726題の全DBを1.1MBに超圧縮し、完全オフライン即時起動を実現。3回連続正解で完了判定する独自ステートマシン、品詞別4色構文解析、七海高精度AI音声再生を完全統合。",
    highlights: [
      "726 题大题库压缩至 1.1MB，完全断网零延迟秒开",
      "自研掌握度算法：连续答对 3 次自动移出错题池",
      "四色词性精准拆解与 InnerAudioContext 原生音频管理"
    ],
    highlightsJa: [
      "726題全問を1.1MBに超圧縮、完全オフライン即時起動",
      "定着度ステートマシン：3回連続正解で自動アーカイブ",
      "品詞別4色構文解釈＆WeChatネイティブ音声シームレス連携"
    ],
    techStack: ["WeChat WXML/WXSS", "JavaScript", "WeChat Audio API", "Offline DB", "State Machine"],
    metrics: "整包仅 1.2MB（免网络秒启动），为本人高分通过 N1 语法提供坚实支撑",
    metricsJa: "パッケージ容量1.2MB・完全通信不要、N1文法対策の主力ツールとして実戦投入"
  },
  {
    id: "clipnest",
    title: "片巢 ClipNest",
    titleJa: "ClipNest（クリップネスト）",
    subtitle: "原生 macOS 桌面剪贴板与多媒体素材资产管理系统",
    subtitleJa: "macOS ネイティブ志向のクリップボード＆マルチメディア資産管理アプリ",
    tag: "Desktop / Local-First",
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
    title: "TranscribeHub 转录中心",
    titleJa: "TranscribeHub（転写ハブ）",
    subtitle: "音视频智能提取、长音频切片与高精度转录工作流",
    subtitleJa: "長尺音声・動画のインテリジェント自動文字起こし＆要約パイプライン",
    tag: "AI Audio Pipeline",
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
    id: "jlpt-trainer",
    title: "JLPT N1 句型特训器",
    titleJa: "JLPT N1 例文・文型トレーナー",
    subtitle: "基于形态素自然语言分析的全栈日语语法特训 Web 应用",
    subtitleJa: "形態素解析エンジンを組み込んだフルスタック日本語学習Webアプリ",
    tag: "Full-Stack Web / NLP",
    category: "web",
    problem: "备考高阶日语 JLPT N1 及商务 BJT 时，传统教科书缺乏生动语境，市面题库无法针对中国学习者「懂意思但不会写、不会说」的产出痛点提供形态素即时反馈。",
    problemJa: "N1やBJTの高度な文法を習得する際、従来の単語帳では「読めるが話せない・書けない」というアウトプット不足に陥りやすい構造的課題を打破。",
    solution: "采用 Next.js 独立构建全栈 Web 应用，集成 Kuromoji 日本语形态素分析器与 Wanakana 罗马字/假名双向引擎，实现实时注音拆解、高频商务句型特训与随堂测验。",
    solutionJa: "Next.js と Kuromoji 形態素解析器を組み合わせ、リアルタイムのふりがな展開、品詞分解、ビジネスシーン別文型トレーニングを提供するWebシステムを自作・デプロイ。",
    highlights: [
      "内嵌 Kuromoji 日本语分词与形态素解析",
      "实时假名注音（Furigana）智能高亮",
      "Vercel 全球 CDN 毫秒级极速响应"
    ],
    highlightsJa: [
      "Kuromoji形態素解析による品詞分解とリアルタイムふりがな生成",
      "ビジネス日本語（BJT対策）に特化した文脈別例文データベース",
      "Next.js App Router ＋ Vercel による高速グローバル配信"
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Kuromoji.js", "Vercel"],
    metrics: "支撑高阶日语语法与商务句型高强度训练，显著提升产出流利度",
    metricsJa: "高度な文法およびビジネス日本語文型の反復習得を支える基幹ツールとして活用"
  }
]
