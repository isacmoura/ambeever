import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { images } from 'theme'
import { colors } from 'theme'
import { Input } from '../../components/commom/Input/Input'
import { Image, RowClickableContainer } from '../../components/commom/styled'
import ClickableImage from '../../components/commom/clickableImage/ClickableImage'
import * as S from '../../components/commom/styled'
import HorizontalFlatList from '../../components/HorizontalFlatList/HorizontalFlatList'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  alignArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  arrowRight: {
    alignItems: 'flex-end',
    marginLeft: 230,
    marginTop: 20,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={styles.alignArrow}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wallet', { from: 'Home' })}
      >
        <Image source={images.arrow_right} style={styles.arrowRight} />
      </TouchableOpacity>
    </View>
    <Input
      placeholder="Convide seus amigos e ganhe pontos!"
      iconRight
      iconPath={require('../../../assets/images/add-friend.png')}
    />

    <RowClickableContainer>
      <ClickableImage imagePath={images.pedir_bebidas} onPress={()=> navigation.navigate('Delivery', { from: 'Home' })} />
      <ClickableImage imagePath={images.comecar_festa} />
    </RowClickableContainer>
    <RowClickableContainer>
      <ClickableImage imagePath={images.trocar_prontos} onPress={() => navigation.navigate('Wallet', { from: 'Home' })} />
      <ClickableImage imagePath={images.consumir_bar} />
    </RowClickableContainer>

    <S.SectionTitle>Promoções especiais</S.SectionTitle>
    <HorizontalFlatList />
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
