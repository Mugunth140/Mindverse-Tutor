"use client";

import { useEffect } from "react";
import { init } from "@plausible-analytics/tracker";

export function PlausibleAnalytics() {
  useEffect(() => {
    init({
      domain: "mindversetutor.com",
    });
  }, []);
  
  return null;
}
