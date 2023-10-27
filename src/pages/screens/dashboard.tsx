import React from "react";

import { StockCandlestickApiReturn, StockRankingApiReturn } from "../../models";
import { Dashboard } from "../components/dashboard";
import * as api from "../../services/functions";

function DashboardScreen() {
  const [isLoadingData, setIsLoadingData] = React.useState<boolean>(false);
  const [rankingActions, setRankingActions] = React.useState<
    StockRankingApiReturn[]
  >([]);
  const [stockCandlestickData, setStockCandlestickData] = React.useState<
    StockCandlestickApiReturn[]
  >([]);

  const getRankingActions = React.useCallback(async () => {
    try {
      const rankingActions: StockRankingApiReturn[] =
        await api.getRankingActions();
      setRankingActions(rankingActions);

      localStorage.setItem("stockRanking", JSON.stringify(rankingActions));
    } catch (error) {
      console.log("Error in get ranking actions", error);
    }
  }, []);

  const fetchStockCandlestickData = React.useCallback(async () => {
    try {
      const responseStockCandlestick = await api.getStockCandlestickData();
      setStockCandlestickData(responseStockCandlestick);
    } catch (error) {
      console.log("Error in get ranking actions", error);
    }
  }, []);

  const init = async () => {
    try {
      setIsLoadingData(true);

      await Promise.all([getRankingActions(), fetchStockCandlestickData()]);
    } finally {
      setIsLoadingData(false);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      {!isLoadingData ? (
        <Dashboard
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
