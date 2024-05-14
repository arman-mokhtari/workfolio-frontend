import { LineChart } from "@mui/x-charts/LineChart";
import { axisClasses } from "@mui/x-charts";

import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";

const AverageSales = ({ isLoading, payments }) => {
  if (isLoading) return <Loading />;
  const dataset = payments.map((payment, index) => ({
    month: payment.amount,
    amount: index,
  }));
  return (
    <HoverCard
      sx={{
        width: 1,
        height: 320,
      }}
      defaultElevation={4}
      hoveredElevation={10}
    >
      <LineChart
        dataset={dataset.length ? dataset : [{ amount: 0, month: "" }]}
        xAxis={[
          {
            dataKey: "amount",
            label: `میانگین فروش`,
          },
        ]}
        series={[
          {
            dataKey: "month",
            color: "#fdb462",
          },
        ]}
        sx={{
          [`.${axisClasses.left} .${axisClasses.tick}`]: {
            display: "none",
          },
          [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
            textAnchor: "middle",
          },
          mb: 1,
        }}
      />
    </HoverCard>
  );
};

export default AverageSales;
