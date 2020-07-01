import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import Header from '../organisms/Header'
import Image from '../atoms/Image'
import Styles, { device } from '../common/style/Styles'
import BaseLayout from '../organisms/BaseLayout'
import MarginBottom from '../atoms/MarginBottom'
import { MarginEnum } from '../common/style/type'
import ContentsLayout from '../organisms/ContentsLayout'

const KeyVisual: React.FC = (): JSX.Element => {
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

const MindSection: React.FC = (): JSX.Element => {
  const Wrap = styled.div`
    position: relative;
    padding-bottom: 203px;

    @media ${device.tablet} {
      padding-bottom: 0px;
    }
  `
  const Heading = styled.h2`
    font-size: 20px;

    @media ${device.tablet} {
      font-size: ${Styles.font.large};
    }
  `

  const Text = styled.p`
    font-size: ${Styles.font.small};

    @media ${device.tablet} {
      position: relative;
      z-index: 10;
      font-size: ${Styles.font.medium};
    }

    & + & {
      margin-top: ${MarginEnum.small};
    }

    &:nth-child(3) {
      br {
        &:nth-child(1) {
          display: none;
          @media ${device.tablet} {
            display: block;
          }
        }
        &:nth-child(2) {
          display: none;
          @media ${device.tablet} {
            display: block;
          }
        }
        &:nth-child(4) {
          display: none;
          @media ${device.tablet} {
            display: block;
          }
        }
        &:nth-child(6) {
          display: none;
          @media ${device.tablet} {
            display: block;
          }
        }
      }
    }
  `

  const TextSvgFirst = styled.div`
    position: absolute;
    right: 0;
    bottom: 92px;

    @media ${device.tablet} {
      bottom: 97px;
    }

    img {
      &:nth-child(1) {
        display: block;
        @media ${device.tablet} {
          display: none;
        }
      }
      &:nth-child(2) {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
  `
  const TextSvgSecond = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    img {
      &:nth-child(1) {
        display: block;
        @media ${device.tablet} {
          display: none;
        }
      }
      &:nth-child(2) {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
  `

  return (
    <ContentsLayout>
      <BaseLayout>
        <Wrap>
          <MarginBottom spSize={MarginEnum.small} pcSize={MarginEnum.exMedium}>
            <Heading>MIND</Heading>
          </MarginBottom>
          <div>
            <Text>
              「いまのサイトはなんだか使いづらい」
              <br />
              「モダンなサイトにリニューアルしたい」
              <br />
              「とりあえず同じように運用レポート作るか」
            </Text>
            <Text>なんとなくでこういったことしていませんか？</Text>
            <Text>
              ユーザーに購買してもらう、ファンになってもらう、
              <br />
              そんなストーリーを歩んでもらうための一つの手段がWEBです。
              <br />
              あなたが担うサイトにやってくるユーザーは、ストーリーの一部を体験しにきているのです。
              <br />
              訪れてきてくれたユーザーに満足してもらい次のストーリーを歩んでもらう、
              <br />
              そしてファンになってもらう、それを実現するのがWEBです。
              <br />
              「なんとなく」ではなく「意味がある」そんなサイトを実現できるよう
              <br />
              戦略的なWEBサイト制作・運用を一緒にしていきましょう。
            </Text>
          </div>
          <TextSvgFirst>
            <Image src="sp_nothing_important.svg" alt="NOTHING IMPORTANT" />
            <Image src="nothing_important.svg" alt="NOTHING IMPORTANT" />
          </TextSvgFirst>
          <TextSvgSecond>
            <Image src="sp_more_than_users.svg" alt="MORE THAN USERS" />
            <Image src="more_than_users.svg" alt="MORE THAN USERS" />
          </TextSvgSecond>
        </Wrap>
      </BaseLayout>
    </ContentsLayout>
  )
}

const IndexPage: NextPage = () => {
  const windowWidth: number = useWindowWidth()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="<meta name="google-site-verification" content="2LREya_jJnGvqyKRSVorfdRLNJAog4P9cet6wLh0CBE" />" /> */}
      </Head>

      <Header />
      <ContentsLayout>
        <KeyVisual />
      </ContentsLayout>

      <main>
        <MindSection />
      </main>
    </div>
  )
}

export default IndexPage
