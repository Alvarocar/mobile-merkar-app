import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "@scenes/home"
import NFCScreen from "@scenes/nfc"
import { HOC } from "@src/types/HOC.types"
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons"
import MatIcon from "react-native-vector-icons/MaterialIcons"
import AntIcon from "react-native-vector-icons/AntDesign"
import EntyIcon from 'react-native-vector-icons/Entypo'
import { tabButtonIcon } from "@utils/components/icons/tabButtonIcon"

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
    screenOptions?: object,
  }
}

export interface Route {
  name: string
  component: React.FC | null,
  children?: ROUTES_SCHEMA_TYPE,
  middlewares?: HOC[],
  screenProps?: object,
}

const tabBarIconSty = { focusColor: "#E0B678", size: 35 }
const tabBarLabelSty = { focusColor: "#E0B678", size: 15 }

export const ROUTES_SCHEMA: ROUTES_SCHEMA_TYPE = {
  stack: createNativeStackNavigator(),
  navProps: {
    initialRouteName: 'principal',
    screenOptions: { headerShown: false }
  },
  routes: [
    {
      component: null,
      name: 'Principal',
      children: {
        stack: createBottomTabNavigator(),
        navProps: {
          initialRouteName: 'Home',
        },
        routes: [
          {
            name: 'Home',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({ name: 'dot-single', ...tabBarLabelSty })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({ name: 'home', ...tabBarIconSty })(AntIcon)
            }
          },
          {
            name: 'History',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({ name: 'dot-single', ...tabBarLabelSty })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({ name: 'timelapse', ...tabBarIconSty })(MatComIcon),
            }
          },
          {
            name: 'LoginCompany',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({ name: 'dot-single', ...tabBarLabelSty })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({ name: 'storefront', ...tabBarIconSty })(MatIcon),
            }
          },
        ]
      },

    },
    {
      name: 'AuthCompany',
      component: null,
      children: {
        stack: createBottomTabNavigator(),
        navProps: {
          initialRouteName: 'NFC',
        },
        routes: [
          {
            name: 'NFC',
            component: NFCScreen,
          },
        ]
      }
    }
  ],
}