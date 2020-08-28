import React from 'react'
import { AppProps } from 'next/app'
import '@/css/style.scss'

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps, router } = props
  return <Component {...pageProps} {...router} />
}

export default App
