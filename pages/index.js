import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from '../comps/Button/Button'
import Head from 'next/head'
import { useRouter } from "next/router";
import PageNavigator from '../comps/PageNavigator/PageNavigator';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>An investment in knowledge pays the best interest.</h1>
          <hr className={styles.line} />
          <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
        </div>
        <div className={styles.btncont}>
          <Button text='More About Us' href='http://localhost:3000/about' handleClick={() => { router.push("/about") }} />
          <Button text='Contact Us' href='http://localhost:3000/contact' handleClick={() => { router.push("/contact") }} />
        </div>
        <PageNavigator pageNum={0} onNext={() => router.push("/about")} />
      </main>
    </>
  )
}
