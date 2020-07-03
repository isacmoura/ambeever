import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Connector from 'utils/connector'

// navigation
import Main from './navigation'

const Routes = ({ actions, checked }) => {
  useEffect(() => {
    actions.authenticate()
  }, [])

  // rendering
  if (!checked) return <Text>Loading...</Text>
  return <Main />
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
