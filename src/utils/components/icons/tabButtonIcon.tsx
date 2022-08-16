interface TabButtonIconProps {
  focused?: boolean,
  focusColor?: string,
  color?: string,
  name: string,
  size?: number
}

export const tabButtonIcon = ({
  focusColor = 'blue',
  name,
  size = 12
}: TabButtonIconProps) => {
  return (WrapperComponent: any) => {
    const withTabButtonIcon: React.FC<TabButtonIconProps> = ({ focused, color, ...rest }) => (
      <WrapperComponent
        color={focused ? focusColor : color}
        {...rest}
        size={size}
        name={name}
      />
    )
    return withTabButtonIcon
  }
}
