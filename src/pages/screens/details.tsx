import {
  BestStocks,
  StockCloseBestReturnApi,
  StockTableValues,
} from "../../models";
import { Details } from "../components/details";
import * as api from "../../services/functions";
import React from "react";

function DetailsScreen() {
  const stockRanking =
    JSON.parse(localStorage.getItem("stockRanking") ?? "") ?? [];
  const bestStocks: BestStocks[] = stockRanking.splice(0, 5);
  const [tableData, setTableData] = React.useState<StockTableValues[]>([]);
  const [stockCloseBest, setStockCloseBest] = React.useState<
    StockCloseBestReturnApi[]
  >([]);

  const getStockCloseBest = async () => {
    try {
      const responseStockCloseBest = await api.getStockCloseBest();
      setStockCloseBest(responseStockCloseBest);
    } catch (error) {
      console.log("Error in get stock close best", error);
    }
  };

  const getStockValuesTable = async () => {
    try {
      const responseTableStockValues = await api.getStockValuesTable();
      setTableData(responseTableStockValues);
    } catch (error) {
      console.log("Error in get stock close best", error);
    }
  };

  React.useEffect(() => {
    Promise.all([getStockCloseBest(), getStockValuesTable()]);
  }, []);

  return (
    <Details
      tableData={tableData}
      bestStocks={bestStocks}
      stockCloseBest={stockCloseBest}
    />
  );
}

export default DetailsScreen;
