import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import Styles from '@/common/style/Styles'
import { customMedia } from '@/common/style/Mixin'
import LinkTo, { LinkToProps } from './LinkTo'

export type ButtonProps = {
  link?: LinkToProps
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLDivElement> &
  ButtonStyleType

type ButtonStyleType = {
  round?: boolean
}

const ButtonElement = styled.button`
  width: 100%;
  max-width: 122px;
  min-height: 48px;
  font-size: 1.4rem;
  background-color: #fff;
  border-radius: ${Styles.border.radius};
  border: 1px solid #fff;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    ${customMedia.greaterThan('tablet')`
      background-color: #000;
      color: #fff;
    `}
  }

  ${(props: ButtonStyleType) => {
    const { round } = props

    if (round) {
      return css`
        border-radius: 50%;
      `
    }

    return css``
  }}
`

const LinkButtonElement = ButtonElement.withComponent('div')

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, round, link, ...others } = props

  if (link) {
    return (
      <LinkTo {...link}>
        <LinkButtonElement {...others} round={round}>
          {children}
        </LinkButtonElement>
      </LinkTo>
    )
  }

  return (
    <ButtonElement {...others} round={round}>
      {children}
    </ButtonElement>
  )
}

export default Button
