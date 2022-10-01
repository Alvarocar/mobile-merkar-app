import CardEmpty from "@src/components/cards/cardEmpty";
import CardScreen from "@src/components/cards/cardScreen";
import { _screenContainer } from "@src/styles/_global.styles";
import { SafeAreaView } from "react-native";
import MainHeader from "./children/mainHeader";
import NfcBody from "./children/nfcBody";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={_screenContainer}
    >
      <CardScreen
        header={<MainHeader />}
      >
        <NfcBody />
      </CardScreen>
    </SafeAreaView>
  )
}

export default HomeScreen