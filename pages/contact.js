import styles from '../styles/Contact.module.css'
import Button from '../comps/Button/Button'
import Header from '../comps/Header/Header'

export default function Contact() {
  return <div className={styles.main}>
    <div className={styles.content}>
      <Header text="Contact Us" />
      <div>Want to discuss? Let's chat!</div>
      <form className={styles.form}>
        <div className={styles.top}>
          <div className={styles.inputcont}>
            <label className={styles.label}>First Name:</label>
            <input placeholder="First Name Here" />
          </div>
          <div className={styles.inputcont}>
            <label className={styles.label}>Last Name:</label>
            <input placeholder="Last Name Here" />
          </div>
        </div>
        <div className={styles.inputcont}>
          <label className={styles.label}>Email:</label>
          <input placeholder="Email Here" />
        </div>
      </form>
      <div className={styles.btncont}>
        <Button text='Submit' />
      </div>
    </div>
  </div>
}