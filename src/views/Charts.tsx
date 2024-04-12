import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import ChartContainer from "../Components/ChartContainer";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Cell,
  PieLabel,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ActiveShape } from "recharts/types/util/types";
import { currencyFormatter } from "./EntryGraphs";
const data = [
  { name: "Restricted Funds", value: 2024432.84 },
  { name: "Unrestricted Funds", value: 2290508.11 },
  { name: "Insurance Premium", value: 60732.99 },
  { name: "Expenses", value: 119405.23 },
];
const data2 = [
  { name: "Annual Return on Investment", value: 110638.27 },
  { name: "Insurance Premium", value: 60632.99 },
  { name: "Expenses", value: 119405.23 },
  { name: "Extraordinary Expenses", value: 0 },
];

const l1 = [
  {
    a: 1300000,
    b: 2750000,
    no: 1,
  },
  {
    a: 1315000,
    b: 2697500,
    no: 2,
  },
  {
    a: 1330000,
    b: 2645000,
    no: 3,
  },
  {
    a: 1345000,
    b: 2592500,
    no: 4,
  },
  {
    a: 1360000,
    b: 2540000,
    no: 5,
  },
  {
    a: 1375000,
    b: 2487500,
    no: 6,
  },
  {
    a: 1390000,
    b: 2435000,
    no: 7,
  },
  {
    a: 1405000,
    b: 2382500,
    no: 8,
  },
  {
    a: 1420000,
    b: 2330000,
    no: 9,
  },
  {
    a: 1435000,
    b: 2277500,
    no: 10,
  },
  {
    a: 1450000,
    b: 2225000,
    no: 11,
  },
  {
    a: 1465000,
    b: 2172500,
    no: 12,
  },
  {
    a: 1480000,
    b: 2120000,
    no: 13,
  },
  {
    a: 1495000,
    b: 2067500,
    no: 14,
  },
  {
    a: 1510000,
    b: 2015000,
    no: 15,
  },
  {
    a: 1525000,
    b: 1962500,
    no: 16,
  },
  {
    a: 1540000,
    b: 1910000,
    no: 17,
  },
  {
    a: 1555000,
    b: 1857500,
    no: 18,
  },
  {
    a: 1570000,
    b: 1805000,
    no: 19,
  },
  {
    a: 1585000,
    b: 1752500,
    no: 20,
  },
];

