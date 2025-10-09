import type { Lang, ContentString } from "../utils";
import { setContentString, t } from "../utils";

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
};

type InProceedings = {
    authors: ContentString[];
    title: ContentString;
    booktitle: ContentString;
    year: number;
    english_only: boolean;
    pages?: ContentString;
    publisher?: ContentString;
    address?: ContentString;
    note?: ContentString;
};

type Publication = Article | InProceedings;

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
    pages: setContentString(
        "Vol. 2023-CSEC-100, No. 38, pp. 1-7",
        "Vol. 2023-CSEC-100，No. 38，pp. 1-7"
    ),
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
    pages: setContentString("LNCS, Vol. 14482, pp. 175-187"),
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
    pages: setContentString(
        "Vol. 123, No. 448, pp. 137-144",
        "Vol. 123，No. 448，pp. 137-144"
    ),
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
    pages: setContentString("LNCS, Vol. 14915, pp. 329-343"),
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
    pages: setContentString("LNAI, Vol. 15692, pp. 355-367"),
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
    volume: setContentString("Vol. 66"),
    number: setContentString("No. 9"),
    pages: setContentString("pp. 1310-1322"),
    month: setContentString("September", "9月"),
    note: setContentString("(in Japanese)", " "),
};

export const pubsPeerReviewed: Publication[] = [
    MSPN2023,
    MDAI2024,
    PSD2024,
    JSAIisAI2025,
    IPSJ2025,
];

export const pubsDomestic: Publication[] = [
    CSEC2023,
    CSS2023,
    ICSS2024,
    CSS2024,
];

export const toText = (p: Publication, lang: Lang): string => {
    lang = p.english_only ? "en" : lang;
    const comma = t(lang, ", ", "，");
    const period = t(lang, ". ", "．");
    const colon = t(lang, ": ", "：");

    const authors = p.authors.map((a) => t(lang, a.en, a.jp)).join(comma);
    const title = t(lang, p.title.en, p.title.jp);
    const year = p.year;
    const pages = p.pages ? t(lang, p.pages.en, p.pages.jp) : "";

    if ("journal" in p) {
        const journal = t(lang, p.journal.en, p.journal.jp);
        const volume = p.volume ? t(lang, p.volume.en, p.volume.jp) : "";
        const number = p.number ? t(lang, p.number.en, p.number.jp) : "";
        const month = p.month ? t(lang, p.month.en, p.month.jp) : "";
        const note = p.note ? t(lang, p.note.en, p.note.jp) : "";

        const date = t(
            lang,
            `${month ? month + comma : ""}${year}`,
            `${year}年${month ? month : ""}`
        );

        const optional = [volume, number, pages].filter(Boolean);

        return `${authors}${colon}${title}${period}${journal}${comma}${optional.join(
            comma
        )}${comma}${date}${period}${note}`;
    } else {
        const booktitle = t(lang, p.booktitle.en, p.booktitle.jp);
        const publisher = p.publisher
            ? t(lang, p.publisher.en, p.publisher.jp)
            : "";
        const address = p.address ? t(lang, p.address.en, p.address.jp) : "";
        const note = p.note ? t(lang, p.note.en, p.note.jp) : "";

        const optional = `${[pages, publisher, address]
            .filter(Boolean)
            .join(comma)}`;

        return `${authors}${colon}${title}${comma}${booktitle}${
            optional ? `${comma}${optional}` : ""
        }${period}${year}${period}${note}`;
    }
};
