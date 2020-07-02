import React, { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Element = styled.textarea`
  border-radius: ${Styles.border.radius};
  font-size: ${Styles.font.small};
  padding: 9px 8px;
  background-color: #fff;
  min-height: 98px;
  border: 1px ${Styles.color.grey.medium} solid;
  color: ${Styles.color.grey.darker};
  width: 100%;

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
  return <Element {...props} />
}

TextArea.defaultProps = {
  rows: 4
}

export default TextArea
