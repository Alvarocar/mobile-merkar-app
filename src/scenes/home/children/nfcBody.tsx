import { Box, Flex } from "@react-native-material/core"
import { Image } from "react-native"

const NfcBody: React.FC = () => (
  <Flex justify="center" direction="column" h="100%">
    <Box
      overflow="hidden"
      style={{ borderRadius: 200 / 2, marginLeft: 'auto', marginRight: 'auto' }}
      w={200}
    >
      <Image style={{ width: 200, height: 200 }} source={require('@src/assets/LogoNFC.png')} />
    </Box>
  </Flex>
)

export default NfcBody