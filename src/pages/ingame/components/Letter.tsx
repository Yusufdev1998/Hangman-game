import * as stylex from "@stylexjs/stylex";
import { tokens } from "../../../style/tokens.stylex";
import { FC } from "react";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  letter: {
    display: "flex",
    height: 66,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    background: tokens.clrBlue,
    boxShadow: "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset",
    color: tokens.clrWhite,
    textAlign: "center",
    fontSize: 40,
    lineHeight: 1.2,
    letterSpacing: 2,
    textTransform: "uppercase",
    paddingVertical: 9,
    paddingHorizontal: 11.5,
    [tablet]: {
      width: 88,
      height: 112,
      borderRadius: 32,
    },
    [desktop]: {
      width: 112,
      height: 128,
      borderRadius: 40,
    },
  },
});

interface ILetterProps {
  letter: string;
  show: boolean;
}

const Letter: FC<ILetterProps> = ({ letter, show }) => {
  return <div {...stylex.props(styles.letter)}>{show && letter}</div>;
};

export default Letter;
