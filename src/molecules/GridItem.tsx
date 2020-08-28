import React from 'react'
import { GutterEnum } from '@/common/style/type'
import styled, { css } from 'styled-components'
import { customMedia } from '@/common/style/Mixin'

export type GridItemProps = {
  children?: React.ReactNode
} & GridItemStyleType

type GridItemStyleType = {
  width: {
    sp: string
    pc: string
  }
  paddingLeft: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  paddingBottom: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
}

const Wrap = styled.div`
  ${(props: GridItemStyleType) => {
    const { width, paddingLeft, paddingBottom } = props

    return css`
      width: ${width.sp};
      padding-left: ${paddingLeft.sp}px;
      padding-bottom: ${paddingBottom.sp}px;

      ${customMedia.greaterThan('tablet')`
        width: ${width.pc};
        padding-left: ${paddingLeft.pc}px;
        padding-bottom: ${paddingBottom.pc}px;
      `}
    `
  }}
`

const GridItem: React.FC<GridItemProps> = (
  props: GridItemProps
): JSX.Element => {
  const { width, paddingLeft, paddingBottom, children } = props

  return (
    <Wrap width={width} paddingLeft={paddingLeft} paddingBottom={paddingBottom}>
      {children}
    </Wrap>
  )
}

export default GridItem
