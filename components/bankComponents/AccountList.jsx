import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountList = ({
  accounts,
  showTotals = true,
  totalBalance,
  totalAvailableBalance,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Table */}
      <table className="w-full">
        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {/* Account Info Column */}
              <td className="p-4 w-auto">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                      <Image 
                        src={account.iconPath} 
                        alt={`${account.title} Icon`} 
                        width={40} 
                        height={40} 
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-slate-950 mb-0.5">
                      {account.title}
                    </h3>
                    <p className="text-xs text-foreground">
                      {account.accountNumber}
                    </p>
                  </div>
                </div>
              </td>

              {/* Balance Column - Combined */}
              <td className="p-4 w-auto">
                <div className="grid grid-cols-2">
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-slate-500 mb-0.5">Balance</p>
                    <p className="text-sm md:text-base text-slate-950">
                      {account.balance}
                    </p>
                  </div>
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-slate-500 mb-0.5">
                      Available balance
                    </p>
                    <p className="text-sm md:text-base text-gray-900">
                      {account.availableBalance}
                    </p>
                  </div>
                </div>
              </td>

              {/* Actions Column */}
              <td className="p-4 text-right w-auto">
                <div className="flex items-center gap-3 justify-end">
                  {account.showTransactions && (
                    <>
                      {account.hasTransactionData ? (
                        <Button
                          variant="ghost"
                          onClick={account.onTransactionsClick}
                          className="text-sm font-medium uppercase text-primary-light hover:text-primary-light hover:bg-blue-100"
                        >
                          TRANSACTIONS
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="text-sm bg-slate-200 text-slate-500 border-none uppercase cursor-not-allowed !opacity-100"
                          disabled
                        >
                          TRANSACTIONS
                        </Button>
                      )}
                    </>
                  )}
                  {account.onMenuClick && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={account.onMenuClick}
                      className="group rounded-lg border border-primary-light hover:bg-primary hover:border-primary flex-shrink-0"
                    >
                      <MoreVertical className="h-5 w-5 text-primary-light group-hover:text-white" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}

          {/* Total Row */}
          {showTotals && totalBalance && totalAvailableBalance && (
            <tr className="border-t border-gray-200">
              <td className="p-4"></td>

              {/* Total Balance Column - Combined */}
              <td className="p-4">
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-950 font-medium mb-0.5">
                      Total Balance
                    </p>
                    <p className="text-sm md:text-base font-normal text-slate-950">
                      {totalBalance}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 font-medium mb-0.5">
                      Total Available Balance
                    </p>
                    <p className="text-sm md:text-base font-normal text-slate-950">
                      {totalAvailableBalance}
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-4"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
