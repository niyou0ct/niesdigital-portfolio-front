import React from 'react'
import styled from 'styled-components'
import Styles, { device } from '../common/style/Styles'
import MarginBottom from '../atoms/MarginBottom'
import { GutterEnum } from '../common/style/type'

export type HeadingLayoutProps = {
  color?: string
  children?: React.ReactNode
}

const HeadingLayout: React.FC<HeadingLayoutProps> = (
  props: HeadingLayoutProps
): JSX.Element => {
  const { color, children } = props
  const Heading = styled.h2`
    font-size: 20px;
    color: ${color};

    @media ${device.tablet} {
      font-size: ${Styles.font.large};
    }
  `
  return (
    <MarginBottom spSize={GutterEnum.small} pcSize={GutterEnum.exMedium}>
      <Heading>{children}</Heading>
    </MarginBottom>
  )
}

export default HeadingLayout
