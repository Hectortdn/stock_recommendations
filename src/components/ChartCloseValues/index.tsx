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
        height: "400",
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
        fontSize: "12",
        position: "top",
        horizontalAlign: "center",
      },
      markers: {
        size: 0,
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
    <div ref={chartRef} style={{ flex: 1 }} className="chart-close-values" />
  );
}

export { ChartCloseValues };
