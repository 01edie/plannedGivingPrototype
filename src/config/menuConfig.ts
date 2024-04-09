import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";

//
import SsidChartIcon from "@mui/icons-material/SsidChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HubIcon from "@mui/icons-material/Hub";
import SegmentIcon from "@mui/icons-material/Segment";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import SupportIcon from "@mui/icons-material/Support";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import FunctionsIcon from "@mui/icons-material/Functions";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Dashboard from "../views/Dashboard";
import EntryGraphs from "../views/EntryGraphs";
import Calculation from "../views/Calculation";
import Bursary from "../views/Bursary";
import Contributors from "../views/Contributors";
import ExtraordinaryExpenses from "../views/ExtraordinaryExpenses";
import ReserveFund from "../views/ReserveFund";
import Charts from "../views/Charts";
import InsuranceQuote from "../views/InsuranceQuote";
import Debt from "../views/Debt";
import CalculationsLoan from "../views/CalculationsLoan";

type MenuConfig = {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  path: string;
  index?: boolean;
  element: React.ReactNode;
}[];

export const menuList = [
  {
    index: true,
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/",
    element: Dashboard,
  },
  {
    name: "Entry Graphs",
    icon: SsidChartIcon,
    path: "/entry-graphs",
    element: EntryGraphs,
  },
  {
    name: "Calculation",
    icon: CalculateIcon,
    path: "/calculation",
    element: Calculation,
  },
  {
    name: "Bursary",
    icon: AttachMoneyIcon,
    path: "/bursary",
    element: Bursary,
  },
  {
    name: "Contributors",
    icon: HubIcon,
    path: "/contributors",
    element: Contributors,
  },
  {
    name: "Extraordinary Expenses",
    icon: SegmentIcon,
    path: "/extraordinary-expenses",
    element: ExtraordinaryExpenses,
  },
  {
    name: "Reserve Fund",
    icon: FolderSpecialIcon,
    path: "/reserve-fund",
    element: ReserveFund,
  },
  {
    name: "Charts",
    icon: BarChartIcon,
    path: "/charts",
    element: Charts,
  },
  {
    name: "Insurance Quote",
    icon: SupportIcon,
    path: "/insurance-quote",
    element: InsuranceQuote,
  },
  {
    name: "Debt",
    icon: CreditScoreIcon,
    path: "/debt",
    element: Debt,
  },
  {
    name: "Calculations Loan",
    icon: FunctionsIcon,
    path: "/calculation-loan",
    element: CalculationsLoan,
  },
];

export const domSensitivePaths = ["/entry-graphs", "/charts"];
