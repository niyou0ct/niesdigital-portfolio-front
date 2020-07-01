import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from '../atoms/Image'
import { device } from '../common/style/Styles'

export type LogoWithTagProps = {
  reverse?: boolean
  hasLink?: boolean
}

const ImageWrap = styled.div`
  width: 100%;
  min-width: 124px;
  @media ${device.tablet} {
    min-width: 200px;
  }
`

const LogoWithTag: React.FC<LogoWithTagProps> = (
  props: LogoWithTagProps
): JSX.Element => {
  const { reverse, hasLink } = props
  const srcName: string = reverse ? '/logo_white.svg' : '/logo_black.svg'

  if (hasLink) {
    return (
      <ImageWrap>
        <Link href="/">
          <a>
            <Image src={srcName} alt="Nie's Digital" />
          </a>
        </Link>
      </ImageWrap>
    )
  }

  return (
    <ImageWrap>
      <Image src={srcName} alt="Nie's Digital" />
    </ImageWrap>
  )
}

LogoWithTag.defaultProps = {
  reverse: false,
  hasLink: false
}

export default LogoWithTag
