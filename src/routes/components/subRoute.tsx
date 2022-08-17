import { Route } from "@src/types/router"
import EmptyComponent from "@src/utils/components/emptyComponent"
import withProps from "@src/utils/hoc/withProps"
import { isNull, isUndefined } from "lodash"
import React from "react"
import { compose } from "redux"

interface Props extends Route { }

const SubRoute: React.FC<Props> = ({
  component: Component,
  children,
  middlewares = []
}) => {
  if (!isUndefined(children)) {
    const Stack = children.stack
    const routes = children.routes
    return (
      <Stack.Navigator
        {...children.navProps}
      >
        {routes.map((route, i) => {
          return (<Stack.Screen
            name={route.name}
            options={{ ...route.screenProps }}
            component={withProps(SubRoute, route)}
            key={i}
          />)
        })}
      </Stack.Navigator>
    )
  }
  const MainComponent = isNull(Component) ? EmptyComponent : compose<React.FC>(...middlewares)(Component)
  return <MainComponent />
}

export default SubRoute