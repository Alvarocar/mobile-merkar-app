import { colors, footer, padding } from "@src/styles/_global.styles";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const _tabMain = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    minHeight: footer.height,
  },
})

export const _screenTab = StyleSheet.flatten({
  iconScreen: {
    color: colors.white,
    size: 35,
  },
  labelScreen: {
    color: colors.secondary,
    size: 15,
  },
  screenSelected: {
    color: colors.primary,
  }
})