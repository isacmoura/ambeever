import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { images } from 'theme'
import { colors } from 'theme'
import { Input } from '../../components/commom/Input/Input'
import { Image, RowClickableContainer } from '../../components/commom/styled'
// import CardProduct from '../../components/CardProduct/CardProduct'
import ClickableImage from '../../components/commom/clickableImage/ClickableImage'
import CardProduct from '../../components/CardProduct/CardProduct'
import Button  from '../../components/commom/Button/Button'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
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
      // iconPath={require('../../../assets/images/add-friend.png')}
    />

    <RowClickableContainer>
      <ClickableImage
        imagePath={require('../../../assets/images/clickables/consumir-bar.png')}
      />
      <ClickableImage
        imagePath={require('../../../assets/images/clickables/comecar-festa.png')}
      />
    </RowClickableContainer>
    <Button title="Acessar" iconPath={require('../../../assets/images/arrow-right.png')} iconRight />

    <Text>Promoções especiais</Text>
    <CardProduct
      imagePath={require('../../../assets/images/persona.jpeg')}
      price="R$ 2.56"
      description="Skol 350ml"
    />
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
