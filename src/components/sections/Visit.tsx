import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Visit({ t, onReserve }: ReserveProps) {
  return (
    <section className="visit" id="besuch">
      <div className="visit-bg" />
      <div className="visit-overlay" />
      <div className="visit-content">
        <div className="section-number section-number--light reveal">
          06 — {t.visitLabel}
        </div>
        <h2 className="reveal">
          {t.visitTitle}
          <br />
          <em>{t.visitAccent}</em>
        </h2>
        <div className="visit-grid">
          <div className="visit-block reveal">
            <PinIcon />
            <div>
              <span>{t.address}</span>
              <p>
                Lindenstrasse 1
                <br />
                3043 Uettligen
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Restaurant+Linde+Lindenstrasse+1+3043+Uettligen"
                target="_blank"
                rel="noreferrer"
              >
                {t.route} <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="visit-block reveal reveal--delay-1">
            <PhoneIcon />
            <div>
              <span>{t.contact}</span>
              <p>
                <a href="tel:+41318291244">+41 31 829 12 44</a>
                <br />
                <a href="mailto:info@lindewurm.ch">info@lindewurm.ch</a>
              </p>
            </div>
          </div>
          <div className="visit-hours reveal reveal--delay-2">
            <span>{t.hours}</span>
            <div>
              <p>{t.open}</p>
              <p>10:00 — 23:00</p>
            </div>
            <div>
              <p>{t.closed}</p>
              <p>{t.closedValue}</p>
            </div>
            <small>{t.early}</small>
          </div>
        </div>
        <button
          className="button button--light visit-button reveal"
          onClick={onReserve}
        >
          <span>{t.reserve}</span>
          <ArrowIcon />
        </button>
      </div>
    </section>
  )
}
