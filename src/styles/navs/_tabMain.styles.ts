import { colors, padding } from "@styles/_global.styles";
import { StyleSheet } from "react-native";

export const _tabMain = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingBottom: padding.sm,
    minHeight: "4rem",
  },
})

export const _screenTab = StyleSheet.flatten({
  iconScreen: {
    color: colors.white,
    size: 35,
  },
  labelScreen: {
    color: colors.white,
    size: 15,
  },
  screenSelected: {
    color: colors.primary,
  }
})