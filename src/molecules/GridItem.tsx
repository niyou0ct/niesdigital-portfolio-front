import React from 'react'
import { GutterEnum } from '@/common/style/type'
import styled from 'styled-components'
import { device } from '@/common/style/Styles'

export type GridItemProps = {
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
  children?: React.ReactNode
}

const GridItem: React.FC<GridItemProps> = (
  props: GridItemProps
): JSX.Element => {
  const { width, paddingLeft, paddingBottom, children } = props
  const Wrap = styled.div`
    width: ${width.sp};
    padding-left: ${paddingLeft.sp}px;
    padding-bottom: ${paddingBottom.sp}px;

    @media ${device.tablet} {
      width: ${width.pc};
      padding-left: ${paddingLeft.pc}px;
      padding-bottom: ${paddingBottom.pc}px;
    }
  `
  return <Wrap>{children}</Wrap>
}

export default GridItem
