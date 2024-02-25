import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "../../../style/tokens.stylex";
interface ICategoryItemProps {
  title: string;
  index: string;
  body: string;
}
const tablet =
  "@media only screen and (min-width: 768px) and (max-width: 1219px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  item: {
    borderRadius: 20,
    background: tokens.clrWhite,
    padding: 32,
    cursor: "pointer",
    [tablet]: {
      paddingHorizontal: 40,
    },
    [desktop]: {
      paddingHorizontal: 48,
      paddingVertical: 60,
    },
  },
  itemTitle: {
    color: tokens.crlNavy,
    fontSize: 24,
    [tablet]: {
      fontSize: 40,
    },
    [desktop]: {
      display: "inline-block",
      fontSize: 48,
    },
    lineHeight: 1.2,
    textTransform: "uppercase",
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  itemContainer: {
    [tablet]: {
      display: "flex",
      gap: 40,
      alignItems: "center",
    },
    [desktop]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      gap: 40,
    },
  },
  itemTitleIndex: {
    color: tokens.clrBlue,
    [tablet]: {
      display: "none",
    },
    [desktop]: {
      display: "none",
    },
  },
  itemParagraph: {
    lineHeight: 1.2,
    color: "#887DC0",
    margin: 0,
    letterSpacing: 0.8,
    [tablet]: {
      fontSize: 20,
      letterSpacing: 1,
    },
    [desktop]: {
      fontSize: 26,
      letterSpacing: 1.3,
    },
  },
  tabletIndex: {
    display: "none",
    [tablet]: {
      display: "block",
      fontSize: 88,
      color: tokens.clrBlue,
    },
    [desktop]: {
      display: "block",
      fontSize: 88,
      color: tokens.clrBlue,
    },
  },
});

const CategoryItem: FC<ICategoryItemProps> = ({ title, index, body }) => {
  return (
    <div {...stylex.props(styles.item)}>
      <div {...stylex.props(styles.itemContainer)}>
        <div {...stylex.props(styles.tabletIndex)}>{index}</div>
        <div>
          <h2 {...stylex.props(styles.itemTitle)}>
            <span {...stylex.props(styles.itemTitleIndex)}>{index}</span>{" "}
            {title}
          </h2>
          <p {...stylex.props(styles.itemParagraph)}>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
