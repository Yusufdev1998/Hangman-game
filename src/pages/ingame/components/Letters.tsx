import * as stylex from "@stylexjs/stylex";
import Letter from "./Letter";
import useGameStore from "../../../store/useGameStore";
import { useMemo } from "react";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    paddingTop: 78,
    [tablet]: {
      paddingTop: 111,
    },
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    [tablet]: {
      gap: 12,
    },
    [desktop]: {
      gap: 16,
    },
  },
});

const Letters = () => {
  const phrase = useGameStore(state => state.phrase);
  const found = useGameStore(state => state.found);

  const words = useMemo(() => {
    let arr: string[] = [];
    if (phrase) {
      let word = "";
      for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] != " ") {
          if (word.length < 7) {
            word += phrase[i];
          } else {
            arr.push(word);
            word = phrase[i];
          }
        } else {
          arr.push(word);
          word = "";
        }
      }
      if (word) {
        arr.push(word);
      }
    }

    return arr;
  }, [phrase]);

  return (
    <div {...stylex.props(styles.container)}>
      {words?.map(word => (
        <div key={word} {...stylex.props(styles.row)}>
          {word.split("").map((key, index) => (
            <Letter
              key={index}
              letter={key}
              show={found.includes(key.toLowerCase())}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Letters;
