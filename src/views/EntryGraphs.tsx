import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  AreaChart,
  Area,
  Label,
} from "recharts";
import { ContentType } from "recharts/types/component/Tooltip";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import ChartContainer from "../Components/ChartContainer";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// cost of project
// total invested saving

// let currentValue = 40000;
// let points = [];

// for (let i = 0; i < 18; i++) {
//   points.push(currentValue);
//   currentValue *= 1.03;
// }

const g1 = [
  {
    name: "2024",
    costOfProject: 4000000,
    totalInvestedSavings: 500000,
    testData: 500000,
  },
  {
    name: "2025",
    costOfProject: 4320000,
    totalInvestedSavings: 580000,
    testData: 515000,
  },
  {
    name: "2026",
    costOfProject: 4665600,
    totalInvestedSavings: 672800,
    testData: 530450,
  },
  {
    name: "2027",
    costOfProject: 5038848,
    totalInvestedSavings: 780448,
    testData: 546363,
  },
  {
    name: "2028",
    costOfProject: 5441955,
    totalInvestedSavings: 905319,
    testData: 562754,
  },
  {
    name: "2029",
    costOfProject: 5877312,
    totalInvestedSavings: 1050170,
    testData: 579637,
  },
  {
    name: "2030",
    costOfProject: 6347497,
    totalInvestedSavings: 1218198,
    testData: 597026,
  },
  {
    name: "2031",
    costOfProject: 6855297,
    totalInvestedSavings: 1413109,
    testData: 614936,
  },
  {
    name: "2032",
    costOfProject: 7403720,
    totalInvestedSavings: 1639207,
    testData: 633385,
  },
  {
    name: "2033",
    costOfProject: 7996018,
    totalInvestedSavings: 1901480,
    testData: 652386,
  },
  {
    name: "2034",
    costOfProject: 8635699,
    totalInvestedSavings: 2205717,
    testData: 671958,
  },
  {
    name: "2035",
    costOfProject: 9326555,
    totalInvestedSavings: 2558632,
    testData: 692116,
  },
  {
    name: "2036",
    costOfProject: 10072680,
    totalInvestedSavings: 2968013,
    testData: 712880,
  },
  {
    name: "2037",
    costOfProject: 10878494,
    totalInvestedSavings: 3442895,
    testData: 734266,
  },
  {
    name: "2038",
    costOfProject: 11748774,
    totalInvestedSavings: 3993758,
    testData: 756294,
  },
  {
    name: "2039",
    costOfProject: 12688676,
    totalInvestedSavings: 4632760,
    testData: 778983,
  },
  {
    name: "2040",
    costOfProject: 13703770,
    totalInvestedSavings: 5374002,
    testData: 802353,
  },
  {
    name: "2041",
    costOfProject: 15000000,
    totalInvestedSavings: 7000000,
    testData: 826423,
  },
];
const g2 = [
  {
    year: "2024",
    costOfProject: -15000000,
  },
  {
    year: "2025",
    costOfProject: -13703770,
  },
  {
    year: "2026",
    costOfProject: -12688676,
  },
  {
    year: "2027",
    costOfProject: -11748774,
  },
  {
    year: "2028",
    costOfProject: -10878494,
  },
  {
    year: "2029",
    costOfProject: -10072680,
  },
  {
    year: "2030",
    costOfProject: -9326555,
  },
  {
    year: "2031",
    costOfProject: -8635699,
  },
  {
    year: "2032",
    costOfProject: -7996018,
  },
  {
    year: "2033",
    costOfProject: -7403720,
  },
  {
    year: "2034",
    costOfProject: -6855297,
  },
  {
    year: "2035",
    costOfProject: -6347497,
  },
  {
    year: "2036",
    costOfProject: -5877312,
  },
  {
    year: "2037",
    costOfProject: -5441955,
  },
  {
    year: "2038",
    costOfProject: -5038848,
  },
  {
    year: "2039",
    costOfProject: -4665600,
  },
  {
    year: "2040",
    costOfProject: -4320000,
  },
  {
    year: "2041",
    costOfProject: -2000000,
  },
  {
    year: "2041",
    costOfProject: -1000000,
  },
  {
    year: "2042",
    costOfProject: 0,
  },
];

