"use client";

import { useEffect } from "react";

export function PlausibleAnalytics() {
  useEffect(() => {
    import("@plausible-analytics/tracker").then(({ init }) => {
      init({
        domain: "mindversetutor.com",
      });
    });
  }, []);
  
  return null;
}
