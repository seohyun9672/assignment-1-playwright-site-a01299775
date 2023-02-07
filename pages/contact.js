import styles from '../styles/Contact.module.css'
import Button from '../comps/Button/Button'
import Header from '../comps/Header/Header'
import PageNavigator from '../comps/PageNavigator/PageNavigator'
import { pageArr, pageData } from '../data/pagedata'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidFirstName(firstName) {
    return /[A-Z][a-z]/.test(firstName);
  }
  function isValidLastName(lastName) {
    return /[A-Z][a-z]/.test(lastName);
  }

  const handleFirstName = (event) => {
    if (!isValidFirstName(event.target.value)) {
      setError('First name error. First letter must be capital. Must use alphabets only.');
    } else {
      setError(null);
    }
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    if (!isValidLastName(event.target.value)) {
      setError('Last name error. First letter must be capital. Must use alphabets only.');
    } else {
      setError(null);
    }
    setLastName(event.target.value);
  }

  const handleEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  return <>
    <Head>
      <title>Contact Us</title>
      <meta name="author" content="MDIA 2109" />
      <meta property="og:title" content="Assignment #1 - Contact Us Page" />
      <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className={styles.main}>
      <Header text="Contact Us" />
      <div className={styles.content}>
        <div>
          <p>
            Want to discuss? Let's chat!
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <table className={styles.table}>
              <thead className={styles.row}>
                <tr className={styles.inputcont}>
                  <th>First Name:</th>
                  <th className={styles.th}>
                    <input
                      value={firstName}
                      onChange={handleFirstName}
                      id="firstName"
                      type="text"
                      placeholder='Enter your first name' />
                  </th>
                </tr>
                <tr className={styles.inputcont}>
                  <th>Last Name:</th>
                  <th className={styles.th}>
                    <input
                      value={lastName}
                      onChange={handleLastName}
                      id="lastName"
                      type="text"
                      placeholder='Enter your last name' />
                  </th>
                </tr>
              </thead>
              <thead >
                <tr className={styles.inputcont}>
                  <th>Email:</th>
                  <th className={styles.th}>
                    <input
                      value={email}
                      onChange={handleEmail}
                      id="email"
                      type="text"
                      placeholder='Enter your email' /></th>
                </tr>
              </thead>
            </table>
          </fieldset>
          <div>
            <div className={styles.message}>
              <div>{error}</div>
            </div>
          </div>
          {!error && email && firstName && lastName && <div className={styles.btncont}>
            <Button text='Submit' handleClick={() => { router.push("/") }} />
          </div>}
        </form>
        <PageNavigator pageNum={2} onPrevious={() => router.push("/about")} />
      </div>
    </div>
  </>
}