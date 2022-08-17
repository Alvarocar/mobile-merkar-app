import CardEmpty from "@src/components/cards/cardEmpty";
import { screenContainer } from "@src/styles/_global.styles";
import { SafeAreaView } from "react-native";
import MainHeader from "./children/mainHeader";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={screenContainer}
    >
      <CardEmpty
        header={<MainHeader />}
      />
    </SafeAreaView>
  )
}

export default HomeScreen