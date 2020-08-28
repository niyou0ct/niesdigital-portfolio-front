import React from 'react'
import { useForm } from 'react-hook-form'
import { BgColorEnum, GutterEnum } from '@/common/style/type'
import HeadingLayout from '@/molecules/HeadingLayout'
import FormItem, { FormItemProps } from '@/molecules/FormItem'
import TextInput from '@/atoms/TextInput'
import TextArea from '@/atoms/TextArea'
import Button from '@/atoms/Button'
import styled from 'styled-components'
import MarginBottom from '@/atoms/MarginBottom'
import Image from '@/atoms/Image'
import { customMedia } from '@/common/style/Mixin'
import { Contact } from '@/models/Contact'
import { postEmailOnContact } from '@/service/contact'
import ContentsLayout from './ContentsLayout'
import BaseLayout from './BaseLayout'

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

  ${customMedia.greaterThan('tablet')`
    width: 362px;
  `}
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ContactSection: React.FC = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<Contact>()

  const onSubmit = async (params: Contact): Promise<void> => {
    const response = await postEmailOnContact(params)

    if (response.data.result) {
      window.alert(
        'お問い合わせありがとうございます!数営業日以内にご連絡差し上げます。しばらくお待ちくださいませ。'
      )
    } else {
      window.alert(
        'サーバーエラーが発生しております。復旧までしばらくお待ちくださいませ。大変申し訳ございません。'
      )
    }
  }

  const formItemOptions: FormItemProps[] = [
    {
      title: 'メールアドレス',
      maxWidth: '260px',
      errorText: errors.email
        ? 'メールアドレスを正しく入力してください'
        : undefined,
      children: (
        <TextInput
          type="email"
          name="email"
          placeholder="sample@gmail.com"
          formRef={register({ required: true, pattern: /[^\s]+@[^\s]+/ })}
        />
      )
    },
    {
      title: 'お名前・貴社名',
      maxWidth: '260px',
      errorText: errors.name
        ? 'お名前または貴社名を入力してください'
        : undefined,
      children: (
        <TextInput
          type="text"
          name="name"
          formRef={register({ required: true })}
        />
      )
    },
    {
      title: 'お問い合わせ内容',
      maxWidth: '536px',
      errorText: errors.detail
        ? 'お問い合わせ内容を入力してください'
        : undefined,
      children: (
        <TextArea
          name="detail"
          placeholder="カジュアルなご相談も喜んで対応します"
          formRef={register({ required: true })}
        />
      )
    }
  ]

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <MarginBottom spSize={GutterEnum.small} pcSize={GutterEnum.small}>
                {formItemElements}
              </MarginBottom>
              <ButtonWrap>
                <Button type="submit">送信</Button>
              </ButtonWrap>
            </form>
          </FormBox>
        </Wrap>
      </BaseLayout>
    </ContentsLayout>
  )
}

export default ContactSection
