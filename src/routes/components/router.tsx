import { NavigationContainer } from "@react-navigation/native"
import { ROUTES_SCHEMA } from "@src/routes/routes.schema"
import withProps from "@src/utils/hoc/withProps"
import SubRoute from "./subRoute"

const Router = () => {
  const Stack = ROUTES_SCHEMA.stack
  const routes = ROUTES_SCHEMA.routes
  return (
    <NavigationContainer>
      <Stack.Navigator
        {...ROUTES_SCHEMA.navProps}
      >
        {routes.map((route, i) =>
        (<Stack.Screen
          name={route.name}
          component={withProps(SubRoute, route)}
          key={i}
        />))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router