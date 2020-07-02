import React from 'react'
import styled from 'styled-components'
import Styles, { device } from '@/common/style/Styles'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'

export type ServiceItemProps = {
  title: string
  lead: string
  text: string
}

const Wrap = styled.div`
  background-color: #fff;
  padding: 16px;

  @media ${device.tablet} {
    padding: 24px 32px;
    height: 100%;
  }
`

const Title = styled.h3`
  font-size: ${Styles.font.medium};

  @media ${device.tablet} {
    font-size: 20px;
  }
`

const Lead = styled.div`
  font-size: ${Styles.font.exSmall};

  @media ${device.tablet} {
    font-size: ${Styles.font.medium};
  }
`

const Text = styled.p`
  font-size: ${Styles.font.exSmall};

  @media ${device.tablet} {
    font-size: ${Styles.font.small};
  }
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
