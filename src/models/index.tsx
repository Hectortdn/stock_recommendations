export type TickerSectorTypes =
  | "energyStocks"
  | "paperPulpStocks"
  | "agriDiverseStocks"
  | "miningMetalsStocks"
  | "animalProteinStocks";

export type StockRankingApiReturn = {
  price: number;
  score: number;
  ticker: string;
  stockClose: string;
  type: TickerSectorTypes;
  percentageVariation: number;
};

export type StockCandlestickApiReturn = {
  price: number;
  ticker: string;
  type: TickerSectorTypes;
  percentageVariation: number;
  chartClose: { x: string; y: number }[];
  chartValues: { x: string; y: number[] }[];
};

export type BestStocks = Omit<StockRankingApiReturn, "score">;

export type StockCloseBestReturnApi = {
  data: { x: string; y: number }[];
  name: string;
};

export type StockTableValues = {
  low: number;
  high: number;
  open: number;
  close: number;
  price: number;
  date: string;
  ticket: string;
  percentageVariation: number;
};
