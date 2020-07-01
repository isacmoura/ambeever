import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Início' },
    },
    games: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Jogos' },
    },
    orders: {
      screen: ProfileNavigator,
      navigationOptions: { title: 'Pedidos' },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      navigationOptions: { title: 'Perfil' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'HomeTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'games':
            return (
              <FontIcon
                name="gamepad"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'orders':
            return (
              <FontIcon
                name="cash-register"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'ProfileTab':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          paddingBottom: 2,
          // paddingTop: 5,
        },
      },
      swipeEnabled: false,
    }),
  },
)

export default TabNavigator
