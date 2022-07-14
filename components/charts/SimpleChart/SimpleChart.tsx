import { Box } from "@mui/material";
import React from "react";
import { XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const SimpleChart = ({ data }: { data: any }) => {
  const newArray: { date: number; price: number }[] = [];
  data.price.forEach((value: any, index: number) => {
    newArray.push({
      date: index,
      price: value,
    });
  });

  return (
    <>
      <Box width="100%" height="100%" p={0.5}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={newArray}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" tick={false} mirror hide />
            <YAxis
              mirror
              hide
              type="number"
              domain={["dataMin", "dataMax"]}
              scale="linear"
              tick={false}
              tickMargin={0}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default SimpleChart;