const g3 = [
  {
    a: 225000,
    b: 225000,
    c: 10000,
    year: "2024",
    d: 581652,
  },
  {
    a: 243000,
    b: 241875,
    c: 12700,
    year: "2025",
    d: 581652,
  },
  {
    a: 262440,
    b: 260015,
    c: 16129,
    year: "2026",
    d: 581652,
  },
  {
    a: 283435,
    b: 279516,
    c: 20483,
    year: "2027",
    d: 581652,
  },
  {
    a: 306110,
    b: 300480,
    c: 26014,
    year: "2028",
    d: 581652,
  },
  {
    a: 330598,
    b: 323016,
    c: 33038,
    year: "2029",
    d: 581652,
  },
  {
    a: 357046,
    b: 347242,
    c: 41958,
    year: "2030",
    d: 581652,
  },
  {
    a: 385610,
    b: 373286,
    c: 53287,
    year: "2031",
    d: 581652,
  },
  {
    a: 416459,
    b: 401282,
    c: 67675,
    year: "2032",
    d: 581652,
  },
  {
    a: 449776,
    b: 431378,
    c: 85947,
    year: "2033",
    d: 581652,
  },
  {
    a: 485758,
    b: 463732,
    c: 109153,
    year: "2034",
    d: 581652,
  },
  {
    a: 524618,
    b: 498512,
    c: 138624,
    year: "2035",
    d: 581652,
  },
  {
    a: 566588,
    b: 535900,
    c: 176053,
    year: "2036",
    d: 581652,
  },
  {
    a: 611915,
    b: 576092,
    c: 223587,
    year: "2037",
    d: 581652,
  },
  {
    a: 660868,
    b: 619299,
    c: 283956,
    year: "2038",
    d: 581652,
  },
  {
    a: 713738,
    b: 665747,
    c: 360624,
    year: "2039",
    d: 581652,
  },
  {
    a: 770837,
    b: 715678,
    c: 457993,
    year: "2040",
    d: 581652,
  },
  {
    a: 832504,
    b: 769354,
    c: 581652,
    year: "2041",
    d: 581652,
  },
];

const g4 = [
  {
    a: 200000,
    b: 175000,
    noy: 1,
  },
  {
    a: 256000,
    b: 192500,
    noy: 6,
  },
  {
    a: 327680,
    b: 211750,
    noy: 11,
  },
  {
    a: 419430,
    b: 232925,
    noy: 16,
  },
  {
    a: 536870,
    b: 256217,
    noy: 21,
  },
  {
    a: 536870,
    b: 281839,
    noy: 26,
  },
  {
    a: 536870,
    b: 310023,
    noy: 31,
  },
  {
    a: 536870,
    b: 341025,
    noy: 36,
  },
  {
    a: 536870,
    b: 375128,
    noy: 41,
  },
  {
    a: 536870,
    b: 375128,
    noy: 46,
  },
  {
    a: 536870,
    b: 375128,
    noy: 51,
  },
];
const renderG1ToolTip: ContentType<ValueType, NameType> = ({ payload }) => {
  const costOfProject = payload ? payload[0]?.value : undefined;
  const totalInvestedSavings = payload ? payload[1]?.value : undefined;
  const year = payload ? payload[0]?.payload?.name : undefined;
  const color1 = payload ? payload[0]?.color : undefined;
  const color2 = payload ? payload[1]?.color : undefined;
  return (
    <div
      style={{ padding: "15px 15px", backgroundColor: "#fff", fontSize: 16 }}
    >
      <div>
        Year : <span>{year}</span>
      </div>
      <div style={{ color: color1 }}>
        {/* <div> */}
        Cost of Project : <span>${costOfProject}</span>
      </div>
      <div style={{ color: color2 }}>
        {/* <div> */}
        Total Invested Savings: <span>${totalInvestedSavings}</span>
      </div>
    </div>
  );
};
const renderG2ToolTip: ContentType<ValueType, NameType> = ({ payload }) => {
  const costOfProject = payload ? payload[0]?.value : undefined;
  const year = payload ? payload[0]?.payload?.year : undefined;
  const color1 = payload ? payload[0]?.color : undefined;
  return (
    <div
      style={{ padding: "15px 15px", backgroundColor: "#fff", fontSize: 16 }}
    >
      <div>
        Year : <span>{year}</span>
      </div>
      <div style={{ color: color1 }}>
        {/* <div> */}
        Loan : <span>${Math.abs(+costOfProject!)}</span>
      </div>
    </div>
  );
};

type Props = {};

// Additional Details
const additionalDetailsG1 = (
  <>
    <Typography>
      * With cost of construction increasing faster than the rate of donation
      increases, enough savings will not be achieved for this project
    </Typography>
    <Typography>
      ** Assumptions: 8% annual construction cost increase, 3% annual increase
      in donations, and 3% annual rate of return on invested savings
    </Typography>
  </>
);

const additionalDetailsG2 = (
  <>
    <Typography>
      * It will take 21 years to complete paying off the loan, this is after
      receiving the estate donation
    </Typography>
    <Typography>
      ** Assumptions: 3% annual increase in donations, and 4% interest rate of
      loan
    </Typography>
  </>
);
const additionalDetailsG4 = (
  <>
    <Typography p={2} border="1px solid gray" borderRadius={1}>
      Where loan options peaks, loan is paid off. When charitable loan option
      peaks, insured turns 100(term to 100 policy)
    </Typography>
  </>
);

