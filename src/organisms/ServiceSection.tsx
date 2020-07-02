import React from 'react'
import styled from 'styled-components'
import { GutterEnum } from '@/common/style/type'
import GridItem, { GridItemProps } from '@/molecules/GridItem'
import ServiceItem, { ServiceItemProps } from '@/molecules/ServiceItem'
import HeadingLayout from '../molecules/HeadingLayout'
import GridLayout, { GridLayoutProps } from './GridLayout'

const Wrap = styled.section``

const gridLayoutOptions: GridLayoutProps = {
  marginLeft: {
    sp: 0,
    pc: GutterEnum.exSmall
  },
  marginBottom: {
    sp: GutterEnum.exSmall,
    pc: 0
  }
}

const gridItemOptions: GridItemProps = {
  width: {
    sp: '100%',
    pc: '50%'
  },
  paddingLeft: {
    sp: 0,
    pc: GutterEnum.exSmall
  },
  paddingBottom: {
    sp: GutterEnum.exSmall,
    pc: 0
  }
}

const serviceItemOptions: ServiceItemProps[] = [
  {
    title: 'WEB・アプリ受託制作',
    lead: '企画〜実装・保守運用など制作全般',
    text: `・企画設計
          <br/>・デザイン
          <br/>・フロントエンド、バックエンド実装
          <br/>・サーバーアップ、保守運用など`
  },
  {
    title: 'マーケティング支援',
    lead: 'WEB・アプリの改善提案・運用',
    text: `・課題抽出や改善試作提案
        <br/>・定期的な分析内容のレポーティング
        <br/>・改善運用に伴うノウハウの共有`
  }
]

const ServiceSection: React.FC = (): JSX.Element => {
  const serviceItemElements: JSX.Element[] = serviceItemOptions.map(
    (item: ServiceItemProps): JSX.Element => (
      <GridItem key={item.title} {...gridItemOptions}>
        <ServiceItem {...item} />
      </GridItem>
    )
  )
  return (
    <Wrap>
      <HeadingLayout>Services</HeadingLayout>
      <GridLayout {...gridLayoutOptions}>{serviceItemElements}</GridLayout>
    </Wrap>
  )
}

export default ServiceSection
