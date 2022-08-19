import CardScene from "@src/components/cards/cardScene";
import { _screenContainer } from "@src/styles/_global.styles";
import { Layout } from "@ui-kitten/components";
import MainHeader from "./children/mainHeader";
import NfcImage from "./children/nfc";

const HomeScreen: React.FC = () => {
  return (
    <Layout
      style={_screenContainer}
    >
      <CardScene
        header={<MainHeader />}
      >
        <NfcImage />
      </CardScene>
    </Layout>
  )
}

export default HomeScreen