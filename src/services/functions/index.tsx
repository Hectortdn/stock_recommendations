import { api } from "../api";
import {
  StockRankingApiReturn,
  StockCloseBestReturnApi,
  StockCandlestickApiReturn,
  StockTableValues,
} from "../../models";

export async function getRankingActions(): Promise<StockRankingApiReturn[]> {
  const responseRanking = await api.get("/api/stock-ranking");
  return responseRanking.data;
}

export async function getStockCandlestickData(): Promise<
  StockCandlestickApiReturn[]
> {
  const response = await api.get("/api/stock-candlestick-data");

  return response.data;
}

export async function getStockCloseBest(): Promise<StockCloseBestReturnApi[]> {
  const response = await api.get("/api/stock-chart-line-data");
  return response.data;
}

export async function getStockValuesTable(): Promise<StockTableValues[]> {
  const response = await api.get("/api/stock-table-values");
  return response.data;
}
