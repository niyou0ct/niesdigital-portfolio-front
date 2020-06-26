import React from 'react'
import Link from 'next/link'
import Image from '../atoms/Image'

export type LogoWithTagProps = {
  reverse?: boolean
  hasLink?: boolean
}

const LogoWithTag: React.FC<LogoWithTagProps> = (
  props: LogoWithTagProps
): JSX.Element => {
  const { reverse, hasLink } = props
  const srcName: string = reverse ? '/logo_white.svg' : '/logo_black.svg'

  if (hasLink) {
    return (
      <Link href="/">
        <a>
          <Image src={srcName} alt="Nii's Digital" />
        </a>
      </Link>
    )
  }

  return (
    <div>
      <Image src={srcName} alt="Nii's Digital" />
    </div>
  )
}

LogoWithTag.defaultProps = {
  reverse: false,
  hasLink: false
}

export default LogoWithTag
