import * as stylex from "@stylexjs/stylex";
import generalStylex from "../../style/general.stylex";
import Header from "./components/Header";
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import useGameStore from "../../store/useGameStore";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const phrase = useGameStore(state => state.phrase);
  const navigate = useNavigate();
  useEffect(() => {
    if (!phrase) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div {...stylex.props(generalStylex.container)}>
        <Header />
        <main>
          <Letters />
          <Keyboard />
        </main>
      </div>
      {createPortal(<Modal />, document.body)}
    </>
  );
};

export default Game;
