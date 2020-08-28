import React from 'react'
import styled, { css } from 'styled-components'
import { customMedia } from '@/common/style/Mixin'
import { GutterEnum, BgColorEnum } from '../common/style/type'

export type ContentsLayoutProps = {
  children?: React.ReactNode
} & ContentsLayoutStyleType

type ContentsLayoutStyleType = {
  paddingTop?: {
    sp: GutterEnum
    pc: GutterEnum
  }
  paddingBottom?: {
    sp: GutterEnum
    pc: GutterEnum
  }
  bgColor?: BgColorEnum
}

const Wrap = styled.div`
  ${(props: ContentsLayoutStyleType) => {
    const { paddingTop, paddingBottom, bgColor } = props

    return css`
      background-color: ${bgColor};
      padding-top: ${paddingTop?.sp}px;
      padding-bottom: ${paddingBottom?.sp}px;

      ${customMedia.greaterThan('tablet')`
        padding-top: ${paddingTop?.pc}px;
        padding-bottom: ${paddingBottom?.pc}px;
      `}
    `
  }}
`

const ContentsLayout: React.FC<ContentsLayoutProps> = (
  props: ContentsLayoutProps
): JSX.Element => {
  const { paddingTop, paddingBottom, bgColor, children } = props

  return (
    <Wrap
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      bgColor={bgColor}>
      {children}
    </Wrap>
  )
}

ContentsLayout.defaultProps = {
  paddingTop: {
    sp: GutterEnum.superLarge,
    pc: GutterEnum.superLarge
  },
  paddingBottom: {
    sp: GutterEnum.superLarge,
    pc: GutterEnum.superLarge
  },
  bgColor: BgColorEnum.WHITE
}

export default ContentsLayout
