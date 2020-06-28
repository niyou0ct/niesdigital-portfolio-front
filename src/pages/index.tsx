import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Header from '../organisms/Header'

const IndexPage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="<meta name="google-site-verification" content="2LREya_jJnGvqyKRSVorfdRLNJAog4P9cet6wLh0CBE" />" /> */}
      </Head>

      <Header />
    </div>
  )
}

export default IndexPage
