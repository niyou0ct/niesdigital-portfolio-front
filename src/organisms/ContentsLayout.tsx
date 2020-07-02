import React from 'react'
import styled from 'styled-components'
import { GutterEnum, BgColorEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type ContentsLayoutProps = {
  paddingTop?: {
    sp: GutterEnum
    pc: GutterEnum
  }
  paddingBottom?: {
    sp: GutterEnum
    pc: GutterEnum
  }
  bgColor?: BgColorEnum
  children?: React.ReactNode
}

const ContentsLayout: React.FC<ContentsLayoutProps> = (
  props: ContentsLayoutProps
): JSX.Element => {
  const { paddingTop, paddingBottom, bgColor, children } = props

  const Wrap = styled.div`
    background-color: ${bgColor};
    padding-top: ${paddingTop?.sp}px;
    padding-bottom: ${paddingBottom?.sp}px;
    @media ${device.tablet} {
      padding-top: ${paddingTop?.pc}px;
      padding-bottom: ${paddingBottom?.pc}px;
    }
  `

  return <Wrap>{children}</Wrap>
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
