import { _mainHeaderStyles } from "@src/styles/scenes/_home";
import { Layout } from "@ui-kitten/components";
import LogoMerkar from "../../../assets/LogoMerkar";

const MainHeader = () => (
  <Layout
    style={_mainHeaderStyles.container}
  >
    <LogoMerkar
      width={250}
      style={_mainHeaderStyles.logo}
    />
  </Layout>
)

export default MainHeader