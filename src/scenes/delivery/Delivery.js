import React from 'react'
import { StatusBar, View } from 'react-native'
import { RowClickableContainer } from '../../components/commom/styled'
import ImageCircle from '../../components/commom/ImageCircle/ImageCircle'
import { images } from '../../theme'
import HeaderPage from '../../components/commom/HeaderPage/HeaderPage'
import * as S from './styled'
import { Input } from '../../components/commom/Input/Input'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { products } from '../../utils/products'
import CardProduct from '../../components/CardProduct/CardProduct'

const Delivery = ({ navigation }) => {
  const { from } = navigation.state.params
  return (
    <ScrollView>
      <S.HeaderContainer>
        <ImageCircle source={images.persona} />
        <RowClickableContainer>
          <S.AddressContainer>
            <HeaderPage title="Receber agora em" />
            <S.address>R. São Paulo, 290</S.address>
            <S.address>Itaquera, São Paulo</S.address>
          </S.AddressContainer>
        </RowClickableContainer>
      </S.HeaderContainer>

      <Input
        iconPath={images.search}
        placeholder="Pesquise sua bebida favorita"
      />

      <S.CustomFlatList
        numColumns={3}
        contentInset={{ right: 0, top: 0, left: 20, bottom: 0 }}
        data={products}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <S.CardContainer>
            <CardProduct
              imagePath={item.thumbnail}
              price={item.price}
              description={item.description}
            />
          </S.CardContainer>
        )}
      />
    </ScrollView>
  )
}

Delivery.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Delivery
