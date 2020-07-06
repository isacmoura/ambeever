import React from 'react'
import * as S from './styled'
import CardProduct from '../CardProduct/CardProduct'
import { products } from '../../utils/products'

const HorizontalFlatList = ({navigation}) => (
  <S.List
    data={products}
    keyExtractor={(item) => item.description}
    renderItem={({ item }) => (
      <CardProduct
        onPress={() => navigation.navigate('ChooseDrink', { from: 'Home' })}
        imagePath={item.thumbnail}
        price={item.price}
        description={item.description}
      />
    )}
  />
)

export default HorizontalFlatList
