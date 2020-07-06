import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Connector from 'utils/connector'
import { colors, images } from 'theme'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from 'scenes/home'
import HeaderLeft from './navigation/stacks/HeaderLeft'
import HeaderTitle from './navigation/stacks/HeaderTitle'
import Wallet from 'scenes/wallet'
import SignIn from 'scenes/signIn'
import SignUp from 'scenes/signUp/SignUp'
import Delivery from 'scenes/delivery'
import BuyAtBar from 'scenes/buyAtBar'
import StartParty from 'scenes/startParty'
import PaymentMethods from 'scenes/paymentMethods'
import SwitchPoints from 'scenes/switchPoints'
import ValidatePoints from 'scenes/validatePoints'
import StartCall from 'scenes/startCall'
import GameRoom from 'scenes/gameRoom'
import ChooseDrink from 'scenes/chooseDrink'
import SelectionPage from 'scenes/selectionPage'
import Checkout from 'scenes/checkout'
import Orders from 'scenes/orders'
import Profile from 'scenes/profile'
import HeaderPage from '../components/commom/HeaderPage/HeaderPage'

const navigationProps = {
  headerTintColor: '#000',
  // headerStyle: { backgroundColor: colors.white, elevation: 0 },
  headerTitleStyle: { fontSize: 18 },
  elevation: 0
}

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      title: 'SignIn',
      ...navigationProps
    })
  },
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
      title: 'SignUp',
      ...navigationProps
    })
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: ({ navigation }) => ({
      title: 'Wallet',
      headerTitle: ()=> <HeaderPage title={navigation.state.routeName}  navigation={navigation}/>,
      ...navigationProps,
    }),
  },
  Delivery: {
    screen: Delivery,
    navigationOptions: ({ navigation }) => ({
      title: 'Delviery',
      headerTitle: ()=> <HeaderPage title={navigation.state.routeName}  navigation={navigation}/>,
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
  },
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
  },
  SelectionPage: {
    screen: SelectionPage,
    navigationOptions: () => ({
      title: 'SelectionPage',
      ...navigationProps
    })
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: () => ({
      title: 'Checkout',
      ...navigationProps
    })
  },
  Orders: {
    screen: Orders,
    navigationOptions: () => ({
      title: 'Orders',
      ...navigationProps
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})

const Navigator = createAppContainer(AppNavigator);

const Routes = ({ actions, checked }) => {
  useEffect(() => {
    actions.authenticate()
  }, [])

  // rendering
  if (!checked) return <Text>Loading...</Text>
  return <Navigator/>
}

Routes.propTypes = {
  actions: PropTypes.shape({
    authenticate: PropTypes.func,
  }),
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
}

Routes.defaultProps = {
  actions: {
    authenticate: () => null,
  },
  checked: false,
  loggedIn: false,
}

export default (props) => (
  <Connector>
    {({ actions, state: { app } }) => (
      <Routes actions={actions.app} {...app} {...props} />
    )}
  </Connector>
)
