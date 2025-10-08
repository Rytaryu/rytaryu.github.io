import { useEffect, useState } from "react";
import type { Tab, Lang } from "./utils";
import HomeContent from "./HomeContent";
import PublicationsContent from "./PublicationsContent";


const tabs: { key: Tab; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "publications", label: "Publications" },
];


export default function App() {
  const [active, setActive] = useState<Tab>("home");
  const [lang, setLang] = useState<Lang>("jp");

  // URLハッシュ連動（#home / #publications）
  useEffect(() => {
    const fromHash = () => {
      const key = (location.hash.replace("#", "") || "home") as Tab;
      setActive(tabs.some((t) => t.key === key) ? key : "home");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = (lang === "jp" ? "ja" : "en");
  }, [lang]);

  const onSelectTab = (key: Tab) => {
    setActive(key);
    history.replaceState(null, "", `#${key}`);
  };

  return (
    <main className="grid grid-cols-[auto,1fr] min-h-screen">
      <aside className="fixed inset-y-0 left-0 w-[15vw] border-r bg-gray-50">
        <div className="h-full flex flex-col">
          <div className="px-3 py-3 border-b">
            <div className="inline-flex rounded-lg border overflow-hidden w-full">
              <button
                className={`w-1/2 px-3 py-1 text-sm ${lang === "jp" ? "bg-white" : "bg-gray-100 hover:bg-gray-50"}`}
                aria-pressed={lang === "jp"}
                onClick={() => setLang("jp")}
              >
                日本語
              </button>
              <button
                className={`w-1/2 px-3 py-1 text-sm border-l ${lang === "en" ? "bg-white" : "bg-gray-100 hover:bg-gray-50"}`}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                English
              </button>
            </div>
          </div>

          <nav className="px-2 py-2 space-y-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => onSelectTab(t.key)}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  active === t.key ? "bg-gray-100 border" : "hover:bg-gray-50"
                }`}
                aria-current={active === t.key ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto" />
        </div>
      </aside>

      <div className="w-full ml-[20vw] mt-20">
          {active === "home" && <HomeContent lang={lang} />}
          {active === "publications" && <PublicationsContent lang={lang} />}
      </div>
    </main>
  );
}
