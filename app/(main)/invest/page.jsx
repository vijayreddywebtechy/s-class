"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ApplyNowCard from "@/components/common/ApplyNowCard";
import InvestmentList from "@/components/investComponents/InvestmentList";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestPage = () => {
  const router = useRouter();

  // Example investments data
  const investments = [
    {
      id: "1",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "Roth IRA-Morris",
      accountNumber: "00 00 000 000 0 0",
      marketValue: "R 630 000.00",
      showHoldings: true,
      hasHoldingsData: true,
      onHoldingsClick: () => router.push("/invest/holdings"),
      onMenuClick: () => console.log("Open menu for Roth IRA"),
    },
    {
      id: "2",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "Tax-Free Investment",
      accountNumber: "00 00 000 000 0 0",
      marketValue: "R 630 000.00",
      showHoldings: true,
      hasHoldingsData: false,
      onHoldingsClick: () => router.push("/invest/holdings"),
      onMenuClick: () => console.log("Open menu for Tax-Free"),
    },
    {
      id: "3",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "Brokerage_morris",
      accountNumber: "00 00 000 000 0 0",
      marketValue: "R 630 000.00",
      showHoldings: true,
      hasHoldingsData: true,
      onHoldingsClick: () => router.push("/invest/holdings"),
      onMenuClick: () => console.log("Open menu for Brokerage"),
    },
  ];

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container py-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-dark leading-tight mb-5">
          Investments
        </h2>
        <p className="text-sm md:text-base text-gray-medium mb-6">
          Tamlyn, these deals are recommended for you.
        </p>

        {/* Investment Recommendation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Save for your retirement"
            description="With a Liberty Retirement Annuity Policy."
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Tax free investment"
            description="Optimise your tax-free allowance by xyz."
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Goals-based Financial Planning"
            description="Let us help you achieve your goals"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
        </div>

        {/* Add Investment Account Button */}
          <Button
            variant="ghost"
            className="group ml-auto flex uppercase text-gray-light bg-slate-200 hover:bg-primary/10 hover:text-primary mb-6" size="md"
          >
            <CirclePlus className="!w-6 !h-6 group-hover:text-primary" strokeWidth={1.5}/> Add an investment account
          </Button>

        {/* Investment List */}
        <InvestmentList investments={investments} />
      </div>
    </div>
  );
};

export default InvestPage;