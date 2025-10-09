import React from "react";

type Tab = "home" | "publications";
type Lang = "jp" | "en";

type ContentString = {
    en: string;
    jp?: string;
};

const setContentString = (en: string, jp?: string): ContentString => ({
    en,
    jp,
});

const t = (lang: Lang, en: string, jp?: string) =>
    lang === "jp" ? jp || en : en;

const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <section className="mt-8">
        <h2 className="text-lg font-semibold border-b pb-1">{title}</h2>
        <div className="mt-3 space-y-2">{children}</div>
    </section>
);

const IconLink = ({
    href,
    icon: Icon,
    handle,
    aria,
}: {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    handle?: string;
    aria: string;
}) => (
    <li>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={aria}
            className="group inline-flex items-center gap-2 rounded-md px-2 py-1 -mx-2 hover:bg-gray-50"
        >
            <Icon
                className="h-4 w-4 shrink-0 text-gray-600 group-hover:text-gray-700"
                aria-hidden
            />
            {handle && <span className="text-gray-600"> {handle}</span>}
        </a>
    </li>
);

export type { Tab, Lang, ContentString };
export { t, Section, IconLink, setContentString };
