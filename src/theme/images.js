import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  persona: require('../../assets/images/persona.jpeg'),
  star: require('../../assets/images/star.png'),
  wallet: require('../../assets/images/wallet.png'),
  arrow_right: require('../../assets/images/arrow-right.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
