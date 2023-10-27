import React from "react";
import ApexCharts, { ApexOptions } from "apexcharts";

import { customTextVariation } from "../../utils/normalizes";
import { getIconsBySector } from "../../utils/functions";
import { StockCandlestickApiReturn } from "../../models";
import { Text } from "../Text";
import "./styles.css";

interface ChartValuesProps {
  data: StockCandlestickApiReturn[];
}

function ChartValues({ data }: ChartValuesProps) {
  const chartRef = React.useRef(null);
  const [tickerUnderAnalysis, setTickerUnderAnalysis] =
    React.useState<StockCandlestickApiReturn>(data[0]);

  const onClickListIndex = (index: number) => {
    setTickerUnderAnalysis(data[index]);
  };

  const options: ApexOptions = React.useMemo(
    () => ({
      series: [
        {
          name: "line",
          type: "line",
          data: tickerUnderAnalysis?.chartClose,
        },
        {
          name: "candle",
          type: "candlestick",
          data: tickerUnderAnalysis?.chartValues,
        },
      ],
      chart: {
        height: "80%",
        type: "line",
        animations: {
          dynamicAnimation: {
            enabled: false,
          },
          animateGradually: {
            enabled: false,
          },
        },
        toolbar: { show: false },
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
    <div className="close-values-chart">
      <div style={{ flex: 1 }}>
        <div className="header-chart">
          <Text className="ticker">{tickerUnderAnalysis?.ticker}</Text>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Text className="ticker-price-chart">
              {tickerUnderAnalysis?.price}
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

      <div style={{ flex: 0.3 }}>
        <div className="header-list">
          <Text>Tickers</Text>
        </div>
        <div className="list-tickers">
          {data.map((item, index) => {
            const { icon: Icon, ...itemVariation } = customTextVariation(
              item.percentageVariation
            );

            const { color, icon: IconSector } = getIconsBySector(item?.type);
            return (
              <div
                key={index}
                className={`list-item ${
                  tickerUnderAnalysis?.ticker === item.ticker &&
                  "list-item-active"
                }`}
                onClick={() => onClickListIndex(index)}
              >
                <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
                  <IconSector color={color} />
                  <Text>{item?.ticker}</Text>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <Text>{item?.price}</Text>
                  <div>
                    <Text style={{ color: itemVariation.color }}>
                      {itemVariation?.value}
                    </Text>

                    <Icon color={itemVariation.color} />
                  </div>
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
