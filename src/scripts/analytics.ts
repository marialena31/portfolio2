type AnalyticsEvent = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

export const trackEvent = ({ category, action, label, value }: AnalyticsEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.GATSBY_GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};
