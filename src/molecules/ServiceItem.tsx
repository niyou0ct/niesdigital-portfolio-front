import React from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'
import { customMedia } from '@/common/style/Mixin'

export type ServiceItemProps = {
  title: string
  lead: string
  text: string
}

const Wrap = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: ${Styles.border.radius};

  ${customMedia.greaterThan('tablet')`
    padding: 24px 32px;
    height: 100%;
  `}
`

const Title = styled.h3`
  font-size: 1.6rem;

  ${customMedia.greaterThan('tablet')`
    font-size: 20px;
  `}
`

const Lead = styled.div`
  font-size: 1.2rem;

  ${customMedia.greaterThan('tablet')`
    font-size: 1.6rem;
  `}
`

const Text = styled.p`
  font-size: 1.2rem;

  ${customMedia.greaterThan('tablet')`
    font-size: 1.4rem;
  `}
`

const ServiceItem: React.FC<ServiceItemProps> = (
  props: ServiceItemProps
): JSX.Element => {
  const { title, lead, text } = props
  return (
    <Wrap>
      <MarginBottom spSize={GutterEnum.small} pcSize={GutterEnum.exMedium}>
        <Title>{title}</Title>
      </MarginBottom>
      <MarginBottom spSize={GutterEnum.exSmall} pcSize={GutterEnum.exSmall}>
        <Lead>{lead}</Lead>
      </MarginBottom>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Wrap>
  )
}

export default ServiceItem
