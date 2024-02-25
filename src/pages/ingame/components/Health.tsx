import * as stylex from "@stylexjs/stylex";
import { tokens } from "../../../style/tokens.stylex";
import useGameStore from "../../../store/useGameStore";
import { useMemo } from "react";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [tablet]: {
      gap: 40,
    },
    [desktop]: {
      gap: 40,
    },
  },
  healthContainer: {
    width: 57,
    borderRadius: 96,
    background: tokens.clrWhite,
    padding: 4,
    height: 16,
    [tablet]: {
      width: 160,
      height: 31,
      paddingHorizontal: 11,
      paddingVertical: 9,
    },
    [desktop]: {
      width: 240,
      height: 31,
      paddingHorizontal: 11,
      paddingVertical: 9,
    },
  },
  healthPointer: {
    width: "100%",
    height: "100%",
    background: tokens.crlNavy,
    borderRadius: 96,
  },
  widthStroke: width => ({
    width: width + "%",
  }),
  svg: {
    width: 27,
    height: 24,
    [tablet]: {
      width: 53,
      height: 48,
    },
    [desktop]: {
      width: 53,
      height: 48,
    },
  },
});

const Health = () => {
  const health = useGameStore(state => state.health);
  const width = useMemo(() => {
    return (100 * health) / 8;
  }, [health]);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.healthContainer)}>
        <div
          {...stylex.props(styles.healthPointer, styles.widthStroke(width))}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...stylex.props(styles.svg)}
        viewBox="0 0 27 24"
        fill="none"
      >
        <path
          d="M13.921 24L12.0245 22.2736C5.28883 16.1657 0.841965 12.1243 0.841965 7.19346C0.841965 3.15204 4.00709 0 8.03543 0C10.3112 0 12.4954 1.0594 13.921 2.72044C15.3466 1.0594 17.5308 0 19.8065 0C23.8349 0 27 3.15204 27 7.19346C27 12.1243 22.5531 16.1657 15.8174 22.2736L13.921 24Z"
          fill="url(#paint0_linear_69_7)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_69_7"
            x1="13.921"
            y1="3.9403"
            x2="13.921"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE71FE" />
            <stop offset="1" stopColor="#7199FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Health;
