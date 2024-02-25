import * as stylex from "@stylexjs/stylex";
import { FC } from "react";
import { tokens } from "../../../style/tokens.stylex";
const tablet = "@media only screen and (min-width: 768px)";
const styles = stylex.create({
  container: {
    ":disabled": {
      opacity: 0.25,
    },
    ":active": {
      background: tokens.clrBlue,
      color: tokens.clrWhite,
    },
    color: tokens.crlNavy,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 1.5,
    letterSpacing: -0.48,
    background: tokens.clrWhite,
    borderRadius: 8,
    textTransform: "uppercase",
    paddingVertical: 10,
    border: "none",
    cursor: "pointer",
    [tablet]: {
      fontSize: 48,
      letterSpacing: 2.4,
      borderRadius: 24,
    },
  },
});

interface IKeyProps {
  children: string;
  disabled: boolean;
  onPress: () => void;
}

const Key: FC<IKeyProps> = ({ children, onPress, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      {...stylex.props(styles.container)}
    >
      {children}
    </button>
  );
};

export default Key;
