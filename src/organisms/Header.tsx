import React from 'react'
import styled from 'styled-components'
import { customMedia } from '@/common/style/Mixin'
import LinkTo, { LinkToProps } from '@/atoms/LinkTo'
import LogoWithTag from '../molecules/LogoWithTag'
import BaseLayout from './BaseLayout'
import { LayoutSizeEnum } from '../common/style/type'

export type HeaderProps = {
  [key: string]: any
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const NavList = styled.ul`
  display: flex;
  margin-left: 32px !important;

  ${customMedia.greaterThan('tablet')`
    margin-left: 56px !important;
  `}
`

const Nav = styled.li`
  & + & {
    margin-left: 16px;

    ${customMedia.greaterThan('tablet')`
      margin-left: 24px;
    `}
  }
`

// const LinkText = styled.span`
//   display: block;
//   font-size: 1, 2rem;

//   ${customMedia.greaterThan('tablet')`
//       margin-left: 1.4rem;
//   `}
// `

const navLinkItems: LinkToProps[] = [
  // {
  //   href: '/price',
  //   as: '/price',
  //   children: <LinkText>Price</LinkText>
  // },
  // {
  //   href: '/works',
  //   as: '/works',
  //   children: <LinkText>Works</LinkText>
  // },
  // {
  //   href: '/blog',
  //   as: '/blog',
  //   children: <LinkText>Blog</LinkText>
  // },
  // {
  //   href: '/contact',
  //   as: '/contact',
  //   children: <LinkText>Contact</LinkText>
  // }
]

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const navElements: JSX.Element[] = navLinkItems.map(
    (item: LinkToProps): JSX.Element => (
      <Nav key={item.href}>
        <LinkTo {...item} />
      </Nav>
    )
  )

  return (
    <BaseLayout size={LayoutSizeEnum.LARGE}>
      <Container>
        <div>
          <LogoWithTag hasLink />
        </div>
        <NavList>{navElements}</NavList>
      </Container>
    </BaseLayout>
  )
}

export default Header