// ...

export const currencyFormatter = (value: any) => {
  let unit = "";
  let tmp = "0";
  if (value) {
    if (value >= 1000000) {
      tmp = (value / 1000000).toFixed(2);
      unit = "M";
    } else {
      tmp = (value / 1000).toFixed(0);
      unit = "K";
    }
  }

  return `$${tmp}${unit}`;
};

function EntryGraphs({}: Props) {
  const { mainData } = useContext(DataContext)!;
  return (
    <Box padding={2} pb={4} bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h4">Entry Graphs</Typography>
      <Grid container my={2} spacing={1}>
        {/* savings method */}
        <ChartContainer
          title="How long will it take to save donations for project?"
          heading="Savings Method"
          additionalDetails={additionalDetailsG1}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={g1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 26,
              }}
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="name" tickMargin={5} />
              <YAxis tickFormatter={currencyFormatter} />
              <Tooltip content={renderG1ToolTip} />
              <Line
                type="monotone"
                dataKey="costOfProject"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
                name="Cost of Project"
              />
              <Line
                name="Total Invested Savings"
                type="monotone"
                dataKey="totalInvestedSavings"
                stroke="#82ca9d"
                strokeWidth={2}
              />

              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* loan method */}
        <ChartContainer
          title="Loan Balance"
          heading="Loan Method"
          additionalDetails={additionalDetailsG2}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={450}
              height={250}
              data={g2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 26,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tickMargin={5} />
              <YAxis
                tickFormatter={(value) => {
                  let unit = "";
                  if (value) {
                    unit = "M";
                  }
                  const tmp = value
                    ? Math.abs(value / 1000000).toFixed(2)
                    : "0";
                  return `$${tmp}${unit}`;
                }}
                padding={{ bottom: 20 }}
              />
              <Tooltip content={renderG2ToolTip} />
              <Legend />

              <Bar name="Loan" dataKey="costOfProject" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* managing the premium */}
        <ChartContainer title="Managing The Premium">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={g3}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis tickMargin={8} dataKey="year" scale="band" />
              <YAxis tickFormatter={currencyFormatter} />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="c"
                stackId="a"
                name="Earnings from Savings"
                fill="#3bb13b"
              />
              <Bar
                dataKey="b"
                stackId="a"
                name="Donations"
                fill="rgba(65,62,160,1)"
              />
              <Bar
                dataKey="a"
                stackId="a"
                name="Donation Inflation"
                fill="rgba(255,115,0,1)"
              />

              <Line
                strokeWidth={2}
                type="monotone"
                dataKey="d"
                stroke="black"
                name="Insurance Premium"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* Donations in Excess of Life Insurance Premium */}
        <ChartContainer title="Donations in Excess of Life Insurance Premium">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={450}
              height={250}
              data={g1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 26,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tickMargin={5} />
              <YAxis tickFormatter={currencyFormatter} />
              <Tooltip />
              <Legend />

              <Bar
                name="Total Invested Savings"
                dataKey="totalInvestedSavings"
                fill="#3bb13b"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* Growth of Reserve Fund With and Without SOcial Impact Partnership */}
        <ChartContainer title="Donations in Excess of Life Insurance Premium">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={g3}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={currencyFormatter} />
              <Tooltip />
              <Legend />
              <Bar dataKey="b" name="Total Donation Savings" fill="#3bb13b" />
              <Bar
                dataKey="a"
                name="Life insurance Loan Savings"
                fill="#8884d8"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* Servicing Cost COmparison - Traditional Loan vs. Social Impact Partnership */}
        <ChartContainer
          title="Servicing Cost Comparison - Traditional Loan vs. Social Impact Partnership"
          additionalDetails={additionalDetailsG4}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={g4}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="noy">
                <Label
                  value="Number Of Years"
                  style={{ fontSize: 16 }}
                  // offset={-4}
                  position="bottom"
                  // fill="#0bbd52"
                />
              </XAxis>
              <YAxis tickFormatter={currencyFormatter} />
              <Tooltip />
              <Legend verticalAlign="top" height={40} />
              <Area
                type="linear"
                dataKey="a"
                // stackId="1"

                name="Loan Option - Payments"
                stroke="#82ca9d"
                fill="rgba(136,132,216,0.75)"
              />
              <Area
                type="linear"
                dataKey="b"
                // stackId="1"
                stroke="#8884d8"
                fill="rgb(104,195,123)"
                name="Social Impact Partnership Option - Premiums"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Grid>
    </Box>
  );
}

export default EntryGraphs;
