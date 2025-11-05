"use client";

import Transactions from "@/components/bankComponents/Transactions";
import TransactionTable from "@/components/bankComponents/TransactionTable";
import React from "react";

const TransactionsPage = () => {

  return (
    <div className="bg-slate-100 h-full overflow-auto">
      <div className="content-container py-10">
        <h2 className="text-3xl text-slate-950 leading-tight mb-5">
          Transactions
        </h2>
        
        {/* Account Summary Card */}
        <div className="mb-6">
          <Transactions />
        </div>

        {/* Transaction Table */}
        <TransactionTable />
      </div>
    </div>
  );
};

export default TransactionsPage;
