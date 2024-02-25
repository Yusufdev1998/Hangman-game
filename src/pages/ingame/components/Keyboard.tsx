import * as stylex from "@stylexjs/stylex";
import Key from "./Key";
import { useEffect } from "react";
import useGameStore from "../../../store/useGameStore";
import useModal from "../../../hooks/useModal";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    columnGap: 8,
    rowGap: 24,
    [tablet]: {
      columnGap: 16,
      paddingTop: 134,
    },
    [desktop]: {
      columnGap: 24,
      paddingTop: 134,
    },
    paddingTop: 118,
  },
});

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = () => {
  const phrase = useGameStore(state => state.phrase);
  const setFound = useGameStore(state => state.setFound);
  const setGameStatus = useGameStore(state => state.setGameStatus);
  const setHealth = useGameStore(state => state.setHealth);
  const found = useGameStore(state => state.found);

  const { showModal } = useModal();

  const handleKeyPress = (alphabet: string) => {
    if (!phrase?.toLowerCase().includes(alphabet)) {
      setHealth(-1);
    }
    setFound(alphabet);
    const pressedLetters = [...found, alphabet];
    // Check winner
    const win = phrase
      ?.split("")
      .every(letter => pressedLetters.includes(letter.toLowerCase()));

    if (win) {
      setGameStatus("win");
      setTimeout(() => {
        showModal();
      }, 500);
    }
  };

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (letters.includes(key) && !found.includes(key)) {
        handleKeyPress(key);
      }
    };

    document.addEventListener("keyup", onKeyPress);

    return () => {
      document.removeEventListener("keyup", onKeyPress);
    };
  }, []);
  return (
    <div {...stylex.props(styles.container)}>
      {letters.map(alphabet => (
        <Key
          onPress={() => {
            handleKeyPress(alphabet);
          }}
          disabled={found.includes(alphabet)}
          key={alphabet}
        >
          {alphabet}
        </Key>
      ))}
    </div>
  );
};

export default Keyboard;
