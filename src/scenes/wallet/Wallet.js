import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  square: {
    height: 50,
    width: 50,
    //background-color: #555;
  }
})

const Wallet = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    
    <View>

    </View>
  </View>
)

Wallet.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Wallet.defaultProps = {
  navigation: { navigate: () => null },
}

export default Wallet
