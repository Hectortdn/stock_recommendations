import { BestStocks } from "../../models";
import { Details } from "../components/details";
import * as api from "../../services/functions";
import React from "react";

function DetailsScreen() {
  const stocks =
    JSON.parse(localStorage.getItem("stockRanking") ?? "") ?? [];

  const [stockBest, setStockBest] = React.useState<BestStocks[]>([]);

  const getStockCloseBest = async () => {
    try {
      const responseStockCloseBest = await api.getBestStock();
      setStockBest(responseStockCloseBest);
    } catch (error) {
      console.log("Error in get stock close best", error);
    }
  };

  React.useEffect(() => {
    getStockCloseBest();
  }, []);

  return <Details stocks={stocks} stockBest={stockBest} />;
}

export default DetailsScreen;
