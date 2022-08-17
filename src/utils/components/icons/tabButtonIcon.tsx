import { useMemo } from "react"

interface TabButtonIconProps {
  name: string,
  selected?: React.CSSProperties,
  style?: React.CSSProperties,
}

interface withTabButtonIconProps {
  focused: boolean,
}

export const tabButtonIcon = ({
  name,
  style = {},
  selected = {},
}: TabButtonIconProps) => {
  return (WrapperComponent: any) => {
    const withTabButtonIcon: React.FC<withTabButtonIconProps> = ({ focused }) => {
      const finalStyle = useMemo(() => focused ? { ...style, ...selected } : style, [style, selected])
      return (
        <WrapperComponent
          {...finalStyle}
          name={name}
        />
      )
    }
    return withTabButtonIcon
  }
}
