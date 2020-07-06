import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native'
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
  },
  logo: {
    height: 150,
    width: 150
  },
  link: {
    color: colors.blue, 
  }
})

const SignIn = ({ navigation }) => (
  <View style={styles.root}>
    <Icon iconPath={images.logo} style={styles.logo}/>
    <Input placeholder={"Email"}></Input>
    <Input placeholder={"Senha"}></Input>
    <Text>Esqueci a senha</Text>
    <Button title={"Acessar"} onPress={() => navigation.navigate('Home', { from: 'SignIn' })}></Button>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp', { from: 'SignIn'})}><Text style={styles.link}>É novo por aqui? Registre-se agora</Text></TouchableOpacity>
  </View>
)

SignIn.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SignIn.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignIn
