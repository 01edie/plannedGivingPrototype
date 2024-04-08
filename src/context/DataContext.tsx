import React from "react";

type Props = {};

interface FormDataType {
  projectCost: number;
  inflationRate: number;
  constructionCostInflation: number;
  annualDonationAmount: number;
  annualROI: number;
  loanInterestRate: number;
  insuranceBenefitAmount: number;
  insurancePremiumRate: number;
  yearOfPassing: number;
  clientAge: number;
  estateDonation: number;
  premiumAmount: number;
}

interface DataContextType {
  mainData: FormDataType;
  updateData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const DataContext = React.createContext<DataContextType | undefined>(undefined);

export default DataContext;
