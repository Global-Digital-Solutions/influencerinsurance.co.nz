'use client'

import { useEffect } from 'react'

/**
 * Fires the GA4 conversion for a completed enquiry.
 *
 * Deliberately an event rather than a plain /thank-you/ pageview conversion.
 * A pageview counts every refresh, every back-button return and every time the
 * tab is restored, which inflates the number that matters most. This fires
 * `generate_lead` once and then writes a marker to sessionStorage, so a reload
 * of the same page does not count twice.
 *
 * sessionStorage is per-tab and cleared when the tab closes, which is the right
 * scope: a genuine second enquiry in a new session should count again.
 *
 * The event is pushed onto dataLayer whether or not gtag.js has finished
 * loading. On a hard load of this page the tag script and this effect race each
 * other, and simply checking for window.gtag would silently drop the conversion
 * whenever the effect won. gtag.js replays everything already queued on
 * dataLayer when it initialises, so queueing is safe and losing the race is not.
 */
const KEY = 'infl_lead_sent'

type GtagWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

export default function LeadEvent({ variant = '' }: { variant?: string }) {
  useEffect(() => {
    let already = false
    try {
      already = sessionStorage.getItem(KEY) === '1'
    } catch {
      // Private mode or blocked storage — fall through and fire once per load
      // rather than losing the conversion entirely.
    }
    if (already) return

    const w = window as GtagWindow
    w.dataLayer = w.dataLayer || []
    if (typeof w.gtag !== 'function') {
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments)
      }
    }
    w.gtag('event', 'generate_lead', {
      event_category: 'enquiry',
      event_label: variant || 'quote_form',
    })

    try {
      sessionStorage.setItem(KEY, '1')
    } catch {}
  }, [variant])

  return null
}
