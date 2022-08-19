import { _colors } from "@src/styles/_global.styles";
import { Avatar, Layout } from "@ui-kitten/components";
import { Image, View } from "react-native";

const NfcImage = () => (
  <Layout
    style={{ height: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
  >
    <Layout
      style={{ width: 300, height: 300, borderRadius: 300 / 2, marginLeft: 'auto', marginRight: 'auto', overflow: 'hidden' }}
    >
      <Image style={{ width: '100%', height: '100%' }} source={require('@src/assets/LogoNFC.png')} />
    </Layout>
  </Layout>
)

export default NfcImage