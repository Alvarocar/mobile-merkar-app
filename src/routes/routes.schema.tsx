import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "@src/scenes/home"
import NFCScreen from "@src/scenes/nfc"
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons"
import MatIcon from "react-native-vector-icons/MaterialIcons"
import AntIcon from "react-native-vector-icons/AntDesign"
import EntyIcon from 'react-native-vector-icons/Entypo'
import { tabButtonIcon } from "@src/utils/components/icons/tabButtonIcon"
import { _screenTab, _tabMain } from "@src/styles/navs"
import { ROUTES_SCHEMA_TYPE } from "@src/types/router"

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
          screenOptions: {
            tabBarStyle: _tabMain.container,
            headerShown: false,
          },

        },
        routes: [
          {
            name: 'Home',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({
                  name: 'dot-single',
                  style: _screenTab.labelScreen,
                  selected: _screenTab.screenSelected
                })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({
                  name: 'home',
                  style: _screenTab.iconScreen,
                  selected: _screenTab.screenSelected
                })(AntIcon)
            }
          },
          {
            name: 'History',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({
                  name: 'dot-single',
                  style: _screenTab.labelScreen,
                  selected: _screenTab.screenSelected
                })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({
                  name: 'timelapse',
                  style: _screenTab.iconScreen,
                  selected: _screenTab.screenSelected
                })(MatComIcon),
            }
          },
          {
            name: 'LoginCompany',
            component: HomeScreen,
            screenProps: {
              tabBarLabel:
                tabButtonIcon({
                  name: 'dot-single',
                  style: _screenTab.labelScreen,
                  selected: _screenTab.screenSelected
                })(EntyIcon),
              tabBarIcon:
                tabButtonIcon({
                  name: 'storefront',
                  style: _screenTab.iconScreen,
                  selected: _screenTab.screenSelected
                })(MatIcon),
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