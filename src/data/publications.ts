import type { Lang, ContentString } from "../utils";
import { setContentString, t } from "../utils";

export type PublicationLink = {
    type: "paper" | "slides";
    url: string;
};

type PublicationResources = {
    links?: PublicationLink[];
};

type Article = {
    authors: ContentString[];
    title: ContentString;
    journal: ContentString;
    year: number;
    english_only: boolean;
    volume?: ContentString;
    number?: ContentString;
    pages?: ContentString;
    month?: ContentString;
    note?: ContentString;
} & PublicationResources;

type InProceedings = {
    authors: ContentString[];
    title: ContentString;
    booktitle: ContentString;
    year: number;
    english_only: boolean;
    series?: ContentString;
    volume?: ContentString;
    number?: ContentString;
    pages?: ContentString;
    publisher?: ContentString;
    address?: ContentString;
    note?: ContentString;
} & PublicationResources;

export type Publication = Article | InProceedings;

const CSEC2023: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Multiple Person Tracking based on Gait Identification using Kinect and OpenPose",
        "歩容に基づく個人識別におけるKinectとOpenPoseの多人数追跡評価"
    ),
    booktitle: setContentString(
        "IPSJ SIG Technical Report",
        "情報処理学会研究報告"
    ),
    year: 2023,
    english_only: false,
    volume: setContentString("2023-CSEC-100"),
    number: setContentString("38"),
    pages: setContentString("1-7"),
    note: setContentString("(in Japanese)", " "),
};

const MSPN2023: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma"),
        setContentString("Terumi Yaguchi"),
        setContentString("Hiroaki Kikuchi"),
    ],
    title: setContentString(
        "Multiple Person Tracking based on Gait Identification using Kinect and OpenPose"
    ),
    booktitle: setContentString(
        "Mobile, Secure, and Programmable Networking (MSPN2023)"
    ),
    year: 2024,
    english_only: true,
    series: setContentString("LNCS"),
    volume: setContentString("14482"),
    pages: setContentString("175-187"),
    publisher: setContentString("Springer"),
    address: setContentString("Cham"),
};

const CSS2023: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Evaluation and Mitigation of Feature Inference Risk from Explainable AI Metrics Shapley Values",
        "AIモデルの説明可能性Shapley値からの属性推定リスクの評価とその対策"
    ),
    booktitle: setContentString(
        "Computer Security Symposium 2023 (CSS2023)",
        "コンピュータセキュリティシンポジウム2023（CSS2023）"
    ),
    publisher: setContentString(
        "Information Processing Society of Japan",
        "情報処理学会"
    ),
    year: 2023,
    english_only: false,
    note: setContentString("(in Japanese)", " "),
};

const ICSS2024: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Evaluation of Feature Inference Risk from Explainable AI Metrics LIME and Shapley Values",
        "AIモデルの説明可能性LIMEとShapley値からの属性推定リスクの評価"
    ),
    booktitle: setContentString("IEICE Technical Report", "信学技報"),
    year: 2024,
    english_only: false,
    volume: setContentString("123"),
    number: setContentString("448"),
    pages: setContentString("137-144"),
    note: setContentString("(in Japanese)", " "),
};

const MDAI2024: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma"),
        setContentString("Hiroaki Kikuchi"),
    ],
    title: setContentString("Record Reconstruction Risk from LIME XAI Metrics"),
    booktitle: setContentString(
        "Modeling Decisions for Artificial Intelligence (MDAI 2024)"
    ),
    year: 2024,
    english_only: true,
    note: setContentString("(USB Proceedings)", "（USB Proceedings）"),
};

const PSD2024: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma"),
        setContentString("Hiroaki Kikuchi"),
    ],
    title: setContentString(
        "Combinations of AI Models and XAI Metrics Vulnerable to Record Reconstruction Risk"
    ),
    booktitle: setContentString("Privacy in Statistical Databases (PSD 2024)"),
    year: 2024,
    english_only: true,
    series: setContentString("LNCS"),
    volume: setContentString("14915"),
    pages: setContentString("329-343"),
    publisher: setContentString("Springer"),
    address: setContentString("Cham"),
};

