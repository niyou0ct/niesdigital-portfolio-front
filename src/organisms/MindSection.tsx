import React from 'react'
import styled from 'styled-components'
import { customMedia } from '@/common/style/Mixin'
import { GutterEnum } from '../common/style/type'
import ContentsLayout from './ContentsLayout'
import BaseLayout from './BaseLayout'
import HeadingLayout from '../molecules/HeadingLayout'
import Image from '../atoms/Image'

const Wrap = styled.section`
  position: relative;
  padding-bottom: 203px;

  ${customMedia.greaterThan('tablet')`
    padding-bottom: 0px;
  `}
`

const Text = styled.p`
  font-size: 1.4rem;

  ${customMedia.greaterThan('tablet')`
    position: relative;
    z-index: 10;
    font-size: 1.4rem;
  `}

  & + & {
    margin-top: ${GutterEnum.small}px;
  }

  &:nth-child(3) {
    br {
      &:nth-child(1) {
        display: none;
        ${customMedia.greaterThan('tablet')`
          display: block;
        `}
      }
      &:nth-child(2) {
        display: none;
        ${customMedia.greaterThan('tablet')`
          display: block;
        `}
      }
      &:nth-child(4) {
        display: none;
        ${customMedia.greaterThan('tablet')`
          display: block;
        `}
      }
      &:nth-child(6) {
        display: none;
        ${customMedia.greaterThan('tablet')`
          display: block;
        `}
      }
    }
  }
`

const TextSvgFirst = styled.div`
  position: absolute;
  right: 0;
  bottom: 92px;

  ${customMedia.greaterThan('tablet')`
    bottom: 97px;
  `}

  img {
    &:nth-child(1) {
      display: block;

      ${customMedia.greaterThan('tablet')`
        display: none;
      `}
    }
    &:nth-child(2) {
      display: none;

      ${customMedia.greaterThan('tablet')`
        display: block;
      `}
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

      ${customMedia.greaterThan('tablet')`
        display: none;
      `}
    }
    &:nth-child(2) {
      display: none;

      ${customMedia.greaterThan('tablet')`
        display: block;
      `}
    }
  }
`

const MindSection: React.FC = (): JSX.Element => {
  return (
    <ContentsLayout>
      <BaseLayout>
        <Wrap>
          <HeadingLayout>MIND</HeadingLayout>
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

export default MindSection
