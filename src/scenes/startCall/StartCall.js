import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet } from 'react-native'
import { HeaderTitle } from 'react-navigation-stack'
import { fonts, colors } from 'theme'
import { Image } from '../../components/commom/styled'
import { images } from '../../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderPage from '../../components/commom/HeaderPage/HeaderPage'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  descriptionText: {
    fontSize: 17,
    fontFamily: fonts.montserrat.semiBold,
    color: colors.black
  },
})

const StarCall = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <HeaderPage title={"Iniciar vídeo chamada"} style={styles.title}/>
      <Text style={styles.descriptionText}>O link da sua chamada foi gerado</Text>
      <Text style={styles.descriptionText}>agora é só mandar para os amigos!!!</Text>

      <View style={styles.root}>
        <TouchableOpacity>
          <Image source={images.share}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.whatsapp}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

StarCall.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

StarCall.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default StarCall