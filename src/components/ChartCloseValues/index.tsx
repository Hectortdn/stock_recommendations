import React from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import "./styles.css";

interface ChartCloseValuesProps {
  series: {
    name: string;
    data: { x: string; y: number }[];
  }[];
}

function ChartCloseValues({ series = [] }: ChartCloseValuesProps) {
  const chartRef = React.useRef(null);

  const options: ApexOptions = React.useMemo(
    (): ApexOptions => ({
      series: series,
      chart: {
        type: "area",
        height: '400',
        animations: {
          animateGradually: {
            enabled: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        fontSize: "10",
        position: "top",
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Fechamento Normalizado",
      },

      yaxis: {
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      stroke: {
        width: 1.5,
      },
      tooltip: {
        shared: false,
      },
    }),
    [series]
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
    <div
      className="chart-close-values"
      ref={chartRef}
      style={{ flex: 1 }}
    />
  );
}

export { ChartCloseValues };
