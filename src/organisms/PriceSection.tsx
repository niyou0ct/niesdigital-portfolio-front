import React from 'react'
import styled from 'styled-components'
import { GutterEnum } from '@/common/style/type'
import PriceCard, { PriceCardProps } from '@/molecules/PriceCard'
import MarginBottom from '@/atoms/MarginBottom'
import { customMedia } from '@/common/style/Mixin'
import HeadingLayout, { HeadingLayoutProps } from '../molecules/HeadingLayout'

const Wrap = styled.section``

const headingLayoutOptions: HeadingLayoutProps = {
  marginBottom: {
    sp: GutterEnum.small,
    pc: GutterEnum.small
  }
}

const Lead = styled.p`
  font-size: 1.4rem;

  ${customMedia.greaterThan('tablet')`
    font-size: 1.6rem;
  `}
`

const priceCardOptions: PriceCardProps[] = [
  {
    title: 'ディレクション費',
    text:
      '戦略企画立案、ワイヤーフレームの作成をおこないます。 打ち合わせやオフィス訪問の費用も含みます。',
    price: '製作費の30%'
  },
  {
    title: 'トップページデザイン',
    text:
      'サイト全体で使用するヘッダーやフッター要素も含んだトップページデザインをいたします。',
    price: '¥45,000〜'
  },
  {
    title: '下層ページデザイン1',
    text: '写真や図を使用した標準的なデザインのページになります。',
    price: '¥15,000〜'
  },
  {
    title: '下層ページデザイン2',
    text:
      'テキストが中心のページやコンテンツ量が少ないページデザインになります。',
    price: '¥10,000〜'
  },
  {
    title: 'トップページコーディング',
    text:
      'サイト全体で使用するヘッダーやフッター要素も含んだベースコーディングになります。',
    price: '¥45,000〜'
  },
  {
    title: '下層ページコーディング1',
    text: '写真や図を使用した標準的なページのコーディングになります。',
    price: '¥15,000〜'
  },
  {
    title: '下層ページコーディング2',
    text:
      'テキストが中心のページやコンテンツ量が少ないページコーディングになります。',
    price: '¥10,000〜'
  },
  {
    title: 'JavaScript実装',
    text:
      'スライドショーやパララックスなどUIアニメーションの実装やJavaScriptが必要になってくる機能実装になります。',
    price: '¥15,000〜'
  },
  {
    title: 'Wordpress設置',
    text: 'Wordpressサイトの作成にあたり必要になってくる導入費用です。',
    price: '¥50,000〜'
  },
  {
    title: 'カスタム投稿機能',
    text:
      'ニュース投稿、事例投稿など、カスタム投稿が必要になってくる動的コンテンツの実装になります。',
    price: '¥35,000〜'
  }
]

const PriceSection: React.FC = (): JSX.Element => {
  const priceCardElements: JSX.Element[] = priceCardOptions.map(
    (item: PriceCardProps): JSX.Element => (
      <PriceCard key={item.title} {...item} />
    )
  )
  return (
    <Wrap>
      <HeadingLayout {...headingLayoutOptions}>Price</HeadingLayout>
      <MarginBottom spSize={GutterEnum.exMedium} pcSize={GutterEnum.exMedium}>
        <Lead>
          WEBサイト制作における概算価格です。一般的なWEBサイト制作ですとこちらの料金表をベースに対応します。実際にヒアリングした際に正式な見積もりを出させていただきますので、必ずしも表示価格のお見積もりになるわけではございません。またWEBサービスやアプリ制作は都度お見積もりになってきます。大体の価格が知りたいという方も気軽にお問い合わせください。
        </Lead>
      </MarginBottom>
      <div>{priceCardElements}</div>
    </Wrap>
  )
}

export default PriceSection
