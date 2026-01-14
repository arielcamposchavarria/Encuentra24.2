export {};

declare global {
  interface Window {
    openFilterSidebar?: () => void;
  }
}
