import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Careers({ t }: SectionProps) {
  return (
    <section className="careers" id="karriere">
      <div className="careers-media reveal">
        <img src="/images/dining.webp" alt="" />
      </div>
      <div className="careers-content">
        <div className="section-number section-number--light reveal">
          05 — {t.careersLabel}
        </div>
        <h2 className="reveal">
          {t.careersTitle}
          <em>{t.careersAccent}</em>
        </h2>
        <p className="reveal reveal--delay-1">{t.careersCopy}</p>
        <a
          className="button button--light reveal reveal--delay-2"
          href={`mailto:info@lindewurm.ch?subject=${encodeURIComponent(t.careersCta)}`}
        >
          <span>{t.careersCta}</span>
          <ArrowIcon />
        </a>
        <small>{t.careersNote}</small>
      </div>
    </section>
  )
}
