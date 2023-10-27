import { IconBaseProps } from "react-icons";
import * as Fa from "react-icons/fa";
import { TickerSectorTypes } from "../models";

const iconSectors: Record<
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

function getIconsBySector(sector: TickerSectorTypes) {
  const icon = iconSectors?.[sector];

  if (icon) {
    return icon;
  }

  return iconSectors.none;
}

export { getIconsBySector };
