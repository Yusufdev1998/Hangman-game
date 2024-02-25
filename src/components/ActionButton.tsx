import * as stylex from "@stylexjs/stylex";
import { FC, ReactNode } from "react";
const tablet = "@media screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media screen and (min-width: 1220px)";
const styles = stylex.create({
  base: {
    ":active": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
    },
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    border: "none",
    background: "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
    boxShadow: "0px -5px 0px -1px rgba(157, 45, 245, 0.25) inset",
    width: {
      default: 40,
      [tablet]: 64,
      [desktop]: 94,
    },
    height: {
      default: 40,
      [tablet]: 64,
      [desktop]: 94,
    },
  },
});

interface IActionButtonProps {
  icon: ReactNode;
  onClick: () => void;
}
const ActionButton: FC<IActionButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} {...stylex.props(styles.base)}>
      {icon}
    </button>
  );
};

export default ActionButton;
