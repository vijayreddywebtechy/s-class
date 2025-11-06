"use client";

import React from "react";
import InsuranceSummary from "@/components/insureComponents/InsuranceSummary";
import KeyTermsDetails from "@/components/insureComponents/KeyTermsDetails";
import InsuranceTabNav from "@/components/insureComponents/InsuranceTabNav";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const KeyTermsPage = () => {
  // Insurance data
  const insurance = {
    iconPath: "/images/icons/icn_avatar_account.svg",
    iconBgColor: "#D946EF", // Purple/Magenta color
    title: "Short term insurance",
    policyNumber: "SBG12345678",
    insuredAmount: "R 630 000.00",
    premium: "R 2 000.00",
  };

  // Policy Details
  const policyDetails = {
    policyNumber: "SBG12345678",
    policyType: "Premier",
    inceptionDate: "01/06/2023",
    renewalDate: "01/06/2023",
    debitOrderDate: "1st of each month",
    paymentFrequency: "Monthly",
    renewalPeriod: "From 01/02/2024 to 28/02/2024",
  };

  // Premium Summary
  const premiumSummary = [
    { label: "Domestic buildings", value: "R 1 234.33" },
    { label: "Household contents", value: "R 5 792.04" },
    { label: "Motor", value: "R 1 961.74" },
    { label: "Personal accident", value: "R 105.23" },
    { label: "Assistance service", value: "R 197.53" },
    { label: "Personal liability", value: "R 12.55" },
    { label: "Extended personal liability (PLIP)", value: "-" },
  ];

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container pb-10">
        <InsuranceTabNav />
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-dark leading-tight">
            Key Terms
          </h2>
          <Button
            variant="ghost"
            className="text-primary shadow-none hover:bg-blue-100 hover:text-primary"
          >
            <CirclePlus className="!w-6 !h-6 -mt-0.5" strokeWidth={1.5} />
            SUBMIT A CLAIM
          </Button>
        </div>

        {/* Insurance Summary Card */}
        <div className="mb-6">
          <InsuranceSummary insurance={insurance} />
        </div>

        {/* Key Terms Details */}
        <KeyTermsDetails
          policyDetails={policyDetails}
          premiumSummary={premiumSummary}
        />

        {/* Download Policy Schedule Button */}
        <div className="mt-6 flex justify-end">
          <Button className="text-sm font-medium uppercase shadow-none bg-primary h-10 md:h-12">
            DOWNLOAD POLICY SCHEDULE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyTermsPage;