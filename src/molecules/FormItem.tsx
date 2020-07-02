import React from 'react'
import styled from 'styled-components'
import Styles from '@/common/style/Styles'
import MarginBottom from '@/atoms/MarginBottom'
import { GutterEnum } from '@/common/style/type'

export type FormItemProps = {
  title: string
  maxWidth?: string
  children?: React.ReactNode
}

const Wrap = styled.div`
  & + & {
    margin-top: ${GutterEnum.small}px;
  }
`

const Title = styled.div`
  color: #fff;
  font-size: ${Styles.font.small};
`

const FormItem: React.FC<FormItemProps> = (
  props: FormItemProps
): JSX.Element => {
  const { title, maxWidth, children } = props

  const styles = {
    wrap: {
      maxWidth
    }
  }

  return (
    <Wrap style={styles.wrap}>
      <MarginBottom spSize={GutterEnum.exSmall} pcSize={GutterEnum.exSmall}>
        <Title>{title}</Title>
      </MarginBottom>
      {children}
    </Wrap>
  )
}

export default FormItem
