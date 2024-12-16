interface Window {
  gtag: (
    command: 'event' | 'config',
    action: string,
    params?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      page_path?: string;
      [key: string]: unknown;
    }
  ) => void;
  dataLayer: Array<Record<string, unknown>>;
}
