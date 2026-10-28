import type { FormEvent, RefObject } from "react"
import type { Translation } from "../content"

type ReservationModalProps = {
  open: boolean
  t: Translation
  formRef: RefObject<HTMLFormElement | null>
  onClose: () => void
  onSend: (channel: "whatsapp" | "email") => void
}

export function ReservationModal({
  open,
  t,
  formRef,
  onClose,
  onSend,
}: ReservationModalProps) {
  return (
    <div
      className={`reservation-modal${open ? " reservation-modal--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.modalTitle}
    >
      <button
        className="reservation-backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="reservation-panel">
        <button
          className="reservation-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img src="/images/linde-official.png" alt="" />
        <h2>{t.modalTitle}</h2>
        <p>{t.modalCopy}</p>
        <form
          ref={formRef}
          onSubmit={(event: FormEvent) => event.preventDefault()}
        >
          <label>
            <span>{t.name}</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            <span>{t.phone}</span>
            <input name="phone" required type="tel" autoComplete="tel" />
          </label>
          <label>
            <span>{t.date}</span>
            <input name="date" required type="date" />
          </label>
          <label>
            <span>{t.time}</span>
            <input name="time" required type="time" />
          </label>
          <label>
            <span>{t.guests}</span>
            <input
              name="guests"
              required
              type="number"
              min="1"
              max="30"
              defaultValue="2"
            />
          </label>
          <label className="form-full">
            <span>{t.note}</span>
            <textarea name="note" rows={3} />
          </label>
          <div className="reservation-actions form-full">
            <button
              className="button reservation-whatsapp"
              type="button"
              onClick={() => onSend("whatsapp")}
            >
              {t.sendWhatsapp}
            </button>
            <button
              className="button reservation-email"
              type="button"
              onClick={() => onSend("email")}
            >
              {t.sendEmail}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
