import * as stylex from "@stylexjs/stylex";
import generalStylex from "../../style/general.stylex";
import BackHeader from "../../components/BackHeader";
import Button from "../../components/Button";
import useGameStore from "../../store/useGameStore";
import { ICategory } from "../../types/types";
import randomPhrase from "../../utils/randomPhrase";
import { useNavigate } from "react-router-dom";
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";

const styles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "12vh",
    [tablet]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem",
    },
    [desktop]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
    },
  },
});

const Category = () => {
  const categories = useGameStore(state => state.categories);
  const setPhrase = useGameStore(state => state.setPhrase);

  const setCategory = useGameStore(state => state.setCategory);

  const navigate = useNavigate();

  const handleCategory = (categoryPhrases: ICategory[]) => {
    const phrase = randomPhrase(categoryPhrases);
    setPhrase(phrase.name.replace("'", ""));
    navigate("/game");
  };
  return (
    <div {...stylex.props(generalStylex.container)}>
      <BackHeader title="Pick a Category" />
      <main {...stylex.props(styles.main)}>
        {Object.keys(categories).map(key => (
          <Button
            key={key}
            onClick={() => {
              handleCategory(categories[key]);
              setCategory(key);
            }}
            variant="rectangular"
            title={key}
          />
        ))}
      </main>
    </div>
  );
};

export default Category;
