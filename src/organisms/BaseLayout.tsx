import React from 'react'
import styled from 'styled-components'
import { LayoutSizeEnum, BgColorEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type BaseLayoutProps = {
  size?: LayoutSizeEnum
  bgColor?: BgColorEnum
  children?: React.ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = (
  props: BaseLayoutProps
): JSX.Element => {
  const { size, bgColor, children } = props

  const Wrap = styled.div`
    background-color: ${bgColor};
    padding: 0 12px;

    @media ${device.tablet} {
      padding: 0 15px;
    }
  `

  const Inner = styled.div`
    width: 100%;
    max-width: ${size};
    margin: 0 auto;
  `

  return (
    <Wrap>
      <Inner>{children}</Inner>
    </Wrap>
  )
}

BaseLayout.defaultProps = {
  size: LayoutSizeEnum.MEDIUM,
  bgColor: BgColorEnum.WHITE
}

export default BaseLayout
