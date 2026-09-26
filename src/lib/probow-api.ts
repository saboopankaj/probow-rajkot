export const PROBOW_API_ENDPOINTS = {
  menu: "/api/menu",
  offerPopup: "/api/site/offer-popup",
} as const;

export type ProbowApiClient = ReturnType<typeof createProbowApiClient>;

export function createProbowApiClient(fetcher: typeof fetch = fetch) {
  return {
    fetchMenu() {
      return fetcher(PROBOW_API_ENDPOINTS.menu, {
        method: "GET",
        headers: { Accept: "application/json" },
        credentials: "include",
        cache: "no-store",
      });
    },
    fetchOfferPopup() {
      return fetcher(PROBOW_API_ENDPOINTS.offerPopup, {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });
    },
  };
}

declare global {
  interface Window {
    ProbowApi?: ProbowApiClient;
  }
}
