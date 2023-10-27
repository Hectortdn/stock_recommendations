import { StockRankingApiReturn } from "../../models";
import { ActionCard } from "../ActionCard";
import { Text } from "../Text";
import "./styles.css";

interface ListActionCardProps {
  actions: StockRankingApiReturn[];
}

function ListActionCard({ actions }: ListActionCardProps) {
  return (
    <div>
      <Text className="list-title">Ranking de Recomendações</Text>
      <div className="list-action-card-container">
        {actions.map((card, index) => (
          <ActionCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export { ListActionCard };
