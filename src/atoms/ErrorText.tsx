import React from 'react'
import styled from 'styled-components'

export type ErrorTextProps = {
  children?: React.ReactNode
}

const Text = styled.p`
  font-size: 1, 2rem;
  color: #fff;
`

const ErrorText: React.FC<ErrorTextProps> = (
  props: ErrorTextProps
): JSX.Element => {
  const { children } = props
  return <Text>※{children}</Text>
}

export default ErrorText
