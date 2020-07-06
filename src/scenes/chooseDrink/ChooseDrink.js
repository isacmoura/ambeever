import React from 'react'
import styled from 'styled-components/native'
import { Text, View, StatusBar } from 'react-native'
import { images } from '../../theme'
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import Button from '../../components/commom/Button/Button'

const Img = styled.Image`
  margin-bottom: 20px;
`

const ChooseDrink = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{alignItems: "center"}}>
        <StatusBar barStyle="light-content" />

        <Img source={images.detalhes} />
        <Img source={images.sacola_btn} />
        <Button title="Sacola(1)      R$ 2,19"  onPress={() => navigation.navigate('Checkout', { from: 'ChooseDrink' })}/>
        <Button title="Continuar Comprando" />
      </View>
    </ScrollView>
  )
}

ChooseDrink.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default ChooseDrink
