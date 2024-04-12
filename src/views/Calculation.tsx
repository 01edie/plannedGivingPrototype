import React from "react";
import { Box, Typography } from "@mui/material";
import DataTable from "../Components/DataTable";

type Props = {};

const dataSource = [
  {
    heading: "Cost of Project",
    y_2024: 4000000,
    y_2025: 4320000,
    y_2026: 4665600,
    y_2027: 5038848,
    y_2028: 5441955,
    y_2029: 5877312,
    y_2030: 6347497,
    y_2031: 6855297,
    y_2032: 7403720,
    y_2033: 7996018,
    y_2034: 8635699,
    y_2035: 9326555,
    y_2036: 10072680,
    y_2037: 10878494,
    y_2038: 11748774,
    y_2039: 12688676,
    y_2040: 13703770,
    y_2041: 14800072,
    id: 1,
  },
  {
    heading: "Annual Donations",
    y_2024: 220000,
    y_2025: 226600,
    y_2026: 233398,
    y_2027: 240399,
    y_2028: 247611,
    y_2029: 255040,
    y_2030: 262691,
    y_2031: 270572,
    y_2032: 278689,
    y_2033: 287050,
    y_2034: 295661,
    y_2035: 304531,
    y_2036: 313667,
    y_2037: 323077,
    y_2038: 332769,
    y_2039: 342752,
    y_2040: 353035,
    y_2041: 363626,
    id: 2,
  },
  {
    heading: "Total Invested Savings",
    y_2024: 220000,
    y_2025: 246400,
    y_2026: 275968,
    y_2027: 309084,
    y_2028: 346174,
    y_2029: 387715,
    y_2030: 434240,
    y_2031: 486349,
    y_2032: 544711,
    y_2033: 610077,
    y_2034: 683286,
    y_2035: 765280,
    y_2036: 857114,
    y_2037: 959968,
    y_2038: 1075164,
    y_2039: 1204184,
    y_2040: 1348686,
    y_2041: 1510528,
    id: 3,
  },
];

const tmpCols = [];

const columns = [
  { name: "heading", defaultFlex: 1, header: "Savings/Waiting", minWidth: 200 },
  {
    name: "y_2024",
    defaultFlex: 1,
    header: "2024",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2025",
    defaultFlex: 1,
    header: "2025",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2026",
    defaultFlex: 1,
    header: "2026",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2027",
    defaultFlex: 1,
    header: "2027",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2028",
    defaultFlex: 1,
    header: "2028",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2029",
    defaultFlex: 1,
    header: "2029",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2030",
    defaultFlex: 1,
    header: "2030",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2031",
    defaultFlex: 1,
    header: "2031",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2032",
    defaultFlex: 1,
    header: "2032",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2033",
    defaultFlex: 1,
    header: "2033",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2034",
    defaultFlex: 1,
    header: "2034",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2035",
    defaultFlex: 1,
    header: "2035",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2036",
    defaultFlex: 1,
    header: "2036",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2037",
    defaultFlex: 1,
    header: "2037",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2038",
    defaultFlex: 1,
    header: "2038",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2039",
    defaultFlex: 1,
    header: "2039",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2040",
    defaultFlex: 1,
    header: "2040",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
  {
    name: "y_2041",
    defaultFlex: 1,
    header: "2041",
    minWidth: 120,
    render:({value}:any)=>`$ ${value}`
  },
];

function Calculation({}: Props) {
  return (
    <Box padding={2} pb={4} bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h5">Calculation</Typography>
      <Box my={2}>
        <DataTable data={dataSource} columns={columns} />
      </Box>
    </Box>
  );
}

export default Calculation;
