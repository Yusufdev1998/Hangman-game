import * as stylex from "@stylexjs/stylex";
import { FC, ReactNode } from "react";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  base: {
    WebkitTextStrokeWidth: 1,
    WebkitTextStrokeColor: "#243041",
    fontSize: 48,
    [tablet]: {
      fontSize: 104,
    },
    [desktop]: {
      fontSize: 136,
    },
    letterSpacing: 2.4,
    lineHeight: 1.2,
    background: "linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});

interface ITitleProps {
  children: ReactNode;
  style?: stylex.StyleXStyles;
}

const Title: FC<ITitleProps> = ({ children, style }) => {
  return <h3 {...stylex.props(styles.base, style)}>{children}</h3>;
};

export default Title;
