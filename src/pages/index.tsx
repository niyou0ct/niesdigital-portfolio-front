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
      </Head>

      <Header />
    </div>
  )
}

export default IndexPage
