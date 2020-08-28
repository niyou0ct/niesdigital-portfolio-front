import React, { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'
import TextareaAutosize from 'react-textarea-autosize'

export type TextAreaProps = { formRef?: any } & TextareaHTMLAttributes<
  HTMLTextAreaElement
>

const Element = styled(TextareaAutosize)`
  border-radius: ${Styles.border.radius};
  font-size: 1.4rem;
  padding: 9px 8px;
  background-color: #fff;
  min-height: 98px;
  border: 1px ${Styles.color.grey.medium} solid;
  color: ${Styles.color.grey.darker};
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${Styles.color.grey.medium};
  }

  &:-ms-input-placeholder {
    color: ${Styles.color.grey.medium};
  }

  &::-ms-input-placeholder {
    color: ${Styles.color.grey.medium};
  }
`

const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps
): JSX.Element => {
  const { formRef, style, ...others } = props

  return <Element {...others} ref={formRef} />
}

TextArea.defaultProps = {
  rows: 4
}

export default TextArea
