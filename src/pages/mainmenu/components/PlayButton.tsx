import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
const tablet = "@media only screen and (min-width: 768px)";
const styles = stylex.create({
  btn: {
    width: 160,
    height: 160,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    marginBottom: 57,
    background: "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
    boxShadow:
      "0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9D2DF5 inset",
    [tablet]: {
      width: 200,
      height: 200,
    },
  },

  svg: {
    width: 52,
    height: 49,
    [tablet]: {
      width: 66,
      height: 62,
    },
  },
});

const PlayButton = () => {
  return (
    <Link to={"/category"}>
      <div {...stylex.props(styles.btn)}>
        <svg
          {...stylex.props(styles.svg)}
          viewBox="0 0 54 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_51_169)">
            <path
              d="M2.30473 26.9178L2.07855 25.4416C0.125674 12.6964 -0.850762 6.32377 2.8208 2.85697C6.49235 -0.609832 12.6481 0.872319 24.9596 3.83662L26.5882 4.22874C43.3933 8.275 51.7959 10.2981 53.0287 16.2434C54.2616 22.1887 47.3814 27.5073 33.6211 38.1445L32.2187 39.2286C21.0336 47.8751 15.4411 52.1983 10.498 50.1641C5.5549 48.1298 4.47151 41.0591 2.30473 26.9178Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_51_169"
              x="0.3396"
              y="0.849609"
              width="52.8302"
              height="49.8115"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-6" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_51_169"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </Link>
  );
};

export default PlayButton;
