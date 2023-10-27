import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function customTextVariation(value: number) {
  const variationIsNegative = Math.sign(value) === -1;

  return {
    color: !variationIsNegative ? "#73dcd0" : "#f693b3",
    icon: !variationIsNegative ? BsArrowUp : BsArrowDown,
    value: `${!variationIsNegative ? "+" + value : value}%`,
  };
}

export { customTextVariation };
