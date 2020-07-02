import React from 'react'
import styled from 'styled-components'
import { GutterEnum } from '../common/style/type'
import { device } from '../common/style/Styles'

export type MarginBottomProps = {
  spSize: GutterEnum
  pcSize: GutterEnum
  children?: React.ReactNode
}
const MarginBottom: React.FC<MarginBottomProps> = (
  props: MarginBottomProps
): JSX.Element => {
  const { spSize, pcSize, children } = props
  const Wrap = styled.div`
    margin-bottom: ${spSize}px;
    @media ${device.tablet} {
      margin-bottom: ${pcSize}px;
    }
  `
  return <Wrap>{children}</Wrap>
}

export default MarginBottom
