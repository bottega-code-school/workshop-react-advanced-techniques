import * as React from "react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number;
  direction?: "row" | "column";
}
export default function Stack({
  spacing = 5,
  style = {},
  direction = "column",
  className,
  ...rest
}: IProps) {
  const stackClassName = `stack-${direction} ${className || ""}`;
  const stackStyle: React.CSSProperties =
    direction === "column"
      ? { ...style, gap: `${spacing}px` }
      : { ...style, gap: `${spacing}px` };

  return <div className={stackClassName} style={stackStyle} {...rest} />;
}
