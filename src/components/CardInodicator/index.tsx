import React from "react";
import { Text } from "../Text";
import "./styles.css";
import { IconBaseProps } from "react-icons";

type ThemesTypes = "primary" | "secondary";

interface CardIndicatorProps {
  label: string;
  value: number;
  iconColor?: string;
  theme?: ThemesTypes;
  icon: React.ElementType<IconBaseProps>;
}

function CardIndicator({
  label,
  value,
  icon: Icon,
  iconColor = "",
  theme = "secondary",
}: CardIndicatorProps) {
  const { color, backgroundColor } = themesType[theme];

  return (
    <div className="card-indicator-container" style={{ backgroundColor }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Icon size={20} color={!iconColor ? color : iconColor} />
        <Text className="card-indicator-label" style={{ color }}>
          {label}
        </Text>
      </div>
      <Text className="card-indicator-value" style={{ color }}>
        {value}
      </Text>
    </div>
  );
}

const themesType: Record<ThemesTypes, React.CSSProperties> = {
  primary: {
    color: "white",
    backgroundColor: "#1f263e",
  },
  secondary: {
    color: "#1f263e",
    backgroundColor: "white",
  },
};

export { CardIndicator };
