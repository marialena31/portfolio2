interface GatsbyAPI {
  emitter: {
    on: () => void;
    off: () => void;
  };
}

declare global {
  interface Window {
    __GATSBY: GatsbyAPI;
  }
}

export {};
