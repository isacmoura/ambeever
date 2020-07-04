import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const SignIn = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
  </View>
)

SignIn.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SignIn.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignIn
