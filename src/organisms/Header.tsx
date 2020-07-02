import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LogoWithTag from '../molecules/LogoWithTag'
import Styles, { device } from '../common/style/Styles'
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
  margin-left: ${Styles.margin.medium}px !important;

  @media ${device.tablet} {
    margin-left: ${Styles.margin.exLarge}px !important;
  }
`

const Nav = styled.li`
  & + & {
    margin-left: ${Styles.margin.exSmall}px;

    @media ${device.tablet} {
      margin-left: ${Styles.margin.small}px;
    }
  }
`

const LinkText = styled.a`
  font-size: ${Styles.font.exSmall};

  @media ${device.tablet} {
    margin-left: ${Styles.font.small};
  }
`

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <BaseLayout size={LayoutSizeEnum.LARGE}>
      <Container>
        <div>
          <LogoWithTag hasLink />
        </div>
        <NavList>
          <Nav>
            <Link href="/price">
              <LinkText>Price</LinkText>
            </Link>
          </Nav>
          <Nav>
            <Link href="/works">
              <LinkText>Works</LinkText>
            </Link>
          </Nav>
          <Nav>
            <Link href="/blog">
              <LinkText>Blog</LinkText>
            </Link>
          </Nav>
          <Nav>
            <Link href="/contact">
              <LinkText>Contact</LinkText>
            </Link>
          </Nav>
        </NavList>
      </Container>
    </BaseLayout>
  )
}

export default Header
