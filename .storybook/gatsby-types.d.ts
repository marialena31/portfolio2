declare interface Window {
  __GATSBY: {
    emitter: {
      on: (...args: any[]) => void;
      off: (...args: any[]) => void;
    };
  };
}
