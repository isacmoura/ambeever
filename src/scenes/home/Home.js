import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native'
import { images } from 'theme'
import { colors } from 'theme'
import BoxRadius from '../../components/commom/BoxRadius/BoxRadius'
import BoxImage from '../../components/commom/BoxImage/BoxImage'
import CardImage from '../../components/commom/Card/Card'
import { Input } from '../../components/commom/Input/Input'
import ImageCircle from '../../components/commom/ImageCircle/ImageCircle'

import image from '../../../assets/images/arrow-right.png'
import persona from '../../../assets/images/persona.jpeg'
import Button from '../../components/commom/Button/Button'

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

    
    <BoxRadius>
      <Text>opaaa</Text>
    </BoxRadius>
    <ImageCircle source={persona} width={50} height={50} />
    <BoxImage imagePath={image} label="teste" />

    <Input placeholder="insira o usuario" iconName="oian"/>
    
    <Button title="acessar"/>
    <Button title="acessar" iconRight/>
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
