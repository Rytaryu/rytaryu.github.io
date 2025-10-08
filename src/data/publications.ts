// src/data/publications.ts
export type Bi = { jp: string; en: string }

export type Publication = {
  jp: string
  en: string
}

export const pubsPeerReviewed: Publication[] = [
  {
    jp: `Ryotaro Toma, Terumi Yaguchi, and Hiroaki Kikuchi: Multiple Person Tracking based on Gait Identification using Kinect and OpenPose, MSPN 2023, LNCS 14482. Springer, 2023.`,
    en: `Ryotaro Toma, Terumi Yaguchi, and Hiroaki Kikuchi: Multiple Person Tracking based on Gait Identification using Kinect and OpenPose, MSPN 2023, LNCS 14482. Springer, 2023.`,
  },
  {
    jp: `Ryotaro Toma, Hiroaki Kikuchi: Record Reconstruction Risk from LIME XAI Metrics, MDAI 2024, USB Proceedings, 2024.`,
    en: `Ryotaro Toma, Hiroaki Kikuchi: Record Reconstruction Risk from LIME XAI Metrics, MDAI 2024, USB Proceedings, 2024.`,
  },
  {
    jp: `Ryotaro Toma, Hiroaki Kikuchi: Combinations of AI Models and XAI Metrics Vulnerable to Record Reconstruction Risk, PSD 2024, LNCS 14915, Springer, 2024.`,
    en: `Ryotaro Toma, Hiroaki Kikuchi: Combinations of AI Models and XAI Metrics Vulnerable to Record Reconstruction Risk, PSD 2024, LNCS 14915, Springer, 2024.`,
  },
  {
    jp: `Ryotaro Toma, Hiroaki Kikuchi: Empirical Evaluation of Record Reconstruction Risk from Model Explanations with Differential Privacy, JSAI-isAI 2025, LNAI 15692, Springer, 2025.`,
    en: `Ryotaro Toma, Hiroaki Kikuchi: Empirical Evaluation of Record Reconstruction Risk from Model Explanations with Differential Privacy, JSAI-isAI 2025, LNAI 15692, Springer, 2025.`,
  },
  {
    jp: `當麻僚太郎，菊池浩明：AIモデルの説明可能性に対するレコード再構築リスク，情報処理学会論文誌，Vol. 66，No. 9，pp. 1310-1322，2025年9月．`,
    en: `Ryotaro Toma and Hiroaki Kikuchi: Record Reconstruction Risk of AI Model Explanations, IPSJ Journal, Vol. 66, No. 9, pp. 1310-1322, September 2025. (in Japanese)`,
  },
]

export const pubsDomestic: Publication[] = [
  {
    jp: `當麻僚太郎，谷口輝海，菊池浩明：歩容に基づく個人識別におけるKinectとOpenPoseの多人数追跡評価，情報処理学会研究報告，Vol. 2023-CSEC-100，No. 38，pp. 1-7，2023．`,
    en: `Ryotaro Toma, Terumi Yaguchi, and Hiroaki Kikuchi: Multiple Person Tracking based on Gait Identification using Kinect and OpenPose, IPSJ SIG Technical Report, Vol. 2023-CSEC-100, No. 38, pp. 1–7, 2023.`,
  },
  {
    jp: `當麻僚太郎，菊池浩明：AIモデルの説明可能性Shapley値からの属性推定リスクの評価とその対策，コンピュータセキュリティシンポジウム2023（CSS 2023），2023．`,
    en: `Ryotaro Toma and Hiroaki Kikuchi: Evaluation and Mitigation of Feature Inference Risk from Explainable AI Metrics Shapley Values, Computer Security Symposium (CSS), 2023.`,
  },
  {
    jp: `當麻僚太郎，菊池浩明：AIモデルの説明可能性LIMEとShapley値からの属性推定リスクの評価，信学技報, Vol. 123, No. 448, ICSS2023-88, pp. 137-144，2024．`,
    en: `Ryotaro Toma and Hiroaki Kikuchi: Evaluation of Feature Inference Risk from Explainable AI Metrics LIME and Shapley Values, IEICE Technical Report, Vol. 123, No. 448, pp. 137–144, 2024.`,
  },
  {
    jp: `當麻僚太郎，菊池浩明：差分プライバシーを保証したモデル説明DPGD-Explainに対するレコード再構築リスクの実験評価，コンピュータセキュリティシンポジウム2024（CSS 2024），2024．`,
    en: `Ryotaro Toma and Hiroaki Kikuchi: Empirical Evaluation of Record Reconstruction Risk against Differentially Private Model Explanations DPGD-Explain, Computer Security Symposium (CSS), 2024.`,
  },
]
