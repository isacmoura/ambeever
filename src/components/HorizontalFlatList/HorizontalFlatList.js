import React from 'react'
import * as S from './styled'
import CardProduct from '../CardProduct/CardProduct';
import { products } from '../../utils/products';

const HorizontalFlatList = () => (
  <S.List
    data={products}
    keyExtractor={(item) => item.description}
    renderItem={({ item }) => (
      <CardProduct
        imagePath={item.thumbnail}
        price={item.price}
        description={item.description}
      />
    )}
  />
)


export default HorizontalFlatList;