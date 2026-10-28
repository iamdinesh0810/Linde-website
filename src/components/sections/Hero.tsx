import type { RefObject } from "react"
import type { Translation } from "../../content"
import { ArrowIcon, LeafMark, PhoneIcon, PinIcon } from "../Ui"

type SectionProps = { t: Translation }
type ReserveProps = SectionProps & { onReserve: () => void }

export function Hero({
  t,
  onReserve,
  heroRef,
}: ReserveProps & { heroRef: RefObject<HTMLElement | null> }) {
  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-media" />
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="hero-content">
        <div className="hero-kicker reveal">
          <span>3043 Uettligen</span>
          <i />
          <span>{t.heroKicker}</span>
        </div>
        <h1 className="reveal reveal--delay-1">
          {t.heroTitle}
          <em>{t.heroAccent}</em>
        </h1>
        <p className="hero-copy reveal reveal--delay-2">{t.heroCopy}</p>
        <div className="hero-actions reveal reveal--delay-3">
          <button className="button button--light" onClick={onReserve}>
            <span>{t.reserve}</span>
            <ArrowIcon />
          </button>
          <a className="text-link" href="#kueche">
            {t.discover}
          </a>
        </div>
      </div>
      <div className="hero-side-note">Restaurant Linde · Uettligen</div>
      <a className="scroll-cue" href="#philosophie">
        <span />
        {t.scroll}
      </a>
    </section>
  )
}
