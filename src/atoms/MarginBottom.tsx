import React from 'react'
import styled, { css } from 'styled-components'
import { customMedia } from '@/common/style/Mixin'
import { GutterEnum } from '../common/style/type'

export type MarginBottomProps = {
  children?: React.ReactNode
} & MarginBottomStyleType

type MarginBottomStyleType = {
  spSize: GutterEnum
  pcSize: GutterEnum
}

const Wrap = styled.div`
  ${(props: MarginBottomStyleType) => {
    const { spSize, pcSize } = props
    return css`
      margin-bottom: ${spSize}px;

      ${customMedia.greaterThan('tablet')`
        margin-bottom: ${pcSize}px;
      `}
    `
  }}
`

const MarginBottom: React.FC<MarginBottomProps> = (
  props: MarginBottomProps
): JSX.Element => {
  const { spSize, pcSize, children } = props

  return (
    <Wrap spSize={spSize} pcSize={pcSize}>
      {children}
    </Wrap>
  )
}

export default MarginBottom
