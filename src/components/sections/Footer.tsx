import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Footer({ t, onReserve }: ReserveProps) {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/images/linde-official.png" alt="Restaurant Linde" />
        <p>{t.footerClaim}</p>
      </div>
      <div className="footer-links">
        <div>
          <span>{t.explore}</span>
          <a href="#kueche">{t.nav[1]}</a>
          <a href="#raeume">{t.nav[2]}</a>
          <a href="#karriere">{t.nav[4]}</a>
        </div>
        <div>
          <span>{t.contact}</span>
          <a href="tel:+41318291244">+41 31 829 12 44</a>
          <a href="mailto:info@lindewurm.ch">info@lindewurm.ch</a>
          <button onClick={onReserve}>{t.reserve}</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Restaurant Linde · Lindewurm GmbH</p>
        <a href="#top">{t.toTop}</a>
      </div>
    </footer>
  )
}
