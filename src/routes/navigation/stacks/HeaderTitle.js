import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { images } from 'theme'
import { fonts, colors } from '../../../theme'

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 43,
  },
  sameSide: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 52,
  },
  welcomeText: {
    fontFamily: fonts.montserrat.extraBold,
    color: colors.black,
    textAlign: "left",
    fontSize: 22,
    paddingBottom: 10,
    paddingLeft: 8,
  },
  points: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "center",
  },
  icon: {
    paddingRight: 15,
  },
  pointsFont: {
    fontFamily: fonts.montserrat.semiBold,
    height: 24,
    paddingLeft: 13,
    paddingTop: 2,
    color: colors.darkGray
  },
});

const HeaderTitle = () => {
  return(
    <View style={styles.header}>
      <View style={styles.sameSide}>
        <Image source={images.persona} style={styles.avatar} />
        <Text style={styles.welcomeText}>Bem vinda, Day!</Text>
      </View>
      <View style={styles.points}>
        <Image source={images.star} style={styles.icon} />
        <Text style={styles.pointsFont}>50 pontos</Text>
      </View>
      <View style={styles.points}>
        <Image source={images.wallet} style={styles.icon} />
        <Text style={styles.pointsFont}>R$ 20,00</Text>
      </View>
    </View>    
  );
}

HeaderTitle.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
HeaderTitle.defaultProps = {
  navigation: { navigate: () => null }
}


export default HeaderTitle
