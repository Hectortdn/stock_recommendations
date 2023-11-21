import { StockProps } from "../../models";
import { ActionCard } from "../ActionCard";
import { Text } from "../Text";
import "./styles.css";

interface ListActionCardProps {
  actions: StockProps[];
  onPressCard: (ticker: string) => void;
}

function ListActionCard({ actions, onPressCard }: ListActionCardProps) {
  return (
    <div>
      <Text className="list-title">Ranking de Recomendações</Text>
      <div className="list-action-card-container">
        {!!actions.length &&
          actions.map((card, index) => (
            <ActionCard
              key={index}
              {...card}
              onClickCard={() => onPressCard(card.papel)}
            />
          ))}
      </div>
    </div>
  );
}

export { ListActionCard };
