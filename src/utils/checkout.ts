const BASE_CHECKOUT_URL = 'https://pay.hotmart.com/S108174058B?checkoutMode=10';

/**
 * Returns the checkout URL preserving any UTM parameters and query string present in the page URL,
 * while maintaining the checkoutMode=10 parameter for order bumps.
 */
export function getCheckoutUrl(): string {
  if (typeof window === 'undefined') return BASE_CHECKOUT_URL;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) {
      return BASE_CHECKOUT_URL;
    }

    const checkoutUrl = new URL(BASE_CHECKOUT_URL);
    currentParams.forEach((value, key) => {
      checkoutUrl.searchParams.set(key, value);
    });

    if (!checkoutUrl.searchParams.has('checkoutMode')) {
      checkoutUrl.searchParams.set('checkoutMode', '10');
    }

    return checkoutUrl.toString();
  } catch (e) {
    return BASE_CHECKOUT_URL;
  }
}

/**
 * Smoothly scrolls to the offer section (#oferta).
 */
export function scrollToOffer(): void {
  const offerElement = document.getElementById('oferta');
  if (offerElement) {
    offerElement.scrollIntoView({ behavior: 'smooth' });
  }
}
