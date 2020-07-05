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
  pedir_bebidas: require('../../assets/images/clickables/pedir-bebidas.png'),
  comecar_festa: require('../../assets/images/clickables/comecar-festa.png'),
  trocar_prontos: require('../../assets/images/clickables/trocar-prontos.png'),
  consumir_bar: require('../../assets/images/clickables/consumir-bar.png'),
  brahma: require('../../assets/images/bebidas/brahma.png'),
  budweiser: require('../../assets/images/bebidas/budweiser.png'),
  colorado: require('../../assets/images/bebidas/colorado.png'),
  corona: require('../../assets/images/bebidas/corona.png'),
  antartica: require('../../assets/images/bebidas/antartica.png'),
  jack: require('../../assets/images/bebidas/jack.png'),
  skol: require('../../assets/images/bebidas/skol.png'),
  stella: require('../../assets/images/bebidas/stella.png'),
  logo: require('../../assets/images/logo-big.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
