import React from 'react'
import styled from 'styled-components'
import ValueSection from '@/organisms/ValueSection'
import Image from '@/atoms/Image'
import MindSection from '@/organisms/MindSection'
import ServiceSection from '@/organisms/ServiceSection'
import PriceSection from '@/organisms/PriceSection'
import ContentsLayout from '@/organisms/ContentsLayout'
import { BgColorEnum, GutterEnum } from '@/common/style/type'
import BaseLayout from '@/organisms/BaseLayout'
import MarginBottom from '@/atoms/MarginBottom'
import Profile from '@/organisms/Profile'
import ContactSection from '@/organisms/ContactSection'
import CommonLayout from '@/organisms/CommonLayout'
import { customMedia } from '@/common/style/Mixin'

type HomePageProps = {
  children?: React.ReactNode
}

const Wrap = styled.div`
  background-color: #000;
  position: relative;
  height: 100vh;
`

const Letters = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  img {
    width: 263px;
    margin: auto;

    ${customMedia.greaterThan('tablet')`
      width: auto;
    `}
  }
`
const LargeLogo = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);

  img {
    width: 169px;
    margin: auto;

    ${customMedia.greaterThan('tablet')`
      width: auto;
    `}
  }
`

const KeyVisual: React.FC = (): JSX.Element => {
  return (
    <Wrap>
      <div>
        <LargeLogo>
          <Image src="/logo_grey_large.svg" alt="logo" />
        </LargeLogo>
        <Letters>
          <Image src="/focus_on_core_users.svg" alt="Focus on core users" />
        </Letters>
      </div>
    </Wrap>
  )
}

const HomePage: React.FC<HomePageProps> = (
  props: HomePageProps
): JSX.Element => {
  return (
    <CommonLayout
      {...{
        headArea: {
          title: "Nie's Digital",
          description:
            'WEBやアプリのサービス企画から開発までおこないフリーランスとして活動している仁井内勇樹',
          keyword:
            'Nies Digital,Yuki Niiuchi,仁井内勇樹,WEB,マーケティング,戦略',
          image: '',
          url: 'https://niesdigital.com'
        },
        ...props
      }}>
      <KeyVisual />
      <MindSection />
      <ValueSection />
      <ContentsLayout bgColor={BgColorEnum.GREY}>
        <BaseLayout>
          <MarginBottom
            spSize={GutterEnum.exLarge}
            pcSize={GutterEnum.superLarge}>
            <ServiceSection />
          </MarginBottom>
          <PriceSection />
        </BaseLayout>
      </ContentsLayout>
      <Profile />
      <ContactSection />
    </CommonLayout>
  )
}

export default HomePage
