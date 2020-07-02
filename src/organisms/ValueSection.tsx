import React from 'react'
import ValueItem, { ValueItemProps } from '@/molecules/ValueItem'
import HeadingLayout from '@/molecules/HeadingLayout'
import { BgColorEnum } from '@/common/style/type'
import ContentsLayout from '@/organisms/ContentsLayout'
import BaseLayout from '@/organisms/BaseLayout'

const ValueSection: React.FC = (): JSX.Element => {
  const valueItems: ValueItemProps[] = [
    {
      title: 'ユーザー最優先の企画設計',
      text:
        'サイトに訪れるユーザーが次のストーリーを歩むことがWEBに求められることです。どういった課題を持っているのか、どういったニーズがあるのか、ユーザーは何を求めているのか、徹底的なユーザー理解を最優先でおこないます。その上でサイトに必要なコンテンツ、導線設計、ワイヤーフレームなどの作成をしていきますので、一貫したユーザードリブンな企画設計を実現します。',
      image: {
        src: '/planning.svg',
        alt: 'planning'
      }
    },
    {
      title: '余計なものを省いたシンプルなデザイン',
      text:
        'あれもこれも詰め込んだガヤガヤしたデザインはウケません。ユーザーにとってわかりやすいものは無駄を省いたシンプルで使いやすいデザインです。その上で華やかさやパワフルな雰囲気といったトンマナやコンセプトに沿ったデザインを実現します。',
      image: {
        src: '/design.svg',
        alt: 'design'
      }
    },
    {
      title: 'ユーザービリティを意識した実装',
      text:
        '多機能だったり、アニメーションを多用したサイトはユーザーを混乱させる原因でもあります。実装フェーズになって複雑な機能が必要になってきても「この機能がないとなぜダメか」と問題の再定義をおこない、本質的課題を見出してユーザービリティの高い実装をします。その上でアニメーションをジャブぐらいの気持ちで取り入れ、ブレのないサイトを実現します。',
      image: {
        src: '/coding.svg',
        alt: 'coding'
      }
    }
  ]

  const valueItemElements: JSX.Element[] = valueItems.map(
    (item: ValueItemProps): JSX.Element => (
      <ValueItem key={item.title} {...item} />
    )
  )
  return (
    <ContentsLayout bgColor={BgColorEnum.BLACK}>
      <BaseLayout>
        <section>
          <HeadingLayout color="#6f6f6f">VALUES</HeadingLayout>
          <div>{valueItemElements}</div>
        </section>
      </BaseLayout>
    </ContentsLayout>
  )
}

export default ValueSection
