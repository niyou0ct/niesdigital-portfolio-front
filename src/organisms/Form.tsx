import React from 'react'

export type FormProps = {
  children?: React.ReactNode
}

const Form: React.FC<FormProps> = (props: FormProps): JSX.Element => {
  const { children } = props
  return <form>{children}</form>
}

export default Form
