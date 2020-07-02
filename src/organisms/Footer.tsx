import React from 'react'
import { BgColorEnum, LayoutSizeEnum, GutterEnum } from '@/common/style/type'
import LogoWithTag from '@/molecules/LogoWithTag'
import MarginBottom from '@/atoms/MarginBottom'
import styled from 'styled-components'
import Styles, { device } from '@/common/style/Styles'
import Image, { ImageProps } from '@/atoms/Image'
import ContentsLayout from './ContentsLayout'
import BaseLayout from './BaseLayout'

type IconLinkProps = {
  link: string
} & ImageProps

const Wrap = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: flex-end;
  }
`

const List = styled.ul`
  display: flex;
`
const Item = styled.li`
  font-size: ${Styles.font.small};
  color: #fff;

  @media ${device.tablet} {
    font-size: ${Styles.font.medium};
  }

  & + & {
    margin-left: ${GutterEnum.small}px;

    @media ${device.tablet} {
      margin-left: ${GutterEnum.exMedium}px;
    }
  }
`

const IconList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-top: ${GutterEnum.superLarge}px;

  @media ${device.tablet} {
    margin-top: 0;
    margin-left: 101px;
  }
`

const Icon = styled.li`
  cursor: pointer;

  & + & {
    margin-left: ${GutterEnum.small}px;
  }
`

const Link = styled.a``

const menuItems: string[] = ['Price', 'Works', 'Blog', 'Contact']
const iconItems: IconLinkProps[] = [
  {
    src: '/twitter_white.svg',
    alt: 'twitter',
    link: 'https://twitter.com/niesdigital'
  },
  {
    src: '/note_white.svg',
    alt: 'note',
    link: 'https://note.com/yuki_niiuchi'
  },
  {
    src: '/facebook_white.svg',
    alt: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100011467639939'
  }
]

const Footer: React.FC = (): JSX.Element => {
  const itemElements: JSX.Element[] = menuItems.map(
    (item: string): JSX.Element => <Item key={item}>{item}</Item>
  )

  const iconLinkElements: JSX.Element[] = iconItems.map(
    (item: IconLinkProps): JSX.Element => (
      <Icon key={item.src}>
        <Link href={item.link} target="_blank">
          <Image src={item.src} alt={item.alt} />
        </Link>
      </Icon>
    )
  )
  return (
    <ContentsLayout
      paddingTop={{
        sp: GutterEnum.large,
        pc: GutterEnum.large
      }}
      paddingBottom={{
        sp: GutterEnum.large,
        pc: GutterEnum.large
      }}
      bgColor={BgColorEnum.BLACK}>
      <BaseLayout size={LayoutSizeEnum.LARGE}>
        <MarginBottom spSize={GutterEnum.medium} pcSize={GutterEnum.small}>
          <LogoWithTag reverse />
        </MarginBottom>
        <Wrap>
          <List>{itemElements}</List>
          <IconList>{iconLinkElements}</IconList>
        </Wrap>
      </BaseLayout>
    </ContentsLayout>
  )
}

export default Footer