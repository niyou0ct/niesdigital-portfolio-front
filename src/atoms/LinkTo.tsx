import React, { LinkHTMLAttributes } from 'react'
import Link from 'next/link'

export type LinkToProps = {
  href: string
  as: string
  text?: string
  outside?: boolean
  children?: React.ReactNode
} & LinkHTMLAttributes<HTMLElement>

const LinkTo: React.FC<LinkToProps> = (props: LinkToProps): JSX.Element => {
  const {
    text,
    outside,
    style,
    href,
    as,
    children,
    className,
    ...others
  } = props

  return (
    <Link href={!outside ? href : ''} as={!outside ? as : ''}>
      <a
        {...others}
        className={className}
        style={style}
        href={outside ? href : undefined}
        target={outside ? '_blank' : ''}>
        {text}
        {children}
      </a>
    </Link>
  )
}

export default LinkTo
