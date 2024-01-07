import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import Loading from "@/common/loading";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import jalaliMoment from "jalali-moment";
import {
  toLocalDateStringMiddle,
  toLocalDateStringMonth,
} from "@/utils/toLocalDate";
import HoverCard from "@/common/hoverCard";

const SalesChart = ({ isLoading, payments }) => {
  if (isLoading) return <Loading />;

  const currentDate = jalaliMoment();
  const startOfMonth = currentDate.clone().startOf("jMonth");
  const endOfMonth = currentDate.clone().endOf("jMonth");

  const filteredPayments = payments.filter((payment) => {
    const paymentDate = jalaliMoment(payment.createdAt, "YYYY-M-D");
    return paymentDate.isBetween(startOfMonth, endOfMonth, null, "[]");
  });

  const dataset = filteredPayments.map((payment) => ({
    amount: payment.amount,
    month: toLocalDateStringMiddle(payment.createdAt),
  }));

  const valueFormatter = (value) => `${toPersianNumbersWithComma(value)} تومان`;

  return (
    <HoverCard
      sx={{
        width: 1,
        height: 320,
      }}
      defaultElevation={4}
      hoveredElevation={10}
    >
      <BarChart
        dataset={dataset.length ? dataset : [{ amount: 0, month: "" }]}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            label: `فروش روزانه ماه ${toLocalDateStringMonth(currentDate)}`,
          },
        ]}
        series={[{ dataKey: "amount", type: "bar", valueFormatter }]}
        sx={{
          [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
            textAnchor: "middle",
          },
          "& .MuiChartsXAxis-tickLabel": {
            fontSize: 500,
          },
          [`.${axisClasses.left} .${axisClasses.tick}`]: {
            display: "none",
          },
          mb: 1,
        }}
      />
    </HoverCard>
  );
};

export default SalesChart;
