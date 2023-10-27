import React from "react";
import * as Fa from "react-icons/fa";
import { IconBaseProps } from "react-icons";

import { TickerSectorTypes } from "../../models";

export const tickerSectorThemes: Record<
  TickerSectorTypes | "none",
  { icon: React.ElementType<IconBaseProps>; color: string }
> = {
  none: { icon: Fa.FaSync, color: "#b6b7ba" },
  energyStocks: { icon: Fa.FaGasPump, color: "#FF5733" },
  paperPulpStocks: { icon: Fa.FaLeaf, color: "#07bb62" },
  miningMetalsStocks: { icon: Fa.FaCog, color: "#5d8bad" },
  agriDiverseStocks: { icon: Fa.FaTractor, color: "#FFC300" },
  animalProteinStocks: { icon: Fa.FaDrumstickBite, color: "#f05284" },
};
