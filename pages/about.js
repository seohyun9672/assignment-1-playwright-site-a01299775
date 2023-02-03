import Header from "../comps/Header/Header"
import styles from '../styles/About.module.css'

export default function About() {
  return <div className={styles.main}>
    <div className={styles.content}>
      <Header text="About Us" />
      <div>
        <p>
          We are proud to deliver an education that goes beyond textbooks and classrooms.
        </p>
        <p>
          Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
        </p>
        <p>
          Through close collaboration with industry, our network of alumni and partners continue to achieve global success.
        </p>
      </div>
      <div>
        <h2>Information Sessions</h2>
        <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
      </div>
      <div>
        <h3>Big Info</h3>
        <p>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.</p>
      </div>
      <div>
        <h2>Campus Tours</h2>
        <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
      </div>
      <div>
        <Header text="DEPARTMENTS" />
        <ul className={styles.list}>
          <li className={styles.item}>Applied & Natural Sciences</li>
          <li className={styles.item}>Business & Media</li>
          <li className={styles.item}>Computing & IT</li>
          <li className={styles.item}>Engineering</li>
          <li className={styles.item}>Health Sciences</li>
          <li className={styles.item}>Trades & Apprenticeships</li>
        </ul>
      </div>
    </div>
  </div>
}