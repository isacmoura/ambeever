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
import SignUp from 'scenes/signUp/SignUp'

// navigation
import SignIn from '../scenes/signIn/SignIn'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.white, elevation: 0 },
  headerTitleStyle: { fontSize: 18 },
  elevation: 0,
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
    navigationOptions: () => ({
      title: 'Wallet',
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
