import React from 'react'
import styled from 'styled-components'
import Image from '@/atoms/Image'
import { GutterEnum } from '@/common/style/type'
import { customMedia } from '@/common/style/Mixin'
import BaseLayout from './BaseLayout'

const Wrap = styled.div`
  padding: 40px 0;
  background-color: #fff;

  ${customMedia.greaterThan('tablet')`
    padding: 56px 0;
  `}
`

const Contents = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80px 1fr;

  ${customMedia.greaterThan('tablet')`
    grid-template-rows: 1fr auto;
    grid-template-columns: 200px 1fr;
  `}
`

const IconWrap = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;

  ${customMedia.greaterThan('tablet')`
    width: 200px;
    height: 200px;
    grid-row: 1/3;
  `}

  img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`

const Title = styled.span`
  align-self: center;
  font-weight: bold;
  font-size: 1.6rem;
  margin-left: 10px;

  ${customMedia.greaterThan('tablet')`
    align-self: flex-start;
    font-size: 20px;
    margin-left: ${GutterEnum.small}px;
  `}
`

const Text = styled.p`
  grid-column: 1/3;
  font-size: 1.2rem;
  margin-top: ${GutterEnum.exSmall}px;

  ${customMedia.greaterThan('tablet')`
    grid-column: 2;
    margin-top: 0;
    font-size: 1.4rem;
    margin-left: ${GutterEnum.small}px;
  `}
`

const Profile: React.FC = (): JSX.Element => {
  return (
    <Wrap>
      <BaseLayout>
        <Contents>
          <IconWrap>
            <Image src="/self_picture.jpg" alt="Yuki Niiuchi" />
          </IconWrap>
          <Title>仁井内 勇樹（ニイウチ ユウキ）</Title>
          <Text>
            BtoBマーケティング支援会社で新規WEBサービスの立ち上げ・既存WEBメディアのグロースハックをおこなう。同時にフロントエンドエンジニアや新卒・中途採用担当も兼務でおこなう。2年後にWEB制作会社にフロントエンドエンジニアとして転職し、人材や金融などの大手クライアント案件をおこなう。同時に副業でグローバルサービスの立ち上げに参画し、マーケティングの業務経験を活かしUX企画とフロントエンドコーディングを担当。1年半後フリーランスとして独立。スタートアップや個人・中小企業をメインとしたWEB・アプリ制作をおこなっている。
          </Text>
        </Contents>
      </BaseLayout>
    </Wrap>
  )
}

export default Profile
