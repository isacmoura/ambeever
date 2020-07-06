import React from 'react'
import PropTypes from 'prop-types'
import {View, StatusBar, Text, StyleSheet } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import { fonts, colors } from 'theme'
import { Image } from '../../components/commom/styled'
import { images } from '../../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    alignContent: "center",
    backgroundColor: colors.yellow,
  },
})

const StartParty = ({ navigation }) => (
  <View style={styles.root} >
    <StatusBar barStyle="light-content" />
    <HeaderTitle title={"Sua festa"}/>

    <TouchableOpacity onPress={() => navigation.navigate('StartCall', { from: 'StartParty' })}>
      <Image source={images.video_chamada} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={images.jogos} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={images.escolher_bebidas} />
    </TouchableOpacity>
  </View>
)

StartParty.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

StartParty.defaultProps = {
  navigation: { navigate: () => null },
}

export default StartParty
