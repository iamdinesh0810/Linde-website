import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function About({ t }: SectionProps) {
  return (
    <section className="chef" id="ueber-uns">
      <div className="chef-image reveal">
        <img src="/images/arijan.webp" alt="Zilbeari Arijan" />
        <div className="chef-stamp">
          <span>{t.stamp1}</span>
          <strong>{t.stamp2}</strong>
        </div>
      </div>
      <div className="chef-content">
        <div className="section-number reveal">04 — {t.people}</div>
        <p className="eyebrow reveal">{t.host}</p>
        <h2 className="reveal">
          {t.quote}
          <em>{t.quoteAccent}</em>
        </h2>
        <p className="reveal reveal--delay-1">{t.bio1}</p>
        <p className="reveal reveal--delay-2">{t.bio2}</p>
      </div>
    </section>
  )
}
