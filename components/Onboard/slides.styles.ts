import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";
const { width, height } = SIZES;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width,
    height,
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginHorizontal: 20,
    marginBottom: 60,
  },
});

export default styles;
