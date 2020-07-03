import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'



const BuyAtBar = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

BuyAtBar.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

BuyAtBar.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default BuyAtBar