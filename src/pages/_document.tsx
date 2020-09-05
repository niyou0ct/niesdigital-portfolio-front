/* eslint-disable react/react-in-jsx-scope */
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import basicAuthMiddleware from 'nextjs-basic-auth-middleware'

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: import('next/document').DocumentContext) {
    if (ctx.req && ctx.res) {
      await basicAuthMiddleware(ctx.req, ctx.res, {
        realm: 'protected',
        users: [],
        includePaths: ['/'],
        excludePaths: []
      })
    }

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
