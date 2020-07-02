import React from 'react'
import styled from 'styled-components'
import Styles, { device } from '@/common/style/Styles'
import { GutterEnum } from '@/common/style/type'
import Image, { ImageProps } from '@/atoms/Image'
import MarginBottom from '@/atoms/MarginBottom'

export type ValueItemProps = {
  title: string
  text: string
  image: ImageProps
  children?: React.ReactNode
}

const textBoxWidth: number = 674 + 56
const Wrap = styled.div`
  position: relative;

  @media ${device.tablet} {
    display: flex;
  }

  &:nth-child(2) {
    @media ${device.tablet} {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }

    .text-box {
      @media ${device.tablet} {
        padding-left: 56px;
      }
    }
  }

  &:nth-child(odd) {
    .text-box {
      @media ${device.tablet} {
        padding-right: 56px;
      }
    }
  }
  & + & {
    margin-top: ${GutterEnum.superLarge}px;

    @media ${device.tablet} {
      margin-top: 150px;
    }
  }
`

const TextBox = styled.div`
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    position: static;
    width: 100%;
    max-width: ${textBoxWidth}px;
  }
`

const ImageBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 170px;

  @media ${device.tablet} {
    position: static;
    width: auto;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`

const Text = styled.p`
  font-size: ${Styles.font.small};
  color: #fff;
`

const Heading = styled.h3`
  font-size: ${Styles.font.large};
  color: #fff;

  @media ${device.tablet} {
    font-size: ${Styles.font.exLarge};
  }
`

const ValueItem: React.FC<ValueItemProps> = (props: ValueItemProps) => {
  const { title, text, image } = props

  return (
    <Wrap>
      <TextBox className="text-box">
        <MarginBottom spSize={GutterEnum.medium} pcSize={GutterEnum.medium}>
          <Heading>{title}</Heading>
        </MarginBottom>
        <Text>{text}</Text>
      </TextBox>
      <ImageBox>
        <Image src={image.src} alt={image.alt} />
      </ImageBox>
    </Wrap>
  )
}

export default ValueItem

ValueItem.defaultProps = {
  image: {
    src: '/design.svg',
    alt: 'sample'
  }
}
