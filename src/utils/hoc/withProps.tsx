import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const withProps = (Wrapped: React.FC<any>, customProps: object = {}) => {
  const WithProps = (props: object) => <Wrapped {...props} {...customProps} />
  return WithProps
}

export default withProps
