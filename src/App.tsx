import { useEffect, useRef, useState } from "react"
import { Header } from "./components/Header"
import { ReservationModal } from "./components/ReservationModal"
import {
  About,
  Careers,
  Footer,
  Hero,
  Kitchen,
  Philosophy,
  Spaces,
  Visit,
} from "./components/Sections"
import { content, type Locale } from "./content"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [reservationOpen, setReservationOpen] = useState(false)
  const [locale, setLocale] = useState<Locale>("de")
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36)
      heroRef.current?.style.setProperty(
        "--scroll",
        `${window.scrollY * 0.18}px`,
      )
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.14 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setReservationOpen(false)
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const sendReservation = (channel: "whatsapp" | "email") => {
    if (!formRef.current?.reportValidity()) return
    const data = new FormData(formRef.current)
    const message = [
      t.requestIntro,
      `${t.name}: ${data.get("name")}`,
      `${t.phone}: ${data.get("phone")}`,
      `${t.date}: ${data.get("date")}`,
      `${t.time}: ${data.get("time")}`,
      `${t.guests}: ${data.get("guests")}`,
      `${t.note}: ${data.get("note") || "—"}`,
    ].join("\n")
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/41318291244?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      )
    } else {
      window.location.href = `mailto:info@lindewurm.ch?subject=${encodeURIComponent(t.requestSubject)}&body=${encodeURIComponent(message)}`
    }
  }

  const openReservation = () => setReservationOpen(true)

  return (
    <main>
      <div className="brand-intro" aria-hidden="true">
        <div className="brand-intro__mark">
          <img src="/images/linde-transparent.png" alt="" />
          <span />
        </div>
      </div>
      <Header
        locale={locale}
        menuOpen={menuOpen}
        scrolled={scrolled}
        t={t}
        onLocaleChange={setLocale}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onMenuClose={() => setMenuOpen(false)}
        onReserve={openReservation}
      />
      <Hero t={t} onReserve={openReservation} heroRef={heroRef} />
      <Philosophy t={t} />
      <Kitchen t={t} />
      <Spaces t={t} />
      <About t={t} />
      <Careers t={t} />
      <Visit t={t} onReserve={openReservation} />
      <Footer t={t} onReserve={openReservation} />
      <ReservationModal
        open={reservationOpen}
        t={t}
        formRef={formRef}
        onClose={() => setReservationOpen(false)}
        onSend={sendReservation}
      />
    </main>
  )
}
