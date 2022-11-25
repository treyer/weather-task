// Color palette
const black = "#000000";
const white = "#ffffff";
const grey = "#707070";
const translucentBlack = "rgba(0, 0, 0, 0.5)";
const lightTranslucentBlack = "rgba(0, 0, 0, 0.2)";

const boxShadows = ["0 0 5px 5px rgba(0, 0, 0, 0.2)"];

const size = {
  xs: 550,
  small: 720,
  med: 1100,
  large: 1920,
};

export default {
  size,
  boxShadows,
  spaces: [0, 4, 8, 16, 32, 64, 70, 84, 128],
  sizes: [
    12, 20, 25, 30, 40, 55, 60, 80, 90, 100, 120, 138, 150, 216, 224, 300, 324,
    340, 365, 402, 700, 1120, 1150, 1446,
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 60, 72, 80],
  radiuses: [0, 5, 10, 15, 20],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  colors: {
    black,
    white,
    grey,
    translucentBlack,
    lightTranslucentBlack,
  },
};
