import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const InsuranceSummary = ({ insurance }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            {/* Insurance Info Column */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                  >
                    <Image
                      src={insurance.iconPath}
                      alt={`${insurance.title} Icon`}
                      width={40}
                      height={40}
                      className="invert"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-gray-dark mb-0.5">
                    {insurance.title}
                  </h3>
                  <p className="text-xs text-gray-medium">
                    {insurance.policyNumber}
                  </p>
                </div>
              </div>
            </td>

            {/* Insurance Details Column */}
            <td className="p-4">
              <div className="flex gap-8 items-center justify-end">
                <div className="border-l border-primary pl-2">
                  <p className="text-xs text-gray-light mb-0.5">Insured amount</p>
                  <p className="text-sm md:text-base text-gray-dark">
                    {insurance.insuredAmount}
                  </p>
                </div>
                <div className="border-l border-primary pl-2">
                  <p className="text-xs text-gray-light mb-0.5">Premium</p>
                  <p className="text-sm md:text-base text-gray-dark">
                    {insurance.premium}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="group border border-primary hover:bg-primary hover:border-primary flex-shrink-0"
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

export default InsuranceSummary;
