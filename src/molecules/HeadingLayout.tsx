import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '../common/style/Styles'
import MarginBottom, { MarginBottomProps } from '../atoms/MarginBottom'
import { GutterEnum } from '../common/style/type'

export type HeadingLayoutProps = {
  marginBottom?: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  children?: React.ReactNode
} & HeadingLayoutStyleType

type HeadingLayoutStyleType = {
  color?: string
}

const Heading = styled.h2`
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 2.4rem;
  }

  ${(props: HeadingLayoutStyleType) => {
    const { color } = props
    if (color) {
      return css`
        color: ${color};
      `
    }
    return css``
  }}
`

const HeadingLayout: React.FC<HeadingLayoutProps> = (
  props: HeadingLayoutProps
): JSX.Element => {
  const { color, marginBottom, children } = props

  const marginBottomOptions: MarginBottomProps = marginBottom
    ? { spSize: marginBottom.sp, pcSize: marginBottom.pc }
    : { spSize: GutterEnum.small, pcSize: GutterEnum.exMedium }

  return (
    <MarginBottom {...marginBottomOptions}>
      <Heading color={color}>{children}</Heading>
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