const CSS2024: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Empirical Evaluation of Record Reconstruction Risk against Differentially Private Model Explanations DPGD-Explain",
        "差分プライバシーを保証したモデル説明DPGD-Explainに対するレコード再構築リスクの実験評価"
    ),
    booktitle: setContentString(
        "Computer Security Symposium 2024 (CSS2024)",
        "コンピュータセキュリティシンポジウム2024（CSS2024）"
    ),
    publisher: setContentString(
        "Information Processing Society of Japan",
        "情報処理学会"
    ),
    year: 2024,
    english_only: false,
    note: setContentString("(in Japanese)", " "),
};

const JSAIisAI2025: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma"),
        setContentString("Hiroaki Kikuchi"),
    ],
    title: setContentString(
        "Empirical Evaluation of Record Reconstruction Risk from Model Explanations with Differential Privacy"
    ),
    booktitle: setContentString(
        "New Frontiers in Artificial Intelligence (JSAI-isAI 2025)"
    ),
    year: 2025,
    english_only: true,
    series: setContentString("LNAI"),
    volume: setContentString("15692"),
    pages: setContentString("355-367"),
    publisher: setContentString("Springer"),
    address: setContentString("Singapore"),
};

const IPSJ2025: Article = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Record Reconstruction Risk of AI Model Explanations",
        "AIモデルの説明可能性に対するレコード再構築リスク"
    ),
    journal: setContentString("IPSJ Journal", "情報処理学会論文誌"),
    year: 2025,
    english_only: false,
    volume: setContentString("66"),
    number: setContentString("9"),
    pages: setContentString("1310-1322"),
    month: setContentString("September", "9月"),
    note: setContentString("(in Japanese)", " "),
};

const CSS2025: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "Empirical Evaluation of Record Reconstruction Risk and Explainability",
        "説明可能性に対するレコード再構築リスクの実験的評価",
    ),
    booktitle: setContentString(
        "Computer Security Symposium 2025 (CSS2025)",
        "コンピュータセキュリティシンポジウム2025（CSS2025）"
    ),
    publisher: setContentString(
        "Information Processing Society of Japan",
        "情報処理学会"
    ),
    year: 2025,
    english_only: false,
    note: setContentString("(in Japanese)", " "),
};

const ICPRAI2026: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma"),
        setContentString("Ghazaleh Khodabandelou"),
        setContentString("Hiroaki Kikuchi"),
    ],
    title: setContentString(
        "Privacy-Preserving Explainable AI via Explanation Masking against Record Reconstruction Attacks for Healthcare"
    ),
    booktitle: setContentString(
        "The Fifth International Conference on Pattern Recognition and Artificial Intelligence 2026 (ICPRAI2026)"
    ),
    year: 2026,
    english_only: true,
    links: [
        { type: "paper", url: "/publications/ICPRAI2026_paper_v6.pdf" },
    ],
};

const CSS2026: InProceedings = {
    authors: [
        setContentString("Ryotaro Toma", "當麻 僚太郎"),
        setContentString("Hiroaki Kikuchi", "菊池 浩明"),
    ],
    title: setContentString(
        "A Privacy-Aware LLM Rewriting Framework for Model Explanations against Record Reconstruction Attacks",
        "レコード再構築攻撃に対するプライバシーを考慮したLLMベース自然言語説明フレームワークの提案"
    ),
    booktitle: setContentString(
        "Computer Security Symposium 2026 (CSS2026)",
        "コンピュータセキュリティシンポジウム2026（CSS2026）"
    ),
    publisher: setContentString(
        "Information Processing Society of Japan",
        "情報処理学会"
    ),
    year: 2026,
    english_only: false,
    note: setContentString("(in Japanese)", " "),
};

