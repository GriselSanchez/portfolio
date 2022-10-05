import { GithubIcon, LinkedinIcon, EnvelopeIcon } from 'assets'

import styles from './InfoContainer.module.scss'

export default function InfoContainer() {
  return (
    <div className={styles.leftContainer}>
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
