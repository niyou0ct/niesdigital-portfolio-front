/* eslint-disable import/prefer-default-export */
import { breakpoint } from '@/common/style/Styles'
import { generateMedia } from 'styled-media-query'

export const customMedia = generateMedia({
  mobileS: `${breakpoint.mobileS}px`,
  mobileM: `${breakpoint.mobileM}px`,
  mobileL: `${breakpoint.mobileL}px`,
  tablet: `${breakpoint.tablet}px`,
  laptop: `${breakpoint.laptop}px`,
  laptopL: `${breakpoint.laptopL}px`,
  desktop: `${breakpoint.desktop}px`
})
