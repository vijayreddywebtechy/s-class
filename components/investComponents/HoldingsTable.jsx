import React from "react";
import Image from "next/image";

const HoldingsTable = ({ holdings }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <tbody>
          {holdings.map((holding) => (
            <tr
              key={holding.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0"
            >
              {/* Holding Info Column */}
              <td className="p-4 w-auto">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                      <Image
                        src={holding.iconPath}
                        alt={`${holding.title} Icon`}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-gray-dark mb-0.5">
                      {holding.title}
                    </h3>
                    <p className="text-xs text-gray-medium">
                      {holding.accountNumber}
                    </p>
                  </div>
                </div>
              </td>

              {/* Holdings Details Columns */}
              <td className="p-4 w-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-gray-light mb-0.5">Market Value</p>
                    <p className="text-sm md:text-base text-gray-dark">
                      {holding.marketValue}
                    </p>
                  </div>
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-gray-light mb-0.5">Gains/Loss</p>
                    <p className="text-sm md:text-base text-gray-dark">
                      {holding.gainsLoss}
                    </p>
                  </div>
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-gray-light mb-0.5">Percentage Change</p>
                    <p className="text-sm md:text-base text-gray-dark">
                      {holding.percentageChange}
                    </p>
                  </div>
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-gray-light mb-0.5">Units</p>
                    <p className="text-sm md:text-base text-gray-dark">
                      {holding.units}
                    </p>
                  </div>
                  <div className="border-l border-primary pl-2">
                    <p className="text-xs text-gray-light mb-0.5">Price</p>
                    <p className="text-sm md:text-base text-gray-dark">
                      {holding.price}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
