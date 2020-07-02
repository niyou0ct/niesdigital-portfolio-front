import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import styled from 'styled-components'
import ValueSection from '@/organisms/ValueSection'
import Header from '@/organisms/Header'
import Image from '@/atoms/Image'
import { device } from '@/common/style/Styles'
import MindSection from '@/organisms/MindSection'
import ServiceSection from '@/organisms/ServiceSection'
import PriceSection from '@/organisms/PriceSection'
import ContentsLayout from '@/organisms/ContentsLayout'
import { BgColorEnum, GutterEnum } from '@/common/style/type'
import BaseLayout from '@/organisms/BaseLayout'
import MarginBottom from '@/atoms/MarginBottom'
import Profile from '@/organisms/Profile'
import ContactSection from '@/organisms/ContactSection'
import Footer from '@/organisms/Footer'

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

    @media ${device.tablet} {
      width: auto;
    }
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

    @media ${device.tablet} {
      width: auto;
    }
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

const IndexPage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="<meta name="google-site-verification" content="2LREya_jJnGvqyKRSVorfdRLNJAog4P9cet6wLh0CBE" />" /> */}
      </Head>

      <Header />
      <KeyVisual />

      <main>
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
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
