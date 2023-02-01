import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toFarsiNumber } from "../../../utils/toFarsiDigits";

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class ColumnChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-bar-chart-s47i2";

  render() {
    return (
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 35,
            right: 0,
            left: -20,
            bottom: -10,
          }}
        >
          <CartesianGrid stroke="rgba(0,0,0,0.1)" vertical={false} />
          <XAxis
            tickFormatter={(value) => toFarsiNumber(value)}
            dataKey="name"
            style={{
              fontSize: ".5rem",
              fontFamily: "Vazirmatn",
            }}
          />
          <YAxis
            tickFormatter={(value) =>
              " " +
              toFarsiNumber(
                new Intl.NumberFormat("en", {
                  notation: "standard",
                  compactDisplay: "short",
                }).format(value)
              )
            }
            style={{
              margin: "0",
              fontSize: ".5rem",
              fontFamily: "Vazirmatn",
            }}
          />
          {/* <Tooltip /> */}
          {/* <Legend wrapperStyle={{ fontSize: "10px" }} /> */}
          <Bar
            name="واریز"
            style={{
              fontSize: ".5rem",
              fontFamily: "Vazirmatn",
            }}
            barSize={6}
            dataKey="pv"
            stackId="a"
            fill="#8480f1"
          />
          <Bar
            name="برداشت"
            barSize={6}
            dataKey="uv"
            stackId="a"
            fill="#2ac4c4"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
