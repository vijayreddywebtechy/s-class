import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HoldingsSummary = ({ investment }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            {/* Investment Info Column */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Image
                      src={investment.iconPath}
                      alt={`${investment.title} Icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-gray-dark mb-0.5">
                    {investment.title}
                  </h3>
                  <p className="text-xs text-gray-medium">
                    {investment.accountNumber}
                  </p>
                </div>
              </div>
            </td>

            {/* Market Value Column */}
            <td className="p-4">
              <div className="flex gap-8 items-center justify-end">
                <div className="border-l border-primary pl-2">
                  <p className="text-xs text-gray-light mb-0.5">Market Value</p>
                  <p className="text-sm md:text-base text-gray-dark">
                    {investment.marketValue}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="group border-primary hover:bg-primary flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-primary group-hover:text-white" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsSummary;
