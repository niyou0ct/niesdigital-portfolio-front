import React from 'react'
import styled from 'styled-components'
import { MarginEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type ContentsLayoutProps = {
  marginBottom?: {
    sp?: MarginEnum
    pc?: MarginEnum
  }
  pcMarginBottom?: MarginEnum
  children?: React.ReactNode
}

const ContentsLayout: React.FC<ContentsLayoutProps> = (
  props: ContentsLayoutProps
): JSX.Element => {
  const { marginBottom, children } = props

  const Wrap = styled.div`
    margin-bottom: ${marginBottom?.sp};
    @media ${device.tablet} {
      margin-bottom: ${marginBottom?.pc};
    }
  `

  return <Wrap>{children}</Wrap>
}

ContentsLayout.defaultProps = {
  marginBottom: {
    sp: MarginEnum.superLarge,
    pc: MarginEnum.superLarge
  }
}

export default ContentsLayout
