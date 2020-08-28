import React from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'
import { customMedia } from '@/common/style/Mixin'

export type PriceCardProps = {
  title: string
  text: string
  price: string
}

const Wrap = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: ${Styles.border.radius};

  ${customMedia.greaterThan('tablet')`
    padding: 20px 24px;
  `}

  & + & {
    margin-top: ${GutterEnum.small}px;
  }
`

const Title = styled.h3`
  font-size: 1.4rem;

  ${customMedia.greaterThan('tablet')`
    font-size: 1.6rem;
  `}
`

const Text = styled.p`
  font-size: 1.4rem;
  margin-bottom: ${GutterEnum.exSmall}px;
`

const PriceBox = styled.div`
  font-size: 1.4rem;
  text-align: right;
`

const PriceText = styled.span`
  font-size: 1.4rem;
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
