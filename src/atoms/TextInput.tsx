import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'

export type TextInputProps = { formRef?: any } & InputHTMLAttributes<
  HTMLInputElement
>

const Input = styled.input`
  border-radius: ${Styles.border.radius};
  font-size: 1.4rem;
  padding: 9px 8px;
  background-color: #fff;
  height: 40px;
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

const TextInput: React.FC<TextInputProps> = (
  props: TextInputProps
): JSX.Element => {
  const { formRef, ...others } = props
  return <Input {...others} ref={formRef} />
}

export default TextInput
