import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import StartParty from 'scenes/startParty'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Wallet from 'scenes/wallet'
import SwitchPoints from 'scenes/switchPoints'
import BuyAtBar from 'scenes/buyAtBar'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.white, elevation: 0 },
  headerTitleStyle: { fontSize: 18 },
  elevation: 0
}

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: () => ({
      title: 'Wallet',
      ...navigationProps,
    }),
  },
  // Zé Delivery (fazer Deep Link)
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
  StartParty: {
    screen: StartParty,
    navigationOptions: () => ({
      title: 'StartParty',
      ...navigationProps,
    })
  },
  SwitchPoints: {
    screen: SwitchPoints,
    navigationOptions: () => ({
      title: 'SwitchPoints',
      ...navigationProps,
    })
  },
  BuyAtBar: {
    screen: BuyAtBar,
    navigationOptions: () => ({
      title: 'BuyAtBar',
      ...navigationProps
    })
  }
})


export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const Wallet = createStackNavigator({
  
})
