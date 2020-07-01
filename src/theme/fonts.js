import * as Font from 'expo-font'

export const fonts = {
  montserrat: {
    light: 'montserrat_light',
    regular: 'montserrat_regular',
    medium: 'montserrat_medium',
    semiBold: 'montserrat_semiBold',
    bold: 'montserrat_bold',
    extraBold: 'montserrat_extraBold',
  },
}

// fonts preloading
export const fontsAll = [
  {
    montserrat_extraBold: require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
  },
  {
    montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  },
  {
    montserrat_semiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  },
  {
    montserrat_regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
  },
  {
    montserrat_medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
  },
  {
    montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
  },
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
