import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LogoWithTag from '../molecules/LogoWithTag'
import Styles from '../common/Styles'

export type HeaderProps = {
  [key: string]: any
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 15px;
`

const NavList = styled.ul`
  display: flex;
  margin-left: 56px;
`

const Nav = styled.li`
  & + & {
    margin-left: 24px;
  }
`

const LinkText = styled.a`
  font-size: ${Styles.font.small};
`

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
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
  )
}

export default Header