const l2 = [
  {
    a: 130000,
    b: 275000,
    no: 1,
  },
  {
    a: 130000,
    b: 363125,
    no: 2,
  },
  {
    a: 220000,
    b: 451250,
    no: 3,
  },
  {
    a: 220000,
    b: 539375,
    no: 4,
  },
  {
    a: 220000,
    b: 627500,
    no: 5,
  },
  {
    a: 220000,
    b: 715625,
    no: 6,
  },
  {
    a: 220000,
    b: 803750,
    no: 7,
  },
  {
    a: 220000,
    b: 891875,
    no: 8,
  },
  {
    a: 220000,
    b: 980000,
    no: 9,
  },
  {
    a: 220000,
    b: 1068125,
    no: 10,
  },
  {
    a: 220000,
    b: 1156250,
    no: 11,
  },
  {
    a: 220000,
    b: 1244375,
    no: 12,
  },
  {
    a: 220000,
    b: 1332500,
    no: 13,
  },
  {
    a: 220000,
    b: 1420625,
    no: 14,
  },
  {
    a: 220000,
    b: 1508750,
    no: 15,
  },
  {
    a: 220000,
    b: 1596875,
    no: 16,
  },
  {
    a: 220000,
    b: 1685000,
    no: 17,
  },
  {
    a: 220000,
    b: 1773125,
    no: 18,
  },
  {
    a: 220000,
    b: 1861250,
    no: 19,
  },
  {
    a: 330000,
    b: 1949375,
    no: 20,
  },
  {
    a: 70000,
    b: 2037500,
    no: 21,
  },
  {
    a: 70000,
    b: 2125625,
    no: 22,
  },
  {
    a: 70000,
    b: 2213750,
    no: 23,
  },
  {
    a: 70000,
    b: 2301875,
    no: 24,
  },
  {
    a: 70000,
    b: 2390000,
    no: 25,
  },
  {
    a: 70000,
    b: 2478125,
    no: 26,
  },
  {
    a: 70000,
    b: 2566250,
    no: 27,
  },
  {
    a: 70000,
    b: 2654375,
    no: 28,
  },
  {
    a: 70000,
    b: 2742500,
    no: 29,
  },
  {
    a: 70000,
    b: 2830625,
    no: 30,
  },
  {
    a: 70000,
    b: 2918750,
    no: 31,
  },
  {
    a: 70000,
    b: 3006875,
    no: 32,
  },
  {
    a: 70000,
    b: 3095000,
    no: 33,
  },
  {
    a: 70000,
    b: 3183125,
    no: 34,
  },
  {
    a: 70000,
    b: 3271250,
    no: 35,
  },
  {
    a: 70000,
    b: 3359375,
    no: 36,
  },
  {
    a: 70000,
    b: 3447500,
    no: 37,
  },
  {
    a: 70000,
    b: 3535625,
    no: 38,
  },
  {
    a: 70000,
    b: 3623750,
    no: 39,
  },
  {
    a: 70000,
    b: 3711875,
    no: 40,
  },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel: PieLabel<any> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderActiveShape1: ActiveShape<PieSectorDataItem> = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text> */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`$${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill={fill}
      >
        {`${payload.name}(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const renderActiveShape2: ActiveShape<PieSectorDataItem> = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`$${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

type Props = {};

function Charts({}: Props) {
  const [pieState1, setPieState1] = useState({
    activeIndex: 0,
  });
  const [pieState2, setPieState2] = useState({
    activeIndex: 0,
  });
  const onPie1Enter = (_: any, index: number) => {
    setPieState1({
      activeIndex: index,
    });
  };
  const onPie2Enter = (_: any, index: number) => {
    setPieState2({
      activeIndex: index,
    });
  };

  const additionalDetailsL1 = (
    <Typography>
      Charitable loan calculations includes the payment of the premium by the
      charity, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
      corporis.
    </Typography>
  );

  return (
    <Box padding={2} pb={4} bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h5">Charts</Typography>
      <Grid container my={2} spacing={1}>
        {/* EXPENSES/TOTAL VALUE OF THE ACCOUNT */}
        <ChartContainer
          chartHeight={450}
          title="EXPENSES/TOTAL VALUE OF THE ACCOUNT"
          id={7}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                activeIndex={pieState1.activeIndex}
                activeShape={renderActiveShape1}
                onMouseEnter={onPie1Enter}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* EXPENSES/TOTAL ANNUAL CASHFLOW EXCLUDING DONATIONS */}
        <ChartContainer
          chartHeight={450}
          title="EXPENSES/TOTAL ANNUAL CASHFLOW EXCLUDING DONATIONS"
          id={8}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                activeIndex={pieState2.activeIndex}
                activeShape={renderActiveShape2}
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={170}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPie2Enter}
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        {/* Time Value of a Donated Life Insurance Policy Versus SIP Option */}
        <ChartContainer
          title="Time Value of a Donated Life Insurance Policy Versus SIP Option"
          additionalDetails={additionalDetailsL1}
          id={9}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={l1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 26,
              }}
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="no" tickMargin={5} />
              <YAxis padding={{ top: 30 }} tickFormatter={currencyFormatter} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="a"
                stroke="#ff3f5b"
                activeDot={{ r: 8 }}
                strokeWidth={2}
                name="Variable 1"
              />
              <Line
                name="Variable 2"
                type="monotone"
                dataKey="b"
                strokeWidth={2}
                stroke="#8884d8"
              />

              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartContainer id={10}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={l2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 26,
              }}
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="no" tickMargin={5} />
              <YAxis padding={{ top: 30 }} tickFormatter={currencyFormatter} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="a"
                stroke="#ff3f5b"
                activeDot={{ r: 8 }}
                strokeWidth={2}
                name="Variable 1"
              />
              <Line
                name="Variable 2"
                type="monotone"
                dataKey="b"
                strokeWidth={2}
                stroke="#8884d8"
              />

              {/* <Legend /> */}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Grid>
    </Box>
  );
}

export default Charts;
