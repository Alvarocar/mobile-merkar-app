import { borderRadius, colors, dimensions, footer } from "@src/styles/_global.styles";
import { StyleSheet } from "react-native";

const containerHeight = dimensions.fullHeight - footer.height - 10
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
    backgroundColor: colors.primary,
    width: '100%',
    height: headerHeight,
    borderTopStartRadius: borderRadius.md,
    borderTopEndRadius: borderRadius.md,
  },
  body: {
    backgroundColor: colors.white,
    width: '100%',
    height: (containerHeight - headerHeight),
    borderBottomStartRadius: borderRadius.md,
    borderBottomEndRadius: borderRadius.md,
  },
})