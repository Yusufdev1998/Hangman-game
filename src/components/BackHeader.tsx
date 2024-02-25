import * as stylex from "@stylexjs/stylex";

import ActionButton from "./ActionButton";
import Title from "./Title";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
const tablet = "@media only screen and (min-width: 768px)";
const desktop = "@media only screen and (min-width: 1220px)";
const styles = stylex.create({
  action: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  svg: {
    width: 17,
    height: 16,
    [tablet]: {
      width: 27,
      height: 25,
    },
    [desktop]: {
      width: 41,
      height: 38,
    },
  },
  block: {
    display: "none",
    [tablet]: {
      display: "block",
      width: 64,
      height: 64,
    },
    [desktop]: {
      display: "block",
      width: 94,
      height: 94,
    },
  },
});

interface IBackHeaderProps {
  title: string;
}
const BackHeader: FC<IBackHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header {...stylex.props(styles.action)}>
      <ActionButton
        onClick={() => navigate(-1)}
        icon={
          <svg
            {...stylex.props(styles.svg)}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.48938 8.44643L8.58326 0.361328V5.57173C11.7009 5.57173 17.9362 7.76369 17.9362 16.5315C17.9362 11.7883 11.7009 10.842 8.58326 10.9618V16.5315L0.48938 8.44643Z"
              fill="white"
            />
          </svg>
        }
      />
      <Title>{title}</Title>
      <div {...stylex.props(styles.block)}></div>
    </header>
  );
};

export default BackHeader;
