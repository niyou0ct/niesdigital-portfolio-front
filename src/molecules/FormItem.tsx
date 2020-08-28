import React from 'react'
import styled, { css } from 'styled-components'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'

export type FormItemProps = {
  title: string
  children?: React.ReactNode
} & FormItemStyleType

type FormItemStyleType = {
  maxWidth?: string
}

const Wrap = styled.div`
  ${(props: FormItemStyleType) => {
    const { maxWidth } = props

    if (maxWidth) {
      return css`
        max-width: ${maxWidth};
      `
    }

    return css``
  }}

  & + & {
    margin-top: 24px;
  }
`

const Title = styled.div`
  color: #fff;
  font-size: 1.4rem;
`

const FormItem: React.FC<FormItemProps> = (
  props: FormItemProps
): JSX.Element => {
  const { title, maxWidth, children } = props

  return (
    <Wrap maxWidth={maxWidth}>
      <MarginBottom spSize={GutterEnum.exSmall} pcSize={GutterEnum.exSmall}>
        <Title>{title}</Title>
      </MarginBottom>
      {children}
    </Wrap>
  )
}

export default FormItem
