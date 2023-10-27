import React from "react";
import ApexCharts, { ApexOptions } from "apexcharts";

import { customTextVariation } from "../../utils/normalizes";
import { tickerSectorThemes } from "../../assets/themes";
import { StockRankingApiReturn } from "../../models";
import { Text } from "../Text";
import "./styles.css";

interface ActionCardProps extends StockRankingApiReturn {
  onClickCard?: () => void;
}

function ActionCard({
  price,
  type,
  ticker,
  stockClose,
  onClickCard,
  percentageVariation,
}: ActionCardProps) {
  const chartRef = React.useRef(null);
  const { icon: Icon, color } = tickerSectorThemes[type];
  const variation = customTextVariation(percentageVariation);
  const closeValues: { [key: string]: number } = JSON.parse(stockClose);

  const options: ApexOptions = React.useMemo(
    () => ({
      chart: {
        type: "area",
        width: "100%",
        height: "100%",
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },

      series: [{ data: Object.values(closeValues), color }],
      stroke: {
        width: 1.5,
        show: true,
        dashArray: 0,
        lineCap: "butt",
        curve: "smooth",
        colors: undefined,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
      },

      xaxis: {
        categories: Object.keys(closeValues),
        show: false,
        labels: {
          show: false,
        },

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        show: false,
        labels: {
          show: false,
        },
      },

      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    }),
    [close]
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

  return (
    <div className="action-card-container" onClick={onClickCard}>
      <div className="header-action-card">
        <div className="header-action-card-ticker">
          <div className="icon-container" style={{ backgroundColor: color }}>
            {Icon && <Icon color="white" />}
          </div>
          <Text className="ticker-label">{ticker}</Text>
        </div>

        <div className="ticket-values">
          <Text className="ticker-price">
            {price} <Text style={{ fontWeight: 600, fontSize: 12 }}> BRL</Text>
          </Text>
          <Text
            className="ticker-percentageVariation"
            style={{
              color: variation.color,
            }}
          >
            {variation.value}
          </Text>
        </div>
      </div>
      <div ref={chartRef} style={{ flex: 1, height: "100%", marginTop: -16 }} />
    </div>
  );
}

export { ActionCard };
