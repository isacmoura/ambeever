import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'



const PaymentMethods = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

PaymentMethods.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

PaymentMethods.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default PaymentMethods