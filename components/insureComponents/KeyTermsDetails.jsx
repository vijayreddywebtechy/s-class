import React from "react";

const KeyTermsDetails = ({ policyDetails, premiumSummary }) => {
  return (
    <div className="space-y-6">
      {/* Policy Details Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-base font-medium text-gray-medium mb-6">Policy Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Policy number */}
          <div>
            <p className="text-xs text-gray-light mb-1">Policy number</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.policyNumber}</p>
          </div>
          
          {/* Policy Type */}
          <div>
            <p className="text-xs text-gray-light mb-1">Policy Type</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.policyType}</p>
          </div>
          
          {/* Policy inception date */}
          <div>
            <p className="text-xs text-gray-light mb-1">Policy inception date</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.inceptionDate}</p>
          </div>
          
          {/* Policy renewal date */}
          <div>
            <p className="text-xs text-gray-light mb-1">Policy renewal date</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.renewalDate}</p>
          </div>
          
          {/* Debit order date */}
          <div>
            <p className="text-xs text-gray-light mb-1">Debit order date</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.debitOrderDate}</p>
          </div>
          
          {/* Payment frequency */}
          <div>
            <p className="text-xs text-gray-light mb-1">Payment frequency</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.paymentFrequency}</p>
          </div>
          
          {/* Renewal period */}
          <div>
            <p className="text-xs text-gray-light mb-1">Renewal period</p>
            <p className="text-sm font-medium text-gray-medium">{policyDetails.renewalPeriod}</p>
          </div>
        </div>
      </div>

      {/* Premium Summary Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-base font-medium text-gray-medium mb-6">Premium Summary</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {premiumSummary.map((item, index) => (
            <div key={index}>
              <p className="text-xs text-gray-light mb-1">{item.label}</p>
              <p className="text-sm font-medium text-gray-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyTermsDetails;
