import { api } from "../api";
import {
  StockProps,
  BestStocks,
  StockTableValues,
  StockCandlestickApiReturn,
  TickerNews,
} from "../../models";

export async function getRankingActions(): Promise<StockProps[]> {
  const responseRanking = await api.get("/api/stock-ranking");
  const { data } = responseRanking.data;

  return data;
}

export async function getStock(): Promise<StockProps[]> {
  const responseStock = await api.get("/api/stock");
  const { data } = responseStock.data;

  return data;
}

export async function getStockCandlestickData(): Promise<
  StockCandlestickApiReturn[]
> {
  const response = await api.get("/api/stock-candlestick-data");

  return response.data;
}

export async function getBestStock(): Promise<BestStocks[]> {
  const response = await api.get("/api/best-stock");
  return response.data;
}

export async function getStockValuesTable(): Promise<StockTableValues[]> {
  const response = await api.get("/api/stock-table-values");
  return response.data;
}

export async function getTickerData(ticker: string): Promise<StockProps> {
  const response = await api.get(`/api/stock/${ticker}`);
  return response.data;
}

export async function getTickerNews(ticker: string): Promise<TickerNews> {
  const response = await api.get(`/api/stock/${ticker}/news`);
  return response.data;
}
