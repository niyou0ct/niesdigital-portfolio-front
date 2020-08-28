import React from 'react'
import { GutterEnum } from '@/common/style/type'
import styled, { css } from 'styled-components'
import { customMedia } from '@/common/style/Mixin'

export type GridLayoutProps = {
  children?: React.ReactNode
} & GridLayoutStyleType

type GridLayoutStyleType = {
  marginLeft: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  marginBottom: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${(props: GridLayoutStyleType) => {
    const { marginLeft, marginBottom } = props

    return css`
      margin-left: -${marginLeft.sp}px;
      margin-bottom: -${marginBottom.sp}px;

      ${customMedia.greaterThan('tablet')`
        margin-left: -${marginLeft.pc}px;
        margin-bottom: -${marginBottom.pc}px;
      `}
    `
  }}
`

const GridLayout: React.FC<GridLayoutProps> = (
  props: GridLayoutProps
): JSX.Element => {
  const { marginLeft, marginBottom, children } = props

  return (
    <Wrap marginLeft={marginLeft} marginBottom={marginBottom}>
      {children}
    </Wrap>
  )
}

export default GridLayout
