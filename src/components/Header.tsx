import type { Locale, Translation } from "../content"
import { ArrowIcon } from "./Ui"

const navHrefs = [
  "#philosophie",
  "#kueche",
  "#raeume",
  "#ueber-uns",
  "#karriere",
  "#besuch",
]
const locales: Locale[] = ["de", "en", "it"]

type HeaderProps = {
  locale: Locale
  menuOpen: boolean
  scrolled: boolean
  t: Translation
  onLocaleChange: (locale: Locale) => void
  onMenuToggle: () => void
  onMenuClose: () => void
  onReserve: () => void
}

export function Header({
  locale,
  menuOpen,
  scrolled,
  t,
  onLocaleChange,
  onMenuToggle,
  onMenuClose,
  onReserve,
}: HeaderProps) {
  const languages = (mobile = false) => (
    <div className={mobile ? "mobile-languages" : "language-switcher"}>
      {locales.map((lang) => (
        <button
          key={lang}
          className={locale === lang ? "active" : ""}
          onClick={() => onLocaleChange(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <a className="wordmark" href="#top" aria-label="Restaurant Linde">
        <img src="/images/linde-official.png" alt="" />
      </a>
      <nav
        className={`nav${menuOpen ? " nav--open" : ""}`}
        aria-label="Main navigation"
      >
        {t.nav.map((label, index) => (
          <a key={navHrefs[index]} href={navHrefs[index]} onClick={onMenuClose}>
            {label}
          </a>
        ))}
        {languages(true)}
      </nav>
      <div className="header-actions">
        {languages()}
        <button className="header-reserve" onClick={onReserve}>
          {t.reserve} <ArrowIcon />
        </button>
      </div>
      <button
        className={`menu-button${menuOpen ? " menu-button--open" : ""}`}
        type="button"
        aria-label="Open navigation"
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
