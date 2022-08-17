import { HOC } from "../HOC.types"

export interface ROUTES_SCHEMA_TYPE {
  stack: {
    Group: any,
    Navigator: any,
    Screen: any,
  },
  routes: Route[],
  navProps: {
    initialRouteName?: string,
    options?: object,
    screenOptions?: {
      headerShown?: boolean,
      tabBarStyle?: object,
    },
  }
}

export interface Route {
  name: string
  component: React.FC | null,
  children?: ROUTES_SCHEMA_TYPE,
  middlewares?: HOC[],
  screenProps?: object,
}
