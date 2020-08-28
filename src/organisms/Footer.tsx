import React from 'react'
import { BgColorEnum, LayoutSizeEnum, GutterEnum } from '@/common/style/type'
import LogoWithTag from '@/molecules/LogoWithTag'
import MarginBottom from '@/atoms/MarginBottom'
import styled from 'styled-components'
import Image, { ImageProps } from '@/atoms/Image'
import { customMedia } from '@/common/style/Mixin'
import ContentsLayout from './ContentsLayout'
import BaseLayout from './BaseLayout'

type IconLinkProps = {
  link: string
} & ImageProps

const Wrap = styled.div`
  ${customMedia.greaterThan('tablet')`
    display: flex;
    align-items: flex-end;
  `}
`

const List = styled.ul`
  display: flex;
  ${customMedia.greaterThan('tablet')`
    // margin-right: 101px;
  `}
`
const Item = styled.li`
  font-size: 1.4rem;
  color: #fff;

  ${customMedia.greaterThan('tablet')`
    font-size: 1.6rem;
  `}

  & + & {
    margin-left: ${GutterEnum.small}px;

    ${customMedia.greaterThan('tablet')`
      margin-left: ${GutterEnum.exMedium}px;
    `}
  }
`

const IconList = styled.ul`
  display: flex;
  justify-content: flex-end;
  /* margin-top: ${GutterEnum.superLarge}px; */

  ${customMedia.greaterThan('tablet')`
    margin-top: 0;
  `}
`

const Icon = styled.li`
  cursor: pointer;

  & + & {
    margin-left: ${GutterEnum.small}px;
  }
`

const Link = styled.a``

const menuItems: string[] = []
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
