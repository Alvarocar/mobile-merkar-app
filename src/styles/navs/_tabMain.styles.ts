import { _colors, _footer } from "@src/styles/_global.styles";
import { StyleSheet } from "react-native";

export const _tabMain = StyleSheet.create({
  container: {
    backgroundColor: _colors.secondary,
    minHeight: _footer.height,
    borderTopWidth: 0,
    elevation: 0,
  },
})

export const _screenTab = StyleSheet.flatten({
  iconScreen: {
    color: _colors.white,
    size: 35,
  },
  labelScreen: {
    color: _colors.secondary,
    size: 15,
  },
  screenSelected: {
    color: _colors.primary,
  }
})