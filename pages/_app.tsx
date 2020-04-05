import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.scss'

const MyApp = (context: AppPropsType) => {
  const { Component, pageProps } = context
  return <Component {...pageProps} />
}

export default MyApp
