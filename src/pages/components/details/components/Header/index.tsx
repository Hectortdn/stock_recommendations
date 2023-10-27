import { tickerSectorThemes } from "../../../../../assets/themes";
import { Text } from "../../../../../components/Text";
import { BestStocks } from "../../../../../models";
import { customTextVariation } from "../../../../../utils/normalizes";

interface HeaderProps {
  data: BestStocks[];
}

function Header({ data }: HeaderProps) {
  return (
    <div className="details-header-container">
      {data.map((item) => {
        const { color, value } = customTextVariation(item.percentageVariation);
        const { color: IconColor, icon: Icon } = tickerSectorThemes[item.type];
        return (
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ gap: 8, display: "flex", alignItems: "center" }}>
                <Icon color={IconColor} />

                <Text style={{ fontWeight: 600, fontSize: 16 }}>
                  {item.ticker}
                </Text>
              </div>

              <Text style={{ fontWeight: 400, fontSize: 14 }}>
                Preço:{" "}
                <Text style={{ fontWeight: 400, fontSize: 16 }}>
                  R$ {item.price}
                </Text>
              </Text>
              <Text style={{ fontWeight: 400, fontSize: 14 }}>
                Variação Percentual:{" "}
                <Text style={{ fontWeight: 400, fontSize: 14, color: color }}>
                  {value}
                </Text>
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Header };
