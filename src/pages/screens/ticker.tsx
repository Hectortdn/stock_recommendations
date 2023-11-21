import React from "react";
import { useLocation } from "react-router-dom";

import { getTickerData, getTickerNews } from "../../services/functions";
import { Ticker } from "../components/ticker";
import { StockProps, TickerNews } from "../../models";

function TickerScreen() {
  const params = useLocation().state;
  const [tickerData, setTickerData] = React.useState<StockProps>();
  const [news, setNews] = React.useState<TickerNews>();

  async function fetchNews() {
    try {
      const response = await getTickerNews(params.ticker);
      setNews(response);
    } catch (error) {
      console.log("Error in get News", error);
    }
  }

  async function fetchTickerData() {
    try {
      if (params.ticker) {
        const response = await getTickerData(params.ticker);
        setTickerData(response);
      }
    } catch (error) {
      console.log(`Error in get Ticker ${params.ticker}`, error);
    }
  }

  async function init() {
    Promise.all([fetchTickerData(), fetchNews()]);
  }

  React.useEffect(() => {
    init();
  }, []);

  return <Ticker data={tickerData} tickerNews={news} />;
}

export { TickerScreen };
