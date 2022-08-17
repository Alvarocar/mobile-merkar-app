import { colors, padding } from "@stylesheet/_global.styles";
import { StyleSheet } from "react-native";

export const _tabMain = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    minHeight: 60,
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