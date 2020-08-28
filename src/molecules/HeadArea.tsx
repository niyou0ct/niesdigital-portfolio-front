import React from 'react'
import Head from 'next/head'

export type HeadAreaProps = {
  title: string
  description: string
  keyword: string
  image: string
  url: string
  links?: JSX.Element[]
}

const HeadArea: React.FC<HeadAreaProps> = (
  props: HeadAreaProps
): JSX.Element => {
  const { title, description, keyword, image, url, links } = props
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="google-site-verification"
        content="2LREya_jJnGvqyKRSVorfdRLNJAog4P9cet6wLh0CBE"
      />
      <link rel="canonical" href={url} />
      {/* <link
        rel="shortcut icon"
        href="https://cdn.qiita.com/assets/favicons/public/production-4ff10c1e1e2b5fcb353ff9cafdd56c70.ico"
      />
      <link
        rel="apple-touch-icon"
        href="https://cdn.qiita.com/assets/favicons/public/apple-touch-icon-f9a6afad761ec2306e10db2736187c8b.png"
      /> */}
      {links}
    </Head>
  )
}

export default HeadArea
