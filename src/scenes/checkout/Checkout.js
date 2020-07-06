import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { colors } from 'theme'
import styled from 'styled-components/native'
import Button from '../../components/commom/Button/Button'
import { images } from '../../theme'
import { ScrollView } from 'react-native-gesture-handler'

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

const Img = styled.Image`
  margin-bottom: 20px;
`

const Checkout = ({ navigation }) => {
  const { from } = navigation.state.params
  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <StatusBar barStyle="light-content" />

        <Img source={images.checkout} />
        <Img source={images.checkout_2} />
        <Button
          title="Finalizar Comrpa"
          onPress={() =>
            navigation.navigate('Checkout', { from: 'ChooseDrink' })
          }
        />
      </View>
    </ScrollView>
  )
}

Checkout.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Checkout
