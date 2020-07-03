import React from 'react'
import PropTypes from 'prop-types'
import {View, StatusBar } from 'react-native'


const StartParty = ({ navigation }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <View>
    </View>
  </View>
)

StartParty.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

StartParty.defaultProps = {
  navigation: { navigate: () => null },
}

export default StartParty
