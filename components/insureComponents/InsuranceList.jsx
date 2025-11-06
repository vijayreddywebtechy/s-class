import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsuranceList = ({
  insurances,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Table */}
      <table className="w-full">
        <tbody>
          {insurances.map((insurance) => (
            <tr
              key={insurance.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {/* Insurance Info Column */}
              <td className="p-4 w-auto">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                        <Image 
                        src={insurance.iconPath} 
                        alt={`${insurance.title} Icon`} 
                        width={40} 
                        height={40} 
                        />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-gray-dark mb-0.5">
                      {insurance.title}
                    </h3>
                    <p className="text-xs text-foreground">
                      {insurance.policyNumber}
                    </p>
                  </div>
                </div>
              </td>

              {/* Insurance Details Column */}
              <td className="p-4 w-auto">
                <div className="grid grid-cols-2">
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
                </div>
              </td>

              {/* Actions Column */}
              <td className="p-4 text-right w-auto">
                <div className="flex items-center gap-3 justify-end">
                  {insurance.showClaims && (
                    <>
                      {insurance.hasClaimsData ? (
                        <Button
                          variant="ghost"
                          onClick={insurance.onClaimsClick}
                          className="text-sm font-medium uppercase text-primary hover:text-primary hover:bg-blue-100" size="md"
                        >
                          CLAIMS
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="text-sm bg-slate-200 text-gray-light border-none uppercase cursor-not-allowed !opacity-100" size="md"
                          disabled
                        >
                          CLAIMS
                        </Button>
                      )}
                    </>
                  )}
                  {insurance.showKeyTerms && (
                    <>
                      {insurance.hasKeyTermsData ? (
                        <Button
                          variant="ghost"
                          onClick={insurance.onKeyTermsClick}
                          className="text-sm font-medium uppercase text-primary hover:text-primary hover:bg-blue-100" size="md"
                        >
                          KEY TERMS
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="text-sm bg-slate-200 text-gray-light border-none uppercase cursor-not-allowed !opacity-100" size="md"
                          disabled
                        >
                          KEY TERMS
                        </Button>
                      )}
                    </>
                  )}
                  {insurance.onMenuClick && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={insurance.onMenuClick}
                      className="group border border-primary hover:bg-primary hover:border-primary flex-shrink-0"
                    >
                      <MoreVertical className="h-5 w-5 text-primary group-hover:text-white" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsuranceList;
