import React from "react";
import ApexCharts, { ApexOptions } from "apexcharts";

import { customTextVariation } from "../../utils/normalizes";
import { getIconsBySector } from "../../utils/functions";
import {  StockProps } from "../../models";
import { Text } from "../Text";
import "./styles.css";

interface ChartValuesProps {
  data: StockProps[];
}

interface ChartProps {
  x: string;
  y: number | number[];
}

const HEIGHT_CHART = 620;

function getChartValues(data: StockProps["stockValues"]) {
  const chartValues = [] as ChartProps[];
  const chartCloseValues = [] as ChartProps[];

  data.forEach((item) => {
    chartCloseValues.push({
      x: item.date,
      y: item.close,
    });
    chartValues.push({
      x: item.date,
      y: [item.open, item.high, item.low, item.close],
    });
  });

  return { chartValues, chartCloseValues };
}

function ChartValues({ data }: ChartValuesProps) {
  const chartRef = React.useRef(null);
  const [tickerUnderAnalysis, setTickerUnderAnalysis] =
    React.useState<StockProps>(data[0]);

  const { chartCloseValues, chartValues } = getChartValues(
    tickerUnderAnalysis.stockValues
  );

  const onClickListIndex = (index: number) => {
    setTickerUnderAnalysis(data[index]);
  };

  const options: ApexOptions = React.useMemo(
    () => ({
      series: [
        {
          name: "line",
          type: "line",
          data: chartCloseValues,
        },
        {
          name: "candle",
          type: "candlestick",
          data: chartValues,
        },
      ],

      chart: {
        height: "85%",
        type: "line",
        animations: {
          dynamicAnimation: {
            enabled: false,
          },
          animateGradually: {
            enabled: false,
          },
        },
        toolbar: { tools: { reset: true } },
      },
      stroke: {
        width: [0.5, 3],
      },

      yaxis: {
        tooltip: {
          enabled: true,
        },
      },

      legend: {
        show: false,
      },

      plotOptions: {
        candlestick: {
          colors: {
            upward: "#07bb62",
            downward: "#f05284",
          },
        },
      },

      tooltip: {
        shared: true,
        custom: [
          ({
            seriesIndex,
            dataPointIndex,
            w,
          }: {
            seriesIndex: number;
            dataPointIndex: number;
            w: any;
          }) => {
            return w.globals.series[seriesIndex][dataPointIndex];
          },
          ({
            seriesIndex,
            dataPointIndex,
            w,
          }: {
            seriesIndex: number;
            dataPointIndex: number;
            w: any;
          }) => {
            const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
            return `
            <div class="custom-tooltip">
              <div><b>Open:</b> ${open}</div>
              <div><b>High:</b> ${high}</div>
              <div><b>Low:</b> ${low}</div>
              <div><b>Close:</b> ${close}</div>
            </div>
          `;
          },
        ],
      },

      xaxis: {
        type: "datetime",
      },
    }),
    [tickerUnderAnalysis]
  );

  React.useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [options]);

  React.useEffect(() => {
    setTickerUnderAnalysis(data[0]);
  }, [data]);

  const { icon: Icon, ...variation } = customTextVariation(
    tickerUnderAnalysis?.percentageVariation
  );

  return (
    <div className="close-values-chart" style={{ height: HEIGHT_CHART }}>
      <div style={{ flex: 1 }}>
        <div className="header-chart">
          <Text className="ticker">{tickerUnderAnalysis?.papel}</Text>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Text className="ticker-price-chart">
              {tickerUnderAnalysis?.cotacao}
              <Text style={{ fontWeight: 600, fontSize: 14 }}>/BRL</Text>
            </Text>
            {tickerUnderAnalysis?.percentageVariation && (
              <div style={{ display: "flex", alignItems: "center" }}>
                {Icon && <Icon color={variation.color} />}
                <Text
                  style={{
                    fontSize: 16,
                    color: variation.color,
                  }}
                >
                  ({variation.value})
                </Text>
              </div>
            )}
          </div>
        </div>
        <div ref={chartRef} />
      </div>

      <div style={{ flex:0.15}}>
        <div className="list-tickers" style={{ height: HEIGHT_CHART }}>
          <div className="header-list">
            <Text style={{ fontWeight: 500, fontSize: 16 }}>Ações</Text>
          </div>

          {data.map((item, index) => {
      
            const { color, icon: IconSector } = getIconsBySector(item?.sector);
            return (
              <div
                key={index}
                className={`list-item ${
                  tickerUnderAnalysis?.papel === item.papel &&
                  "list-item-active"
                }`}
                onClick={() => onClickListIndex(index)}
              >
                <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
                  <IconSector color={color} />
                  <Text>{item?.papel}</Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { ChartValues };
