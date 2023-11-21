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

export type BestStocks = {
  chartNormalizedClose: {
    x: string;
    y: number;
  }[];
} & Pick<StockProps, "cotacao" | "percentageVariation" | "papel" | "sector">;

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

export interface StockProps {
  cotacao: number;
  evebit: number;
  liq2m: number;
  papel: string;
  mrgliq: string;
  sector: TickerSectorTypes;
  pl: number;
  roe: number;
  news: any[];
  roic: number;
  patrliq: number;
  percentageVariation: number;
  sectorLabel: string;
  stockValues: {
    date: string;
    low: number;
    high: number;
    open: number;
    close: number;
  }[];
}

export interface TickerNews {
  date: string;
  desc: string;
  img: string;
  link: string;
  media: string;
  title: string;
  datetime: string;
}
