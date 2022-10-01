import { Flex, Box } from '@react-native-material/core'
import { _colors, _padding } from '@src/styles/_global.styles'
import { StyleSheet } from 'react-native'

const _cardScreen = StyleSheet.create({
  container: {
    backgroundColor: _colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    minHeight: 80,
  },
  header: {
    backgroundColor: _colors.primary,
  }
})

interface Props {
  header?: React.ReactElement,
}

const CardScreen: React.FC<Props> = ({
  header,
  children,
}) => {
  return (
    <Flex
      fill
      style={_cardScreen.container}
    >
      <Box
        style={_cardScreen.header}
      >
        {header}
      </Box>
      <Box>
        {children}
      </Box>
    </Flex>
  )
}

export default CardScreen