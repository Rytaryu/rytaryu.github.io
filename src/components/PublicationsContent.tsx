import { useMemo, useState } from "react";
import { pubsPeerReviewed, pubsDomestic, toText } from "../data/publications";
import type { Lang } from "../utils";
import { t, Section } from "../utils";

export default function PublicationsContent({ lang }: { lang: Lang }) {
    const [q, setQ] = useState("");
    const qn = (s: string) => s.toLowerCase();
    const filteredPeer = useMemo(
        () =>
            pubsPeerReviewed.filter((p) =>
                (toText(p, "jp") + toText(p, "en"))
                    .toLowerCase()
                    .includes(qn(q))
            ),
        [q]
    );
    const filteredDomestic = useMemo(
        () =>
            pubsDomestic.filter((p) =>
                (toText(p, "jp") + toText(p, "en"))
                    .toLowerCase()
                    .includes(qn(q))
            ),
        [q]
    );

    return (
        <div className="mb-[5vh]">
            <div className="mb-4">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={t(
                        lang,
                        "Search (title/authors/venue)…",
                        "検索（題目/著者/会議など）"
                    )}
                    className="w-full border rounded-xl px-3 py-2 text-sm"
                    aria-label="Search publications"
                />
            </div>

            <Section
                title={t(
                    lang,
                    "Journals & International Conferences (Peer-reviewed)",
                    "論文誌・国際会議（査読付き）"
                )}
            >
                <ul className="list-disc pl-6 space-y-3">
                    {filteredPeer.map((p, i) => (
                        <li key={i}>{toText(p, lang)}</li>
                    ))}
                </ul>
            </Section>

            <Section
                title={t(
                    lang,
                    "Domestic Conferences & Symposiums (Non-referred)",
                    "国内会議・シンポジウム等（査読なし）"
                )}
            >
                <ul className="list-disc pl-6 space-y-3">
                    {filteredDomestic.map((p, i) => (
                        <li key={i}>{toText(p, lang)}</li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}
