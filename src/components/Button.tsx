import * as stylex from "@stylexjs/stylex";
import { FC } from "react";
import { tokens } from "../style/tokens.stylex";

interface IButtonProps {
  title: string;
  variant: "circular" | "rectangular";
  style?: stylex.StyleXStyles;
  onClick?: () => void;
}
const tablet = "@media only screen and (min-width: 768px)";
const styles = stylex.create({
  base: {
    background: tokens.clrBlue,
    border: "none",
    color: "white",
    display: "block",
    cursor: "pointer",
    letterSpacing: 1.6,
    textTransform: "uppercase",
    font: "inherit",
    boxShadow: "0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #3C74FF inset",
    lineHeight: 1.2,
    ":active": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), #2463FF",
    },
  },
  circular: {
    paddingVertical: 12,
    borderRadius: 40,
    fontSize: 32,
    paddingHorizontal: 64,
  },
  rectangular: {
    paddingVertical: 24,
    borderRadius: 20,
    fontSize: 24,
    width: "100%",
    ":active": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), #2463FF",
    },
    [tablet]: {
      borderRadius: 40,
      fontSize: 48,
      height: 182,
    },
  },
});

const Button: FC<IButtonProps> = ({ title, variant, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      {...stylex.props(styles.base, styles[variant], style)}
    >
      {title}
    </button>
  );
};

export default Button;
