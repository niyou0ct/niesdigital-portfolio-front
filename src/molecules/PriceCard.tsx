import React from 'react'
import styled from 'styled-components'
import Styles, { device } from '@/common/style/Styles'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'

export type PriceCardProps = {
  title: string
  text: string
  price: string
}

const Wrap = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: ${Styles.border.radius};

  @media ${device.tablet} {
    padding: 20px 24px;
  }

  & + & {
    margin-top: ${GutterEnum.small}px;
  }
`

const Title = styled.h3`
  font-size: ${Styles.font.small};

  @media ${device.tablet} {
    font-size: ${Styles.font.medium};
  }
`

const Text = styled.p`
  font-size: ${Styles.font.small};
  margin-bottom: ${GutterEnum.exSmall}px;
`

const PriceBox = styled.div`
  font-size: ${Styles.font.small};
  text-align: right;
`

const PriceText = styled.span`
  font-size: ${Styles.font.small};
`

const PriceCard: React.FC<PriceCardProps> = (
  props: PriceCardProps
): JSX.Element => {
  const { title, price, text } = props
  return (
    <Wrap>
      <MarginBottom spSize={GutterEnum.exSmall} pcSize={GutterEnum.exSmall}>
        <Title>{title}</Title>
      </MarginBottom>
      <Text>{text}</Text>
      <PriceBox>
        <PriceText>{price}</PriceText>
      </PriceBox>
    </Wrap>
  )
}

export default PriceCard
