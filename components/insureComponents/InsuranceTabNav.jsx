"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const InsuranceTabNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isKeyTermsActive = pathname === "/insure/key-terms";
  const isClaimsActive = pathname === "/insure/claims";

  return (
    <div className="flex border-b border-slate-300 mb-8">
      <Button
        variant="ghost"
        onClick={() => router.push("/insure/key-terms")}
        className={`text-sm font-medium p-4 h-10 md:h-12 rounded-none ${
          isKeyTermsActive
            ? "text-primary border-b-2 border-primary hover:text-primary hover:bg-blue-100"
            : "text-gray-light hover:bg-slate-100"
        }`}
      >
        Key Terms
      </Button>
      <Button
        variant="ghost"
        onClick={() => router.push("/insure/claims")}
        className={`text-sm font-medium p-4 h-10 md:h-12 rounded-none ${
          isClaimsActive
            ? "text-primary border-b-2 border-primary hover:text-primary hover:bg-blue-100"
            : "text-gray-light hover:bg-slate-100"
        }`}
      >
        Claims
      </Button>
    </div>
  );
};

export default InsuranceTabNav;
