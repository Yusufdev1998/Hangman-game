import * as stylex from "@stylexjs/stylex";

import CategoryItem from "./components/CategoryItem";
import BackHeader from "../../components/BackHeader";
import generalStylex from "../../style/general.stylex";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  items: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    [tablet]: {
      gap: "2rem",
    },
    [desktop]: {
      flexDirection: "row",
      gap: "2rem",
      paddingTop: 64,
    },
    paddingTop: 79,
  },
});

const HowToPlay = () => {
  return (
    <div {...stylex.props(generalStylex.container)}>
      {/* Header action */}
      <BackHeader title="How to play"></BackHeader>
      {/* Body */}
      <main {...stylex.props(styles.items)}>
        <CategoryItem
          title="Choose a category"
          index={"01"}
          body="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <CategoryItem
          title="Guess letters"
          index={"02"}
          body="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        />
        <CategoryItem
          title="Win or lose"
          index={"03"}
          body="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        />
      </main>
    </div>
  );
};

export default HowToPlay;
