import type { Lang } from "./utils";
import { t, Section, IconLink } from "./utils";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiLinkSimple } from "react-icons/pi";
import PhotoURL from "./assets/photo.jpg";

export default function HomeContent({ lang }: { lang: Lang }) {
  const name = { jp: "當麻僚太郎", en: "Ryotaro Toma" };
  const affiliation = {
    jp: "明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 博士前期課程 2年",
    en: "Graduate School of Advanced Mathematical Sciences, Meiji University, Tokyo, Japan (M.S. student, 2nd year)",
  };
  const education = [
    {
      jp: "明治大学 総合数理学部 先端メディアサイエンス学科 2024年卒業",
      en: "B.S. in Computer Science, Meiji University, Tokyo, Japan, 2024",
    },
    {
      jp: "明治大学大学院 先端数理科学研究科 先端メディアサイエンス専攻 博士前期課程 2026年修了予定",
      en: "M.S. in Computer Science, Meiji University, Tokyo, Japan, 2026 (to be graduated)",
    },
  ];
  const interests = [
    { jp: "説明可能AI", en: "XAI (eXplainable AI)" },
    { jp: "機械学習", en: "Machine Learning" },
    { jp: "プライバシー保護技術", en: "PETs (Privacy-Enhancing Technologies)" },
  ];
  const address = {
    jp: "〒164-8525 東京都中野区中野4-21-1",
    en: "4-21-1 Nakano, Nakano-ku, Tokyo 164-8525, Japan",
  };
  const phone = { jp: "080-1156-0379", en: "+81-80-1156-0379" };
  const email = "cs242022@meiji.ac.jp";
  const year = new Date().getFullYear();

  return (
    <div className="w-[60vw]">
      <div className="flex flex-row items-start gap-20">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {t(name.jp, name.en, lang)}
          </h1>

          <Section title={t("所属", "Affiliation", lang)}>
            <p>{t(affiliation.jp, affiliation.en, lang)}</p>
          </Section>

          <Section title={t("研究分野", "Research Interests", lang)}>
            <ul className="list-disc pl-6 space-y-1">
              {interests.map((it, i) => (
                <li key={i}>{t(it.jp, it.en, lang)}</li>
              ))}
            </ul>
          </Section>

          <Section title={t("学歴", "Education", lang)}>
            <ol className="list-decimal pl-6 space-y-2">
              {education.map((e, i) => (
                <li key={i}>{t(e.jp, e.en, lang)}</li>
              ))}
            </ol>
          </Section>

          <Section title={t("連絡先", "Contact", lang)}>
            <div className="space-y-1">
              <p>{t("住所", "Address", lang)}：{t(address.jp, address.en, lang)}</p>
              <p>
                {t("電話番号", "Phone", lang)}：
                <a className="underline" href={lang === "jp" ? "tel:08011560379" : "tel:+818011560379"}>
                  {t(phone.jp, phone.en, lang)}
                </a>
              </p>
              <p>
                Email： <a className="underline" href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </Section>

          <footer className="text-xs text-gray-500 mt-20">
            © {year} Ryotaro Toma — Last updated: {new Date().toISOString().slice(0, 10)}
          </footer>
        </div>

        <div className="w-[140px] sm:w-[160px] md:w-[200px]">
          <div className="aspect-square rounded-xl border bg-gray-100 overflow-hidden">
            <img
              src={PhotoURL}
              alt={t("顔写真", "Portrait", lang)}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="pt-6 pl-6">
            <ul className="space-y-1">
              <IconLink
                href="https://x.com/Rytaryu"
                icon={BsTwitterX}
                handle="@Rytaryu"
                aria={t("X（旧Twitter）: @Rytaryu", "X (Twitter): @Rytaryu", lang)}
              />
              <IconLink
                href="https://github.com/Rytaryu"
                icon={FaGithub}
                handle="Rytaryu"
                aria={t("GitHub: Rytaryu", "GitHub: Rytaryu", lang)}
              />
              <IconLink
                href="https://www.kikn.fms.meiji.ac.jp/paper/2025/master/index.html#toma"
                icon={PiLinkSimple}
                handle={t("菊池研究室", "Kikuchi Lab.", lang)}
                aria={t("菊池研究室", "Kikuchi Lab.", lang)}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
