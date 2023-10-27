import React from "react";

import "../../../assets/fonts/styles.css";
import { Text } from "../../Text";
import "../styles.css";

export interface RouteProps {
  label: string;
  route: string;
  isActive?: boolean;
  icon?: React.ElementType;
  onClick?: (route: string) => void;
}

function Route({
  icon: Icon,
  label,
  route,
  isActive = false,
  onClick,
}: RouteProps) {
  const onPressRoute = () => {
    onClick && onClick(route);
  };

  return (
    <div
      onClick={onPressRoute}
      className={`route-container ${isActive && "active-route-container"}`}
    >
      {Icon && <Icon />}
      <Text className={`${isActive ? "active-route-font" : "route-font"}`}>
        {label}
      </Text>
    </div>
  );
}

export { Route };
