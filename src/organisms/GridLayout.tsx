import React from 'react'
import { GutterEnum } from '@/common/style/type'
import styled from 'styled-components'
import { device } from '@/common/style/Styles'

export type GridLayoutProps = {
  marginLeft: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  marginBottom: {
    sp: GutterEnum | 0
    pc: GutterEnum | 0
  }
  children?: React.ReactNode
}

const GridLayout: React.FC<GridLayoutProps> = (
  props: GridLayoutProps
): JSX.Element => {
  const { marginLeft, marginBottom, children } = props

  const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -${marginLeft.sp}px;
    margin-bottom: -${marginBottom.sp}px;

    @media ${device.tablet} {
      margin-left: -${marginLeft.pc}px;
      margin-bottom: -${marginBottom.pc}px;
    }
  `
  return <Wrap>{children}</Wrap>
}

export default GridLayout
