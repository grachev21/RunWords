import style from "./styles.module.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";


const BarChartWords = ({month}) => {
  return (
    <ResponsiveContainer
      className={style.Container + " limiter"}
      width={"100%"}
      height={400}>
      <BarChart
        data={month}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#2b9cd5"
          // activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWords;
