import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#FFF",
  dark: "#000",
  primary: "#F24F04",
  secondary: "#CDCDD2",
  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "#898C95",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,
  padding3: 48,
  padding4: 72,
  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  // app dimensions
  width,
  height,
};
