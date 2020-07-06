import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { colors } from 'theme'
import styled from 'styled-components/native'
import Button from '../../components/commom/Button/Button'
import { images } from '../../theme'
import { ScrollView } from 'react-native-gesture-handler'
import Modal from '../../components/ModalFinalizarCompra/Modal'

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
const Mds = styled.View`
  flex-direction: row;
  align-items: center;
  height: 200%;
  /* width: 600px; */
`

const Checkout = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const handleBtn = () => {
    setShowModal(true)
    setTimeout(() => {
      setTimeout(() => {
        navigation.navigate('Home', { from: 'ChooseDrink' })
      }, 50)
      setShowModal(false)
    }, 2000)
  }
  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <StatusBar barStyle="light-content" />

        <Img source={images.checkout} />
        <Img source={images.checkout_2} />
        <Button title="Finalizar compra" onPress={handleBtn} />
        <Modal show={showModal}>
          <Img source={images.finalizado} />
        </Modal>
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