export const pubsPeerReviewed: Publication[] = [
    MSPN2023,
    MDAI2024,
    PSD2024,
    JSAIisAI2025,
    IPSJ2025,
    ICPRAI2026,
];

export const pubsDomestic: Publication[] = [
    CSEC2023,
    CSS2023,
    ICSS2024,
    CSS2024,
    CSS2025,
    CSS2026,
];

type CitationPart = {
    text: string;
    italic?: boolean;
};

const formatEnglishAuthor = (name: string): string => {
    const words = name.trim().split(/\s+/u);
    const familyName = words.pop() ?? "";
    const initials = words.map((word) => `${word[0]}.`).join("");
    return initials ? `${familyName}, ${initials}` : familyName;
};

export const toCitationParts = (p: Publication, lang: Lang): CitationPart[] => {
    lang = p.english_only ? "en" : lang;
    const comma = t(lang, ", ", "，");
    const period = t(lang, ".", "．");
    const colon = t(lang, ": ", "：");
    const names = p.authors.map((author) =>
        lang === "jp" && author.jp
            ? author.jp.replace(/\s+/gu, "")
            : formatEnglishAuthor(author.en)
    );
    const authors =
        lang === "en" && names.length > 1
            ? `${names.slice(0, -1).join(comma)} and ${names.at(-1)}`
            : names.join(comma);
    const title = t(lang, p.title.en, p.title.jp);
    const venue = "journal" in p ? p.journal : p.booktitle;
    const venueText = t(lang, venue.en, venue.jp);
    const conferencePrefix = "booktitle" in p && p.english_only ? "Proc. " : "";
    // Keep a conference acronym and its parentheses upright in English citations.
    const venueMatch =
        lang === "en" ? venueText.match(/^(.*?) (\([^()]+\))$/u) : null;
    const labelSpace = lang === "en" ? " " : "";
    const volume = p.volume
        ? `Vol.${labelSpace}${t(lang, p.volume.en, p.volume.jp)}`
        : "";
    const number = p.number
        ? `No.${labelSpace}${t(lang, p.number.en, p.number.jp)}`
        : "";
    const pageRange = p.pages ? t(lang, p.pages.en, p.pages.jp) : "";
    const pages = pageRange
        ? `${/^\d+$/u.test(pageRange) ? "p." : "pp."}${labelSpace}${pageRange}`
        : "";
    const series =
        "series" in p && p.series ? t(lang, p.series.en, p.series.jp) : "";
    const publisher =
        "publisher" in p && p.publisher
            ? t(lang, p.publisher.en, p.publisher.jp)
            : "";
    const address =
        "address" in p && p.address ? t(lang, p.address.en, p.address.jp) : "";
    const details = [series, volume, number, pages, publisher, address]
        .filter(Boolean)
        .join(comma);
    const date = t(lang, ` (${p.year})`, `（${p.year}）`);
    const note = p.note ? t(lang, p.note.en, p.note.jp).trim() : "";
    const noteText = note
        ? `${lang === "en" ? " " : ""}${note}${note.endsWith(period) ? "" : period}`
        : "";

    return [
        { text: `${authors}${colon}${title}${comma}` },
        {
            text: `${conferencePrefix}${venueMatch?.[1] ?? venueText}`,
            italic: lang === "en",
        },
        { text: venueMatch ? ` ${venueMatch[2]}` : "" },
        { text: `${details ? `${comma}${details}` : ""}${date}${period}${noteText}` },
    ];
};

export const toText = (p: Publication, lang: Lang): string =>
    toCitationParts(p, lang)
        .map((part) => part.text)
        .join("");

export const matchesPublication = (p: Publication, query: string): boolean =>
    [
        toText(p, "jp"),
        toText(p, "en"),
        ...p.authors.flatMap((author) => [author.en, author.jp ?? ""]),
    ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
