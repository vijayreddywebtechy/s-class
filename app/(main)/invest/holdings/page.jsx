"use client";

import React from "react";
import HoldingsSummary from "@/components/investComponents/HoldingsSummary";
import HoldingsTable from "@/components/investComponents/HoldingsTable";

const HoldingsPage = () => {
  // Investment account data
  const investment = {
    iconPath: "/images/icons/icn_avatar_account.svg",
    title: "Roth IRA-Morris",
    accountNumber: "00 00 000 000 0 0",
    marketValue: "R 630 000.00",
  };

  // Holdings data
  const holdings = [
    {
      id: "1",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "SYY Holdings",
      accountNumber: "00 00 000 000 0 0",
      marketValue: "R 630 000.00",
      gainsLoss: "- R30 000.00",
      percentageChange: "9.25%",
      units: "679",
      price: "R 4 298.99",
    },
    {
      id: "2",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "WLL Holdings",
      accountNumber: "00 00 000 000 0 0",
      marketValue: "R 630 000.00",
      gainsLoss: "- R30 000.00",
      percentageChange: "9.25%",
      units: "679",
      price: "R 4 298.99",
    },
  ];

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container py-10">
        <h2 className="text-3xl text-gray-dark leading-tight mb-5">
          Holdings
        </h2>

        {/* Investment Summary Card */}
        <div className="mb-6">
          <HoldingsSummary investment={investment} />
        </div>

        {/* Holdings Table */}
        <HoldingsTable holdings={holdings} />
      </div>
    </div>
  );
};

export default HoldingsPage;