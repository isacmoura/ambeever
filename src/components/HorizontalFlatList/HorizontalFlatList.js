import React from 'react'
import * as S from './styled'
import { images } from '../../theme/images';
import CardProduct from '../CardProduct/CardProduct';


const products = [
    {
        price: 'R$ 2,25',
        description: 'Brahma 350ml',
        thumbnail: images.brahma
    },
    {
        price: 'R$ 3,49',
        description: 'Budweiser 335ml',
        thumbnail: images.budweiser
    },
    {
        price: 'R$ 14,99',
        description: 'Colorado 900ml',
        thumbnail: images.colorado
    },
    {
        price: 'R$ 0,99',
        description: 'Corona',
        thumbnail: images.corona
    },
    {
        price: 'R$ 3,50',
        description: 'Guarana 350ml',
        thumbnail: images.antartica
    },
    {
        price: 'R$ 89,00',
        description: 'Jack Daniels',
        thumbnail: images.jack
    },
    {
        price: 'R$ 3,00',
        description: 'Skol 350ml',
        thumbnail: images.skol
    },
    {
        price: 'R$ 5,99',
        description: 'Stella',
        thumbnail: images.stella
    },
];

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