import { format } from "date-fns";
import { ChartCloseValues } from "../../../components/ChartCloseValues";
import { Text } from "../../../components/Text";
import { BestStocks, StockProps } from "../../../models";
import { customTextVariation } from "../../../utils/normalizes";
import { Header } from "./components/Header";
import "./style.css";

export type CloseValuesProps = {
  ticker: string;
  values: string;
};

interface DetailsProps {
  stocks: StockProps[]
  stockBest: BestStocks[];
}

function Details({ stockBest, stocks }: DetailsProps) {
  const chartSeries = stockBest.map((item) => ({
    name: item.papel,
    data: item.chartNormalizedClose,
  }));

  // TODO DETAILS
  return (
    <div className="details-screen-container">
      <Text className="details-screen-title">5 Melhores Recomendadas</Text>

      <Header data={stockBest} />

      {chartSeries.length > 1 && <ChartCloseValues series={chartSeries} />}

     
    </div>
  );
}

export { Details };
