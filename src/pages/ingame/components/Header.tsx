import * as stylex from "@stylexjs/stylex";
import ActionButton from "../../../components/ActionButton";
import { tokens } from "../../../style/tokens.stylex";
import Health from "./Health";
import useGameStore from "../../../store/useGameStore";
import { useEffect } from "react";
import useModal from "../../../hooks/useModal";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    gap: "1rem",
    [tablet]: {
      gap: "2rem",
    },
    [desktop]: {
      gap: 57,
    },
    alignItems: "center",
  },
  category: {
    color: tokens.clrWhite,
    fontSize: 40,
    lineHeight: 1.2,
    letterSpacing: -0.2,
    [tablet]: {
      fontSize: 48,
      letterSpacing: 2.4,
    },
    [desktop]: {
      fontSize: 48,
      letterSpacing: 2.4,
    },
  },
  svg: {
    width: 18,
    height: 14,
    [tablet]: {
      width: 25,
      height: 21,
    },
    [desktop]: {
      width: 38,
      height: 32,
    },
  },
});

const Header = () => {
  const category = useGameStore(state => state.category);
  const health = useGameStore(state => state.health);
  const setGameStatus = useGameStore(state => state.setGameStatus);

  const { showModal } = useModal();

  useEffect(() => {
    if (health == 0) {
      setGameStatus("lose");
      showModal();
    }
  }, [health]);

  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.left)}>
        <ActionButton
          onClick={showModal}
          icon={
            <svg
              {...stylex.props(styles.svg)}
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.914917"
                y="0.191406"
                width="16.1702"
                height="2.97872"
                fill="white"
              />
              <rect
                x="0.914917"
                y="5.72363"
                width="16.1702"
                height="2.55319"
                fill="white"
              />
              <rect
                x="0.914917"
                y="10.8301"
                width="16.1702"
                height="2.97872"
                fill="white"
              />
            </svg>
          }
        />
        <span {...stylex.props(styles.category)}>{category}</span>
      </div>
      <Health />
    </header>
  );
};

export default Header;
