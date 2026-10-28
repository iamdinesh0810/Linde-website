import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Philosophy({ t }: SectionProps) {
  return (
    <section className="intro section-shell" id="philosophie">
      <div className="section-number reveal">01 — {t.welcome}</div>
      <div className="intro-grid">
        <div className="intro-heading reveal">
          <LeafMark />
          <h2>
            {t.introTitle}
            <br />
            <em>{t.introAccent}</em>
          </h2>
        </div>
        <div className="intro-copy reveal reveal--delay-1">
          <p>{t.introLead}</p>
          <p>{t.introCopy}</p>
          <a className="line-link" href="#ueber-uns">
            {t.story} <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="image-story reveal">
        <div className="image-story-main">
          <img src="/images/dining.webp" alt="" />
        </div>
        <div className="image-story-card">
          <img src="/images/dish-pasta.webp" alt="" />
        </div>
      </div>
    </section>
  )
}
