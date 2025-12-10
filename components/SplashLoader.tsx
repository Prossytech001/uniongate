"use client";

import { useEffect, useState } from "react";
import FullPageLoader from "@/components/FullPageLoader";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <FullPageLoader />;

  return <>{children}</>;
}
