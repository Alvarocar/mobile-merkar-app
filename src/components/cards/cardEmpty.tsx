import { View } from "react-native";
import { cardEmptyStyles } from "@src/styles/components/cards/_cardEmpty";

interface Props {
  header: React.ReactNode,
}

const CardEmpty: React.FC<Props> = ({
  header: Header = <></>,
  children = <></>,
}) => (
  <View style={cardEmptyStyles.container}>
    <View
      style={cardEmptyStyles.header}
    >
      {Header}
    </View>
    <View
      style={cardEmptyStyles.body}
    >
      {children}
    </View>
  </View>
)

export default CardEmpty