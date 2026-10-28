import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Spaces({ t }: SectionProps) {
  const spaces = [
    ["/images/cellar.webp", "space-card space-card--large"],
    ["/images/room.webp", "space-card"],
    ["/images/dessert.webp", "space-card space-card--dish"],
  ]
  return (
    <section className="spaces section-shell" id="raeume">
      <div className="spaces-heading">
        <div>
          <div className="section-number reveal">03 — {t.spacesLabel}</div>
          <h2 className="reveal">
            {t.spacesTitle}
            <br />
            <em>{t.spacesAccent}</em>
          </h2>
        </div>
        <p className="reveal reveal--delay-1">{t.spacesCopy}</p>
      </div>
      <div className="space-gallery">
        {spaces.map(([image, className], index) => (
          <article
            className={`${className} reveal reveal--delay-${Math.min(index, 2)}`}
            key={image}
          >
            <img src={image} alt="" />
            <div>
              <span>0{index + 1}</span>
              <h3>{t.spaces[index][0]}</h3>
              <p>{t.spaces[index][1]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
