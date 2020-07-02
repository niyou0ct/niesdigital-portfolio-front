import React from 'react'
import styled from 'styled-components'
import { LayoutSizeEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type BaseLayoutProps = {
  size?: LayoutSizeEnum
  children?: React.ReactNode
}

const Wrap = styled.div`
  padding: 0 12px;

  @media ${device.tablet} {
    padding: 0 15px;
  }
`

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`

const BaseLayout: React.FC<BaseLayoutProps> = (
  props: BaseLayoutProps
): JSX.Element => {
  const { size, children } = props

  const styles = {
    maxWidth: `${size}px`
  }

  return (
    <Wrap>
      <Inner style={styles}>{children}</Inner>
    </Wrap>
  )
}

BaseLayout.defaultProps = {
  size: LayoutSizeEnum.MEDIUM
}

export default BaseLayout
