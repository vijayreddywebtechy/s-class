"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ApplyNowCard from "@/components/common/ApplyNowCard";
import AccountList from "@/components/bankComponents/AccountList";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const BankPage = () => {
  const router = useRouter();

  // Example accounts data
  const accounts = [
    {
      id: "1",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "Everyday Checking Account",
      accountNumber: "00 00 000 000 0 0",
      balance: "R 37 586.59",
      availableBalance: "R35 586.59",
      showTransactions: true,
      hasTransactionData: true, // Has transaction data available
      onTransactionsClick: () => router.push("/bank/transactions"),
      onMenuClick: () => console.log("Open menu for checking"),
    },
    {
      id: "2",
      iconPath: "/images/icons/icn_avatar_savings.svg",
      title: "Business Savings Account",
      accountNumber: "00 00 000 000 0 0",
      balance: "R1 300 000.59",
      availableBalance: "R1 220 000.59",
      showTransactions: true,
      hasTransactionData: false, // No transaction data - button will be disabled
      onTransactionsClick: () => router.push("/bank/transactions"),
      onMenuClick: () => console.log("Open menu for savings"),
    },
    {
      id: "3",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "High Yield Savings Account",
      accountNumber: "00 00 000 000 0 0",
      balance: "R 630 000.00",
      availableBalance: "R 630 000.00",
      showTransactions: true,
      hasTransactionData: true, // Has transaction data available
      onTransactionsClick: () => router.push("/bank/transactions"),
      onMenuClick: () => console.log("Open menu for high yield"),
    },
    {
      id: "4",
      iconPath: "/images/icons/icn_avatar_account.svg",
      title: "Classic Savings Account",
      accountNumber: "00 00 000 000 0 0",
      balance: "R 630 000.00",
      availableBalance: "R 630 000.00",
      showTransactions: true,
      hasTransactionData: false, // No transaction data - button will be disabled
      onTransactionsClick: () => router.push("/bank/transactions"),
      onMenuClick: () => console.log("Open menu for classic"),
    },
    {
      id: "5",
      iconPath: "/images/icons/icn_avatar_credit.svg",
      title: "Credit Card",
      accountNumber: "00 00 000 000 0 0",
      balance: "R 630 000.00",
      availableBalance: "R 630 000.00",
      showTransactions: true,
      hasTransactionData: true, // Has transaction data available
      onTransactionsClick: () => router.push("/bank/transactions"),
      onMenuClick: () => console.log("Open menu for credit card"),
    },
  ];

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container py-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-dark leading-tight mb-5">Your Bank Accounts</h2>
        <p className="text-sm md:text-base text-gray-medium mb-6">
          Tamlyn, these deals are recommended for you.
        </p>
        
        {/* Apply Now Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <ApplyNowCard
            title="No forms, no fuss!"
            subtitle="No forms, no fuss!"
            description="Upgrade to ... account now and earn extra benefits"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Ucount Rewards"
            description="Get up to 40% of your premiums back"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
          <ApplyNowCard
            title="Recommended for you"
            subtitle="Bank like never before"
            description="Invest in unit trusts for your long term goals"
            buttonText="APPLY NOW"
            buttonLink="/apply"
            imageSrc="/images/applynow/local-share-image.jpg"
          />
        </div>

          <Button
            variant="ghost"
            className="group ml-auto flex uppercase text-gray-light bg-slate-200 hover:bg-primary/10 hover:text-primary mb-6"
          >
            <CirclePlus className="!w-6 !h-6 group-hover:text-primary" strokeWidth={1.5}/> Add a bank account
          </Button>

        {/* Account List */}
        <AccountList
          accounts={accounts}
          showAddButton={true}
          onAddAccount={() => console.log("Add new account")}
          showTotals={true}
          totalBalance="R 630 000.00"
          totalAvailableBalance="R 630 000.00"
        />
      </div>
    </div>
  );
};

export default BankPage;