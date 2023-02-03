import '../styles/globals.css'
import '../styles/variables.css'
import Layout from '../comps/Layout/Layout'

export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}