import * as fa from "react-icons/fa";

import { ChartCloseValues } from "../../../components/ChartCloseValues";
import { CardIndicator } from "../../../components/CardInodicator";
import { customTextVariation } from "../../../utils/normalizes";
import { tickerSectorThemes } from "../../../assets/themes";
import { StockProps, TickerNews } from "../../../models";
import { NewCard } from "../../../components/NewCard";
import { Text } from "../../../components/Text";
import "./styles.css";

type TickerProps = {
  data: StockProps;
  tickerNews: TickerNews[];
};

function Ticker({ data, tickerNews }: TickerProps) {
  const { icon: Icon, color } = tickerSectorThemes[data?.sector ?? "none"];

  const {
    color: ColorVariation,
    icon: IconVariation,
    value,
  } = customTextVariation(data?.percentageVariation);
  const serie = {
    name: data?.papel,
    color: "#5d8bad",
    data: data?.stockValues.map((item) => ({ x: item.date, y: item.close })),
  };

  return (
    <div className="ticker-container-screen">
      <header>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <Icon size={24} color={color} style={{ marginRight: 10 }} />

          <Text className="ticker-label-text">{data?.papel}</Text>

          <div style={{ marginLeft: 16, alignItems: "center" }}>
            <IconVariation color={ColorVariation} />
            <Text
              style={{ color: ColorVariation, fontWeight: 600, fontSize: 18 }}
            >
              {value}
            </Text>
          </div>
        </div>

        <Text className="ticker-subtitle-text">
          {"Setor: " + data?.sectorLabel}
        </Text>
      </header>

      <div className="ticker-content-screen">
        <div style={{ display: "flex", gap: 16 }}>
          <CardIndicator
            label="Cotação"
            value={data?.cotacao}
            icon={fa.FaDollarSign}
            theme="primary"
          />
          <CardIndicator label="P/L" value={data?.pl} icon={fa.FaChartLine} />
          <CardIndicator label="ROE" value={data?.roe} icon={fa.FaChartBar} />
          <CardIndicator label="ROIC" value={data?.roic} icon={fa.FaSignal} />
          <CardIndicator
            label="Margem Líquida"
            value={data?.mrgliq * 100}
            icon={fa.FaPercentage}
          />
        </div>

        <div className="ticker-charts-container">
          {tickerNews?.length > 1 && (
            <div className="ticker-new-content">
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Noticias:</Text>

              {tickerNews.map((tickerNew) => (
                <NewCard data={tickerNew} />
              ))}
            </div>
          )}

          <ChartCloseValues series={[serie]} />
        </div>
      </div>
    </div>
  );
}
export { Ticker };
