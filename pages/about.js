import Header from "../comps/Header/Header"
import styles from "../styles/About.module.css"
import { useRouter } from "next/router"
import PageNavigator from "../comps/PageNavigator/PageNavigator";
import { words } from "../data/pagedata";
import Carousel from "../comps/Carousel/Carousel";
import Head from 'next/head'

export default function About() {

  const router = useRouter();
  return (<>
    <Head>
      <title>About Us</title>
      <meta name="author" content="MDIA 2109" />
      <meta property="og:title" content="Assignment #1 - About Us Page" />
      <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className={styles.main}>
      <Header text="About Us" />
      <div className={styles.content}>
        <p>
          We are proud to deliver an education that goes beyond textbooks and classrooms.
        </p>
        <p>
          Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
        </p>
        <p>
          Through close collaboration with industry, our network of alumni and partners continue to achieve global success.
        </p>
        <h2>Information Sessions</h2>
        <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
        <h3>Big Info</h3>
        <p>Big Info is the largest program expo and information session at BCIT. It&aposs your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.</p>
        <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
        <h2>Campus Tours</h2>
        <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
      </div>
      <Carousel />
      <Header text="DEPARTMENTS" />
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.item}>Applied & Natural Sciences</li>
          <li className={styles.item}>Business & Media</li>
          <li className={styles.item}>Computing & IT</li>
          <li className={styles.item}>Engineering</li>
          <li className={styles.item}>Health Sciences</li>
          <li className={styles.item}>Trades & Apprenticeships</li>
        </ul>
      </div>
      <PageNavigator pageNum={1} onPrevious={() => router.push("/")} onNext={() => router.push("/contact")} />
    </div>
  </>
  )
}