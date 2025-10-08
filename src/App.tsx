import { useEffect, useState } from "react";
import type { Tab, Lang } from "./utils";
import HomeContent from "./HomeContent";
import PublicationsContent from "./PublicationsContent";


const tabs: { key: Tab; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "publications", label: "Publications" },
];

type SideBarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  active: Tab;
  setActive: (tab: Tab) => void;
};

function SideBar({ lang, setLang, active, setActive }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectTab = (key: Tab) => {
    setActive(key);
    history.replaceState(null, "", `#${key}`);
    setIsOpen(false); // Close sidebar after selecting a tab
  };

  useEffect(() => {
    document.documentElement.lang = lang === "jp" ? "ja" : "en";
  }, [lang]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <button
        className="md:hidden p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <aside
        className={`fixed inset-y-0 left-0 w-[10vw] min-w-60 border-r bg-gray-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="px-3 py-3 border-b">
            <div className="inline-flex rounded-lg border overflow-hidden w-full">
              <button
                className={`w-1/2 px-3 py-1 text-md ${
                  lang === "jp" ? "bg-white" : "bg-gray-100 hover:bg-gray-50"
                }`}
                aria-pressed={lang === "jp"}
                onClick={() => setLang("jp")}
              >
                日本語
              </button>
              <button
                className={`w-1/2 px-3 py-1 text-md border-l ${
                  lang === "en" ? "bg-white" : "bg-gray-100 hover:bg-gray-50"
                }`}
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
                } ${isOpen ? "block" : "hidden md:block"}`}
                aria-current={active === t.key ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto" />
        </div>
      </aside>

      
    </>
  );
}


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


  return (
    <main className="grid grid-cols-[auto,1fr] min-h-screen">
      <SideBar lang={lang} setLang={setLang} active={active} setActive={setActive} />
      <div className="w-full ml-[15vw] mt-20">
          {active === "home" && <HomeContent lang={lang} />}
          {active === "publications" && <PublicationsContent lang={lang} />}
      </div>
    </main>
  );
}