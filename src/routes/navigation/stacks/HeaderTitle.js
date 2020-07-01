import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
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
})

const HeaderTitle = () => {
  return(
    <View style={styles.header}>
      <View style={styles.sameSide}>
        <Image source={images.persona} style={styles.avatar} />
        <Text style={styles.welcomeText}>Bem vinda, Day!</Text>
      </View>
      <View style={styles.sameSide}>
        <Image source={images.star} />
        <Text>50 pontos</Text>
      </View>
      <View style={styles.sameSide}>
        <Image source={images.wallet} />
        <Text>R$ 20,00</Text>
      </View>
    </View>    
  );
}

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
