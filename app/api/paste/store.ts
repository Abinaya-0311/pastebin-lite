const globalForStore = globalThis as any;

export const store: Map<string, string> =
  globalForStore.store ?? new Map();

globalForStore.store = store;
