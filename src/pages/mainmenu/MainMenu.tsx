import * as stylex from "@stylexjs/stylex";
import PlayButton from "./components/PlayButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const tablet = "@media only screen and (min-width: 768px)";
const desktop = "@media only screen and (min-width: 1220px)";

const styles = stylex.create({
  base: {
    height: "100%",
    display: "grid",
    placeItems: "center",
    background: {
      default: "url(/images/background-mobile.svg) no-repeat center/cover",
      [tablet]: "url(/images/background-tablet.svg) no-repeat center/cover",
      [desktop]: "url(/images/background-desktop.svg) no-repeat center/cover",
    },
  },
  menu: {
    width: 324,
    height: 481,
    [tablet]: {
      width: 592,
      height: 500,
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 138,
    borderRadius: "3rem",
    paddingLeft: 31,
    paddingRight: 31,
    position: "relative",
    boxShadow:
      "inset 0px 6px 0px 8px rgb(36, 99, 255),inset 0px -8px 0px 4px rgb(20, 14, 102)",
    background:
      "linear-gradient(180.00deg, rgb(52, 74, 186),rgba(0, 20, 121, 0.83) 100%)",
  },
  logo: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: -50,
    [tablet]: {
      top: -100,
      width: 356,
    },
  },
});

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.menu)}>
        <img {...stylex.props(styles.logo)} src="/images/logo.svg" alt="logo" />
        <PlayButton />
        <Button
          onClick={() => navigate("/how-to-play")}
          title="How to play"
          variant="circular"
        />
      </div>
    </div>
  );
};

export default MainMenu;
