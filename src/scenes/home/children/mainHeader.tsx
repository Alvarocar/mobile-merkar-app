import { _mainHeaderStyles } from "@src/styles/scenes/_home";
import { View } from "react-native";
import LogoMerkar from "../../../assets/LogoMerkar.svg";

const MainHeader = () => (
  <View
    style={_mainHeaderStyles.container}
  >
    <LogoMerkar
      width={250}
    />
  </View>
)

export default MainHeader