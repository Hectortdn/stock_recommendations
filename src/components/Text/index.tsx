import React from "react";


type TextTypes = "a" | "p" | "span";

type ComponentsProps<T> = T extends "a"
  ? React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  : T extends "p"
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  : T extends "span"
  ? React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  : HTMLElement;

function Text<T extends TextTypes>({
  type = "span" as T,
  ...props
}: { type?: T } & ComponentsProps<T>) {
  return React.createElement(textComponents[type], props);
}

const textComponents: Record<TextTypes, TextTypes> = {
  a: "a",
  p: "p",
  span: "span",
};


export { Text };
