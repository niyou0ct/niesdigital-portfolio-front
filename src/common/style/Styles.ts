import { LayoutSizeEnum, GutterEnum } from './type'

const Styles = {
  font: {
    exSmall: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '2.4rem',
    exLarge: '3.2rem'
  },
  color: {
    baseFont: '#333',
    grey: {
      light: '#f7f7f7',
      medium: '#a3a3a3',
      dark: '#777',
      darker: '#3e3e3e'
    }
  },
  margin: {
    superSmall: GutterEnum.superSmall,
    exSmall: GutterEnum.exSmall,
    small: GutterEnum.small,
    medium: GutterEnum.medium,
    exMedium: GutterEnum.exMedium,
    large: GutterEnum.large,
    exLarge: GutterEnum.exLarge,
    superLarge: GutterEnum.superLarge
  },
  border: {
    radius: '5px'
  }
}

export const layout = {
  small: LayoutSizeEnum.SMALL,
  medium: LayoutSizeEnum.MEDIUM,
  large: LayoutSizeEnum.LARGE
}

export const bgColor = {}

export const breakpoint = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

export const device = {
  mobileS: `(min-width: ${breakpoint.mobileS}px)`,
  mobileM: `(min-width: ${breakpoint.mobileM}px)`,
  mobileL: `(min-width: ${breakpoint.mobileL}px)`,
  tablet: `(min-width: ${breakpoint.tablet}px)`,
  laptop: `(min-width: ${breakpoint.laptop}px)`,
  laptopL: `(min-width: ${breakpoint.laptopL}px)`,
  desktop: `(min-width: ${breakpoint.desktop}px)`,
  desktopL: `(min-width: ${breakpoint.desktop}px)`
}

export default Styles
