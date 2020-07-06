import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import { colors, fonts, images } from '../../theme'
import HeaderPage from '../../components/commom/HeaderPage/HeaderPage'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ClickableImage from '../../components/commom/clickableImage/ClickableImage'
import { Image, RowClickableContainer } from '../../components/commom/styled'

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
    alignItems: "center",
  },
  infoText: {
    fontFamily: fonts.montserrat.semiBold,
    fontSize: 17,
    color: colors.black
  },
  pointsText: {
    fontFamily: fonts.montserrat.semiBold,
    fontSize: 12,
    color: colors.black
  }
})

const SwitchPoints = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <HeaderPage title={"Resgatar Pontos"}/>
      <Text style={styles.infoText}>Seu saldo de pontos</Text>
      <View style={styles.clickableOptions}>
        <Text style={styles.pointsText}>50 pts</Text>
        <Image source={images.glass} />
      </View>
    </View>
  )
}

SwitchPoints.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

SwitchPoints.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default SwitchPoints
