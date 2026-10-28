import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

const menuUrls = [
  "https://www.lindewurm.ch/wochenmenu",
  "https://www.lindewurm.ch/speisekarte",
  "https://www.lindewurm.ch/saisonkarte",
]

export function Kitchen({ t }: SectionProps) {
  return (
    <section className="kitchen" id="kueche">
      <div className="kitchen-photo reveal">
        <img src="/images/dish-roast.webp" alt="" />
        <span>{t.kitchenTag}</span>
      </div>
      <div className="kitchen-content">
        <div className="section-number section-number--light reveal">
          02 — {t.kitchenLabel}
        </div>
        <LeafMark />
        <h2 className="reveal">
          {t.kitchenTitle}
          <br />
          <em>{t.kitchenAccent}</em>
        </h2>
        <p className="reveal reveal--delay-1">{t.kitchenCopy}</p>
        <div className="menu-list reveal reveal--delay-2">
          {t.menus.map(([title, copy], index) => (
            <a
              key={title}
              href={menuUrls[index]}
              target="_blank"
              rel="noreferrer"
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
