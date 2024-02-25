import * as stylex from "@stylexjs/stylex";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import useGameStore from "../../../store/useGameStore";
import useModal from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
const tablet = "@media only screen and (min-width: 768px)";
const styles = stylex.create({
  modal: {
    "::backdrop": {
      background: "rgba(0,0,0,0.2)",
    },
    position: "fixed",
    paddingTop: 60,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    width: "100%",
    background: "transparent",
  },
  content: {
    width: "100%",
    paddingTop: 104,
    paddingBottom: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    gap: 34,
    borderRadius: 48,
    background:
      "linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%)",
    boxShadow: "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset",
    [tablet]: {
      maxWidth: 592,
      margin: "0 auto",
      paddingTop: 120,
    },
  },
  title: {
    textAlign: "center",
    width: "100%",
    top: -60,
    position: "absolute",
    fontSize: 94,
    WebkitTextStrokeWidth: 2,
    letterSpacing: -0.47,
    [tablet]: {
      fontSize: 134,
      top: -85,
    },
  },
  redBtn: {
    background: "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
    boxShadow: "0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #C642FB inset",
  },
});
const title: any = {
  win: "You win",
  lose: "You lose",
};

const Modal = () => {
  const gameStatus = useGameStore(state => state.gameStatus);
  const navigate = useNavigate();

  const playAgain = useGameStore(state => state.playAgain);
  const resetGame = useGameStore(state => state.resetGame);

  const { closeModal } = useModal();
  const handlePlayAgain = () => {
    playAgain();
    closeModal();
  };
  const handleNewCategory = () => {
    resetGame();
    navigate("/category");
  };
  const handleQuitGame = () => {
    resetGame();
    navigate("/");
  };

  const modalTitle = title[gameStatus] || "Paused";

  return (
    <dialog {...stylex.props(styles.modal)} id="dialog">
      <div {...stylex.props(styles.content)}>
        <Title style={styles.title}>{modalTitle}</Title>
        {gameStatus === "playing" ? (
          <Button
            title="continue"
            onClick={closeModal}
            variant="circular"
          ></Button>
        ) : (
          <Button
            onClick={handlePlayAgain}
            title="play again"
            variant="circular"
          ></Button>
        )}
        <Button
          onClick={handleNewCategory}
          title="new category"
          variant="circular"
        ></Button>
        <Button
          onClick={handleQuitGame}
          title="quit game"
          variant="circular"
          style={styles.redBtn}
        ></Button>
      </div>
    </dialog>
  );
};

export default Modal;
