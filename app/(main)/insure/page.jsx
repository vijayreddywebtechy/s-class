"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ApplyNowCard from "@/components/common/ApplyNowCard";
import InsuranceList from "@/components/insureComponents/InsuranceList";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsurePage = () => {
  const router = useRouter();

  // Example insurance policies data
  const insurances = [
    {
      id: "1",
      iconPath: "/images/icons/icn_avatar_account.svg",
      iconBgColor: "#D946EF", // Purple/Magenta color for Short Term Insurance
      title: "Short Term Insurance",
      policyNumber: "SBG12345678",
      insuredAmount: "R 630 000.00",
      premium: "R 2 000.00",
      showClaims: true,
      hasClaimsData: true,
      onClaimsClick: () => router.push("/insure/claims"),
      showKeyTerms: true,
      hasKeyTermsData: true,
      onKeyTermsClick: () => router.push("/insure/key-terms"),
      onMenuClick: () => console.log("Open menu for Short Term Insurance"),
    },
    {
      id: "2",
      iconPath: "/images/icons/icn_avatar_account.svg",
      iconBgColor: "#22C55E", // Green color for Life Insurance
      title: "Life Insurance",
      policyNumber: "00 00 000 000 0 0",
      insuredAmount: "R 630 000.00",
      premium: "R 2 000.00",
      showClaims: true,
      hasClaimsData: false,
      onClaimsClick: () => router.push("/insure/claims"),
      showKeyTerms: true,
      hasKeyTermsData: false,
      onKeyTermsClick: () => router.push("/insure/key-terms"),
      onMenuClick: () => console.log("Open menu for Life Insurance"),
    },
  ];

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container py-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-950 leading-tight mb-5">
          Insure
        </h2>
        <p className="text-sm md:text-base text-foreground mb-6">
          Tamlyn, these deals are recommended for you.
        </p>

        {/* Insurance Recommendation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Credit Card Protection"
            description="Protect yourself and your loved ones"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Life Insurance"
            description="Get up to 40% of your premiums back"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Car Loan Protection"
            description="Get up to 20% of your premiums back"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
        </div>

        {/* Add Insurance Account Button */}
        <Button
          variant="outline"
          className="ml-auto flex text-sm font-medium uppercase text-slate-500 bg-slate-200 border-slate-200 hover:bg-gray-200 mb-6"
        >
          <CirclePlus className="!w-6 !h-6" strokeWidth={1.5} /> Add an insurance account
        </Button>

        {/* Insurance List */}
        <InsuranceList insurances={insurances} />
      </div>
    </div>
  );
};

export default InsurePage;