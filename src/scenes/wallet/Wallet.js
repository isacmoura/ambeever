import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar} from 'react-native'
import { colors, fonts, images } from '../../theme'
import HeaderPage from '../../components/commom/HeaderPage/HeaderPage'
import { Image, RowClickableContainer } from '../../components/commom/styled'
import ClickableImage from '../../components/commom/clickableImage/ClickableImage'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    fontFamily: fonts.montserrat.extraBold,
  },
  square: {
    height: 50,
    width: 50,
  },
  descriptionText: {
    fontSize: 17,
    fontFamily: fonts.montserrat.semiBold,
    color: colors.black
  },
  descriptionTextMoney: {
    fontSize: 22,
    fontFamily: fonts.montserrat.semiBold,
    color: colors.black
  },
  clickableOptions: {
    flex: 1,
    flexDirection: 'row',
  },
  infoBoldText: {
    fontFamily: fonts.montserrat.bold,
    fontSize: 15,
    color: colors.black
  },
  infoText: {
    marginLeft: 10,
    fontFamily: fonts.montserrat.regular,
    fontSize: 13,
    color: colors.black
  },
  pointsText: {
    fontFamily: fonts.montserrat.semiBold,
    fontSize: 12,
    color: colors.black
  }
})

const Wallet = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <HeaderPage title={"Carteira"} style={styles.title}/>
    <Text style={styles.descriptionText}>Seu saldo na carteira</Text>
    <Text style={styles.descriptionTextMoney}>R$ 20,00</Text>

    <View style={styles.clickableOptions}>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods', { from: 'Wallet' })}>
        <Image source={images.payment_forms}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SwitchPoints', { from: 'Wallet' })}>
        <Image source={images.rescue_points}/>
      </TouchableOpacity>
    </View>

    <View style={styles.root}>
      <Text style={styles.infoBoldText}>Junte pontos e ganhe descontos</Text>
      <Text style={styles.infoText}>Cada R$ 1 gasto e validado pelo código da compra = 1 ponto</Text>
      <Image source={images.slider} />
      <Text style={styles.pointsText}>50 pts</Text>
    </View>
  </View>
)

Wallet.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Wallet.defaultProps = {
  navigation: { navigate: () => null },
}

export default Wallet
