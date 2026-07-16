declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props: Record<string, any> }) => void;
  }
}

export function track(eventName: string, props?: Record<string, any>) {
  if (typeof window !== "undefined" && window.plausible) {
    if (props) {
      window.plausible(eventName, { props });
    } else {
      window.plausible(eventName);
    }
  }
}
