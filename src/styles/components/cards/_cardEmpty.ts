import { _borderRadius, _colors, dimensions, _footer } from "@src/styles/_global.styles";
import { StyleSheet } from "react-native";

const containerHeight = dimensions.fullHeight - _footer.height - 10
const headerHeight = 150

export const cardEmptyStyles = StyleSheet.create({
  container: {
    width: (dimensions.fullWidth - 20),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    minHeight: containerHeight,
  },
  header: {
    backgroundColor: _colors.primary,
    width: '100%',
    height: headerHeight,
    borderTopStartRadius: _borderRadius.md,
    borderTopEndRadius: _borderRadius.md,
  },
  body: {
    backgroundColor: _colors.white,
    width: '100%',
    height: (containerHeight - headerHeight),
    borderBottomStartRadius: _borderRadius.md,
    borderBottomEndRadius: _borderRadius.md,
  },
})