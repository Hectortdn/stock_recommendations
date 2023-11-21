import React from "react";

import { StockProps } from "../../models";
import { Dashboard } from "../components/dashboard";
import * as api from "../../services/functions";
import { useNavigate } from "react-router-dom";

function DashboardScreen() {
  const navigate = useNavigate();
  const [isLoadingData, setIsLoadingData] = React.useState<boolean>(false);
  const [rankingActions, setRankingActions] = React.useState<StockProps[]>([]);
  const [stockCandlestickData, setStockCandlestickData] = React.useState<
    StockProps[]
  >([]);

  const getRankingActions = React.useCallback(async () => {
    try {
      const rankingActions = await api.getRankingActions();
      setRankingActions(rankingActions);

      localStorage.setItem("stockRanking", JSON.stringify(rankingActions));
    } catch (error) {
      console.log("Error in get ranking actions", error);
    }
  }, []);

  const init = async () => {
    try {
      setIsLoadingData(true);
      const stock = await api.getStock();
      setStockCandlestickData(stock);

      await Promise.all([getRankingActions()]);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handlePressTicker = (ticker: string) => {
    navigate("/tickerDetails", { state: { ticker } });
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      {!isLoadingData ? (
        <Dashboard
          onPressTicker={handlePressTicker}
          rankingActions={rankingActions}
          stockCandlestickData={stockCandlestickData}
        />
      ) : (
        <div
          style={{
            flex: 1,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Carregando....</h1>
        </div>
      )}
    </div>
  );
}

export default DashboardScreen;
