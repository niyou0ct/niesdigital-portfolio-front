import React from 'react'
import { BgColorEnum, GutterEnum } from '@/common/style/type'
import HeadingLayout from '@/molecules/HeadingLayout'
import FormItem, { FormItemProps } from '@/molecules/FormItem'
import TextInput from '@/atoms/TextInput'
import TextArea from '@/atoms/TextArea'
import Button from '@/atoms/Button'
import styled from 'styled-components'
import MarginBottom from '@/atoms/MarginBottom'
import Image from '@/atoms/Image'
import { device } from '@/common/style/Styles'
import ContentsLayout from './ContentsLayout'
import BaseLayout from './BaseLayout'
import Form from './Form'

const Wrap = styled.div`
  position: relative;
`

const FormBox = styled.div`
  position: relative;
  z-index: 10;
  max-width: 536px;
`

const ImageWrap = styled.span`
  position: absolute;
  top: -102px;
  right: 0;
  width: 184px;

  @media ${device.tablet} {
    width: 362px;
  }
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const formItemOptions: FormItemProps[] = [
  {
    title: 'メールアドレス',
    maxWidth: '260px',
    children: <TextInput type="email" placeholder="sample@gmail.com" />
  },
  {
    title: 'お名前・貴社名',
    maxWidth: '260px',
    children: <TextInput type="text" />
  },
  {
    title: 'お問い合わせ内容',
    maxWidth: '536px',
    children: <TextArea placeholder="カジュアルなご相談も喜んで対応します" />
  }
]

const ContactSection: React.FC = (): JSX.Element => {
  const formItemElements: JSX.Element[] = formItemOptions.map(
    (item: FormItemProps): JSX.Element => (
      <FormItem key={item.title} {...item} />
    )
  )

  return (
    <ContentsLayout bgColor={BgColorEnum.BLACK}>
      <BaseLayout>
        <HeadingLayout color="#6f6f6f">Contact</HeadingLayout>
        <Wrap>
          <ImageWrap>
            <Image src="/letter.svg" alt="letter" />
          </ImageWrap>
          <FormBox>
            <Form>
              <MarginBottom spSize={GutterEnum.small} pcSize={GutterEnum.small}>
                {formItemElements}
              </MarginBottom>
              <ButtonWrap>
                <Button>送信</Button>
              </ButtonWrap>
            </Form>
          </FormBox>
        </Wrap>
      </BaseLayout>
    </ContentsLayout>
  )
}

export default ContactSection
