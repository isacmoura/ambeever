import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { images } from 'theme'
import { colors } from 'theme'

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
     justifyContent: "center"
   },
  arrowRight: {
    alignItems: "flex-end",
    marginLeft: 230,
    marginTop: 20
  }
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={styles.alignArrow}>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet', { from: 'Home' })}>
          <Image source={images.arrow_right} style={styles.arrowRight} />
      </TouchableOpacity>
    </View>
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
