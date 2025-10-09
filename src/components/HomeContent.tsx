import type { Lang } from "../utils";
import { t, Section, IconLink } from "../utils";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiLinkSimple } from "react-icons/pi";
import PhotoURL from "../assets/photo.jpg";
import {
    name,
    affiliation,
    interests,
    education,
    email,
} from "../data/profile";

export default function HomeContent({ lang }: { lang: Lang }) {
    const year = new Date().getFullYear();

    return (
        <div>
            <div className="flex flex-row items-start gap-[5vw]">
                <div className="flex-1 w-[55vw] md:w-[50vw]">
                    <p className="text-4xl md:text-5xl mb-[5vh] font-extrabold leading-tight">
                        {t(lang, name.en, name.jp)}
                    </p>

                    <Section title={t(lang, "Affiliation", "所属")}>
                        <p>{t(lang, affiliation.en, affiliation.jp)}</p>
                    </Section>

                    <Section title={t(lang, "Research Interests", "研究分野")}>
                        <ul className="list-disc pl-6 space-y-1">
                            {interests.map((it, i) => (
                                <li key={i}>{t(lang, it.en, it.jp)}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section title={t(lang, "Education", "学歴")}>
                        <ul className="list-disc pl-6 space-y-2">
                            {education.map((e, i) => (
                                <li key={i}>{t(lang, e.en, e.jp)}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section title={t(lang, "Contact", "連絡先")}>
                        <div className="space-y-1">
                            <p>
                                Email：{" "}
                                <a
                                    className="underline"
                                    href={`mailto:${email}`}
                                >
                                    {email}
                                </a>
                            </p>
                        </div>
                    </Section>

                    <footer className="text-xs text-gray-500 mt-20">
                        © {year} Ryotaro Toma — Last updated:{" "}
                        {new Date().toISOString().slice(0, 10)}
                    </footer>
                </div>

                <div className="w-[20vw] md:w-[15vw]">
                    <div className="aspect-square rounded-xl border bg-gray-100 overflow-hidden">
                        <img
                            src={PhotoURL}
                            alt={t(lang, "Portrait", "顔写真")}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                (
                                    e.currentTarget as HTMLImageElement
                                ).style.display = "none";
                            }}
                        />
                    </div>

                    <div className="mt-6 ml-[1vw]">
                        <ul className="space-y-1">
                            <IconLink
                                href="https://x.com/Rytaryu"
                                icon={BsTwitterX}
                                handle="@Rytaryu"
                                aria={t(
                                    lang,
                                    "X（Twitter）: @Rytaryu",
                                    "X (旧Twitter): @Rytaryu"
                                )}
                            />
                            <IconLink
                                href="https://github.com/Rytaryu"
                                icon={FaGithub}
                                handle="Rytaryu"
                                aria="GitHub: Rytaryu"
                            />
                            <IconLink
                                href="https://www.kikn.fms.meiji.ac.jp/paper/2025/master/index.html#toma"
                                icon={PiLinkSimple}
                                handle={t(lang, "Kikuchi Lab.", "菊池研究室")}
                                aria={t(lang, "Kikuchi Lab.", "菊池研究室")}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
