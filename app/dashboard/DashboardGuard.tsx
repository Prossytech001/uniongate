"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardGuard({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) {
      router.replace("/login");
      return;
    }

    async function validate() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        // 403 → Redirect based on KYC state
        if (res.status === 403) {
          if (data.error === "KYC_TERMS_NOT_ACCEPTED")
            return router.replace("/dashboard/verify-account");

          if (data.error === "KYC_NOT_COMPLETED")
            return router.replace("/dashboard/kyc");
        }

        setAllowed(true);
      } catch (err) {
        router.replace("/login");
      }
    }

    validate();
  }, []);

  if (!allowed) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading dashboard…
      </div>
    );
  }

  return <>{children}</>;
}
