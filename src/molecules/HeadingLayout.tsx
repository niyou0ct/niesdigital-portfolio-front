import React from 'react'
import styled from 'styled-components'
import Styles, { device } from '../common/style/Styles'
import MarginBottom, { MarginBottomProps } from '../atoms/MarginBottom'
import { GutterEnum } from '../common/style/type'

export type HeadingLayoutProps = {
  color?: string
  marginBottom?: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  children?: React.ReactNode
}

const HeadingLayout: React.FC<HeadingLayoutProps> = (
  props: HeadingLayoutProps
): JSX.Element => {
  const { color, marginBottom, children } = props
  const Heading = styled.h2`
    font-size: 20px;
    color: ${color};

    @media ${device.tablet} {
      font-size: ${Styles.font.large};
    }
  `
  const marginBottomOptions: MarginBottomProps = (() => {
    if (marginBottom) {
      return {
        spSize: marginBottom.sp,
        pcSize: marginBottom.pc
      }
    }

    return {
      spSize: GutterEnum.small,
      pcSize: GutterEnum.exMedium
    }
  })()
  return (
    <MarginBottom {...marginBottomOptions}>
      <Heading>{children}</Heading>
    </MarginBottom>
  )
}

HeadingLayout.defaultProps = {
  marginBottom: {
    sp: GutterEnum.small,
    pc: GutterEnum.exMedium
  }
}

export default HeadingLayout
