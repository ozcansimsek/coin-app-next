import {
  Box,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { format } from "date-fns";
import React, { ReactNode, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { CurveType } from "recharts/types/shape/Curve";
import { useAppSelector } from "store/hooks";
import { globalCurrencyCode } from "store/slices/globalCurrencyCodeSlice";
import { formattedCurrentPrice } from "utils/formattedCurrentPrice";

const Chart = ({ coin }: { coin: string }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>("7");
  const [curveType, setCurveType] = useState<string>("basis");
  const daysArray = ["1", "7", "14", "30", "90", "180", "360", "720", "max"];
  const theme = useTheme();
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  const selectedCurrency = useAppSelector(globalCurrencyCode);

  const curveTypes: { [key: string]: string } = {
    basis: "Basis",
    basisClosed: "Basis Closed",
    basisOpen: "Basis Open",
    linear: "Linear",
    linearClosed: "Linear Closed",
    monotone: "Monotone",
    monotoneX: "Monotone X",
    monotoneY: "Monotone Y",
    natural: "Natural",
    step: "Step",
    stepAfter: "Step After",
    stepBefore: "Step Before",
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any;
    label?: any;
  }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            opacity: "70%",
            backgroundColor: theme.palette.grey[800],
            p: 0.5,
            borderRadius: 2,
          }}
        >
          <Typography>{format(label, "dd.MM.yyyy HH:mm")}</Typography>
          <Typography>
            {formattedCurrentPrice(selectedCurrency, payload[0].value)}
          </Typography>
        </Box>
      );
    }

    return null;
  };

  const formatXaxisTick = (value: Date): string => {
    return typeof value === "object"
      ? format(value, selectedDay === "1" ? "HH:mm" : "dd.MM.yyyy")
      : "";
  };

  const handleCurveTypeChange = (event: SelectChangeEvent) =>
    setCurveType(event.target.value);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=USD&days=${selectedDay}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newArray: { date: Date; price: number }[] = [];
        data.prices.forEach((value: any, index: number) => {
          newArray.push({
            date: new Date(value[0]),
            price: value[1],
          });
        });
        setChartData(newArray);
      })
      .catch((err) => console.log(err));
    return () => {
      setChartData([]);
    };
  }, [coin, selectedDay]);

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center">
        <ToggleButtonGroup size="small" sx={{ height: 30 }}>
          {daysArray.map((day: string, index: number) => {
            return (
              <ToggleButton
                key={"day" + day}
                value={day}
                selected={selectedDay === day}
                onClick={() => setSelectedDay(day)}
                aria-selected={selectedDay === day}
              >
                {day}
                {day === "max" ? "" : "d"}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

        <Box width={200} ml="auto">
          <InputLabel htmlFor="curve-type-select">Curve Type</InputLabel>
          <Select
            size="small"
            id="curve-type-select"
            value={curveType}
            onChange={handleCurveTypeChange}
            label="Rows"
          >
            {Object.keys(curveTypes).map((value: string): ReactNode => {
              return (
                <MenuItem key={"option" + value} value={value}>
                  {curveTypes[value]}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </Box>

      <Box width="%100" height={300}>
        {chartData.length === 0 ? (
          <CircularProgress />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" strokeOpacity="15%" />
              <XAxis
                dataKey="date"
                tickFormatter={(value: Date) => formatXaxisTick(value)}
              />
              <YAxis
                type="number"
                domain={["dataMin", "dataMax"]}
                scale="linear"
                tickFormatter={(value: number) => formatter.format(value)}
              />
              <Tooltip content={CustomTooltip} />
              <Area
                type={curveType as CurveType}
                dataKey="price"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Brush
                fill={"#3a3a3a"}
                dataKey="date"
                height={40}
                stroke="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Box>
    </>
  );
};

export default Chart;
