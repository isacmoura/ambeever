import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'



const SwitchPoints = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

SwitchPoints.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

SwitchPoints.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default SwitchPoints
