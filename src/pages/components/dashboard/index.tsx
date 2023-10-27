import { StockCandlestickApiReturn, StockRankingApiReturn } from "../../../models";
import { ListActionCard } from "../../../components/ListActionCard";
import { ChartValues } from "../../../components/ChartValues";
import "./styles.css";

interface LandingProps {
  rankingActions: StockRankingApiReturn[];
  stockCandlestickData: StockCandlestickApiReturn[];
}

function Dashboard({
  rankingActions = [],
  stockCandlestickData = [],
}: LandingProps) {
  return (
    <div className="container-landing">
      <ListActionCard actions={rankingActions} />

      <div
        style={{
          paddingTop: 10,
          paddingInline: 40,
        }}
      >
        <ChartValues data={stockCandlestickData} />
      </div>
    </div>
  );
}

export { Dashboard };
