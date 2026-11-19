declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

let lastInitiateCheckoutTime = 0;
const INITIATE_CHECKOUT_DEDUP_MS = 1000;

/**
 * Triggers the standard Meta Pixel InitiateCheckout event before redirecting to checkout,
 * with a short deduplication guard to prevent duplicate rapid clicks on the same button.
 * Relies on the single Pixel instance initialized in index.html.
 */
export function trackInitiateCheckout(): void {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastInitiateCheckoutTime < INITIATE_CHECKOUT_DEDUP_MS) {
    return;
  }
  lastInitiateCheckoutTime = now;

  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout');
    }
  } catch {
    // Never interrupt checkout navigation if tracking is blocked or throws
  }
}
