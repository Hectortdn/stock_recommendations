import { TableCloseValues } from "../../../components/TableCloseValues";
import { ListActionCard } from "../../../components/ListActionCard";
import { ChartValues } from "../../../components/ChartValues";
import { Text } from "../../../components/Text";
import { StockProps } from "../../../models";
import "./styles.css";
import { TableCorrelations } from "../../../components/TableCorrelations";

interface LandingProps {
  rankingActions: StockProps[];
  stockCandlestickData: StockProps[];
  onPressTicker: (ticker: string) => void;
}

function Dashboard({
  onPressTicker,
  rankingActions = [],
  stockCandlestickData = [],
}: LandingProps) {
  return (
    <div className="container-landing">
      <ListActionCard actions={rankingActions} onPressCard={onPressTicker} />

      <div
        style={{
          flex: 1,
          gap: 24,
          paddingTop: 10,
          display: "flex",
          paddingInline: 40,
          flexDirection: "column",
        }}
      >
        {!!stockCandlestickData.length && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Text className="subtitle">Análise Histórica:</Text>
            <ChartValues data={stockCandlestickData} />
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Text className="subtitle">Matriz de Correlação </Text>

          <TableCorrelations />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Text className="subtitle">Visão Atual dos indicadores:</Text>
          <TableCloseValues data={stockCandlestickData} />
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
