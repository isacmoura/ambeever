import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'



const GameRoom = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

GameRoom.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

GameRoom.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default GameRoom