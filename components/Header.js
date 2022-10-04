import styles from './Header.module.scss'
import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import EnvelopeIcon from '../assets/envelope.svg'

export default function Header({ title }) {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hi, I'm Grisel.</h1>
        <h2 className={styles.subtitle}>A Frontend Engineer.</h2>
      </div>
      <div className={styles.socialButtonsContainer}>
        <button className={styles.secondaryButton}>
          <GithubIcon />
        </button>
        <button className={styles.secondaryButton}>
          <LinkedinIcon />
        </button>
        <button className={styles.secondaryButton}>
          <EnvelopeIcon />
        </button>
      </div>
      <button className={styles.primaryButton}>Resume</button>
    </div>
  )
}
