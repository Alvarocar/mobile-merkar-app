import { _colors } from "@src/styles/_global.styles"
import { Card } from "@ui-kitten/components"

interface Props {
  header?: React.ReactElement,
}

const CardScene: React.FC<Props> = ({
  header,
  children
}) => {

  return (
    <Card
      header={header}
      style={{ flex: 1, borderRadius: 20, backgroundColor: _colors.white }}
      children={children}
    />
  )
}

export default CardScene