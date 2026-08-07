'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'exitPopupLastShown';
const COOLDOWN_DAYS = 7;

function shouldShow(): boolean {
  try {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    const diff = Date.now() - parseInt(last, 10);
    return diff > COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

function markShown() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {}
}

function DesktopPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-6 pointer-events-none">
      <div
        className="pointer-events-auto bg-white border border-violet-200 rounded-2xl shadow-2xl p-6 max-w-sm w-full"
        role="dialog"
        aria-modal="true"
        aria-label="Creator insurance quote prompt"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-gray-900 font-semibold text-sm leading-snug">Not sure what cover you need?</p>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Our specialist advisers match creators with the right insurance for their platform and content — at no obligation.
        </p>
        <Link
          href="/quote/"
          onClick={onClose}
          className="block w-full text-center py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition text-sm"
        >
          Get a Quote →
        </Link>
        <p className="text-xs text-gray-400 text-center mt-2">Licensed NZ brokers. Response within 1 business day.</p>
      </div>
    </div>
  );
}

function MobileStickyBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-violet-600 shadow-2xl px-4 py-3 flex items-center justify-between gap-3">
      <p className="text-gray-900 text-sm font-medium leading-snug flex-1">
        Need creator cover? Talk to a specialist.
      </p>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href="/quote/"
          onClick={onClose}
          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition text-sm whitespace-nowrap"
        >
          Get a Quote
        </Link>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none px-1" aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownRef = useRef(false);

  const show = () => {
    if (shownRef.current) return;
    if (!shouldShow()) return;
    shownRef.current = true;
    markShown();
    setVisible(true);
  };

  const close = () => setVisible(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    if (window.innerWidth >= 768) {
      timerRef.current = setTimeout(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (e.clientY <= 10 && e.clientX > window.innerWidth * 0.5) {
            show();
            document.removeEventListener('mousemove', handleMouseMove);
          }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
      }, 20000);
    } else {
      const handleScroll = () => {
        const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollPct >= 0.4) {
          show();
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible) return null;

  return isMobile ? (
    <MobileStickyBar onClose={close} />
  ) : (
    <DesktopPopup onClose={close} />
  );
}
