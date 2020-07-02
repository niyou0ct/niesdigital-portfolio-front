import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

const Input = styled.input`
  border-radius: ${Styles.border.radius};
  font-size: ${Styles.font.small};
  padding: 9px 8px;
  background-color: #fff;
  height: 40px;
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

const TextInput: React.FC<TextInputProps> = (
  props: TextInputProps
): JSX.Element => {
  return <Input {...props} />
}

export default TextInput
