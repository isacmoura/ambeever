import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import { colors, images } from 'theme'
import Icon from '../../components/commom/Icon/Icon'
import { Input } from '../../components/commom/Input/Input'
import Button from '../../components/commom/Button/Button'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  logo: {
    height: 150,
    width: 150
  }
})

const SignIn = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Icon iconPath={images.logo} style={styles.logo}/>
    <Input placeholder={"Email"}></Input>
    <Input placeholder={"Senha"}></Input>
    <Button title={"Acessar"} onPress={() => navigation.navigate('Home', { from: 'SignIn' })}></Button>
  </View>
)

SignIn.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SignIn.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignIn
