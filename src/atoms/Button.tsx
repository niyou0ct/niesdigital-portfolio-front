import React, { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import Styles, { device } from '@/common/style/Styles'

export type ButtonProps = {
  styleTypes?: ButtonTypeEnum[]
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ButtonTypeEnum {
  DEFAULT = 'default',
  ROUND = 'round',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small'
}

const defaultStyles = css`
  width: 100%;
  max-width: 122px;
  min-height: 48px;
  font-size: ${Styles.font.small};
  background-color: #fff;
  border-radius: ${Styles.border.radius};
  border: 1px solid #fff;
  cursor: pointer;
  transition: 0.25s;

  @media ${device.tablet} {
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`

const roundStyles = css`
  border-radius: 50%;
`

const buttonStyles = {
  [ButtonTypeEnum.DEFAULT]: defaultStyles,
  [ButtonTypeEnum.ROUND]: roundStyles
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, type } = props

  const Element = styled.button`
    ${buttonStyles.default}
  `

  return (
    // eslint-disable-next-line react/button-has-type
    <Element type={type || 'button'} {...props}>
      {children}
    </Element>
  )
}

Button.defaultProps = {
  styleTypes: [ButtonTypeEnum.DEFAULT],
  type: 'button'
}

export default Button
