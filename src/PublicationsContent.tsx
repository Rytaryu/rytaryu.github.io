import { useMemo, useState } from "react";
import { pubsPeerReviewed, pubsDomestic } from "./data/publications";
import type { Lang } from "./utils";
import { t, Section } from "./utils";

export default function PublicationsContent({ lang }: { lang: Lang }) {
  const [q, setQ] = useState("");
  const qn = (s: string) => s.toLowerCase();
  const filteredPeer = useMemo(
    () => pubsPeerReviewed.filter((p) => (p.jp + p.en).toLowerCase().includes(qn(q))),
    [q]
  );
  const filteredDomestic = useMemo(
    () => pubsDomestic.filter((p) => (p.jp + p.en).toLowerCase().includes(qn(q))),
    [q]
  );

  return (
    <div className="w-[85vw]">
      <div className="mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("検索（題目/著者/会議など）", "Search (title/authors/venue)…", lang)}
          className="w-full border rounded-xl px-3 py-2 text-sm"
          aria-label="Search publications"
        />
      </div>

      <Section title={t("論文誌・国際会議（査読付き）", "Journals & International Conferences (Peer-reviewed)", lang)}>
        <ol className="list-decimal pl-6 space-y-3">
          {filteredPeer.map((p, i) => (
            <li key={i}>{t(p.jp, p.en, lang)}</li>
          ))}
        </ol>
      </Section>

      <Section title={t("国内会議・シンポジウム等（査読なし）", "Domestic Conferences & Symposiums (Non-referred, in Japanese)", lang)}>
        <ol className="list-decimal pl-6 space-y-3">
          {filteredDomestic.map((p, i) => (
            <li key={i}>{t(p.jp, p.en, lang)}</li>
          ))}
        </ol>
      </Section>
    </div>
  );
}