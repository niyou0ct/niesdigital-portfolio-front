import React from 'react'
import HeadArea, { HeadAreaProps } from '@/molecules/HeadArea'
import styled, { css, CSSProperties } from 'styled-components'
import { customMedia } from '@/common/style/Mixin'
import Header from './Header'
import Footer from './Footer'

export type CommonLayoutProps = {
  headArea: HeadAreaProps
  isTop?: boolean
  children?: React.ReactNode
  offFotter?: boolean
  offRibbon?: boolean
  style?: CSSProperties
}

const Wrap = styled.div`
  ${(props: { offFotter: boolean }) => {
    const { offFotter } = props
    if (offFotter) {
      return css`
        padding-bottom: 100px;
        ${customMedia.greaterThan('tablet')`
          padding-bottom: 120px
        `}
      `
    }

    return css``
  }}
`

const Main = styled.main``

const CommonLayout: React.FC<CommonLayoutProps> = (
  props: CommonLayoutProps
): JSX.Element => {
  const { headArea, children, offFotter, style } = props

  return (
    <Wrap offFotter={offFotter || false} style={style}>
      <HeadArea {...headArea} />
      <Header />
      <Main>{children}</Main>
      {!offFotter && <Footer />}
    </Wrap>
  )
}

export default CommonLayout
