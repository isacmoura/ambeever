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
import ValidatePoints from 'scenes/validatePoints'
import PaymentMethods from 'scenes/paymentMethods/PaymentMethods'
import SignUp from 'scenes/signUp/SignUp'
import StartCall from 'scenes/startCall'
import GameRoom from '../../../scenes/gameRoom/GameRoom'
import ChooseDrink from '../../../scenes/chooseDrink'
import SignIn from '../../../scenes/signIn/SignIn'

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
  BuyAtBar: {
    screen: BuyAtBar,
    navigationOptions: () => ({
      title: 'BuyAtBar',
      ...navigationProps
    })
  }
})

export const WalletNavigator = createStackNavigator({
  ValidatePoints: {
    screen: ValidatePoints,
    navigationOptions: () => ({
      title: 'ValidatePoints',
      ...navigationProps
    })
  },
  PaymentMethods: {
    screen: PaymentMethods,
    navigationOptions: () => ({
      title: 'PaymentMethods',
      ...navigationProps
    })
  },
  SwitchPoints: {
    screen: SwitchPoints,
    navigationOptions: () => ({
      title: 'SwitchPoints',
      ...navigationProps,
    })
  },
})

export const SignUpNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      title: 'SignIn',
      ...navigationProps
    })
  }
})

export const SignInNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: 'SignIn',
      ...navigationProps
    })
  }
})

export const StartPartyNavigator = createStackNavigator({
  StartCall: {
    screen: StartCall,
    navigationOptions: () => ({
      title: 'StartCall',
      ...navigationProps
    })
  },
  GameRoom: {
    screen: GameRoom,
    navigationOptions: () => ({
      title: 'GameRoom',
      ...navigationProps
    })
  },
  ChooseDrink: {
    screen: ChooseDrink,
    navigationOptions: () => ({
      title: 'ChooseDrink',
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