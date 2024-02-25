import * as stylex from "@stylexjs/stylex";

const tablet = "@media only screen and (min-width: 768px)";
export default stylex.create({
  container: {
    paddingLeft: 25,
    paddingTop: 32,
    paddingRight: 26,
    [tablet]: {
      paddingLeft: 40,
      paddingRight: 48,
      paddingTop: 61,
    },
    marginHorizontal: "auto",
    background: "linear-gradient(180deg, #190131 0%, #282B96 100%)",
    minHeight: "100%",
    paddingBottom: 24,
  },
});
