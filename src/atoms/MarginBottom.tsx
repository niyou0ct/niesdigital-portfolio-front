import React from 'react'
import styled from 'styled-components'
import { MarginEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type MarginBottomProps = {
  spSize: MarginEnum
  pcSize: MarginEnum
  children?: React.ReactNode
}
const MarginBottom: React.FC<MarginBottomProps> = (
  props: MarginBottomProps
): JSX.Element => {
  const { spSize, pcSize, children } = props
  const Wrap = styled.div`
    margin-bottom: ${spSize};
    @media ${device.tablet} {
      margin-bottom: ${pcSize};
    }
  `
  return <Wrap>{children}</Wrap>
}

export default MarginBottom
