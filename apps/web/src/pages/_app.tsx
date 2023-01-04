import '@/styles/globals.css'
import type { AppProps, AppType } from 'next/app'

const TaskeerWebapp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default TaskeerWebapp
