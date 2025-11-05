"use client";

import React from "react";
import InsuranceSummary from "@/components/insureComponents/InsuranceSummary";
import ClaimsTable from "@/components/insureComponents/ClaimsTable";
import InsuranceTabNav from "@/components/insureComponents/InsuranceTabNav";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const ClaimsPage = () => {
  // Insurance data
  const insurance = {
    iconPath: "/images/icons/icn_avatar_account.svg",
    iconBgColor: "#D946EF", // Purple/Magenta color
    title: "Short term insurance",
    policyNumber: "SBG12345678",
    insuredAmount: "R 630 000.00",
    premium: "R 2 000.00",
  };

  // Sample claims data (100 records to match screenshot)
  const generateClaims = () => {
    const claims = [];
    for (let i = 1; i <= 100; i++) {
      claims.push({
        id: i,
        amountClaimed: "R 2 000.00",
        amountPaid: "R 1 500.00",
        amountNotPaid: "R 500.00",
        paidTo: "XYZ Shop",
        paymentDate: "22 Nov 2023",
      });
    }
    return claims;
  };

  const claims = generateClaims();

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container pb-10">
        <InsuranceTabNav />
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-950 leading-tight">Claims</h2>
          <Button variant="ghost" className="text-primary-light shadow-none hover:bg-blue-100 hover:text-primary-light">
            <CirclePlus className="!w-6 !h-6 -mt-0.5" strokeWidth={1.5} />
            SUBMIT A CLAIM
          </Button>
        </div>

        {/* Insurance Summary Card */}
        <div className="mb-6">
          <InsuranceSummary insurance={insurance} />
        </div>

        {/* Claims Table */}
        <ClaimsTable claims={claims} />
      </div>
    </div>
  );
};

export default ClaimsPage;