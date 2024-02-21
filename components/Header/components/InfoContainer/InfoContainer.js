import { LinkedinIcon, EnvelopeIcon } from 'assets'

import styles from './InfoContainer.module.scss'

export default function InfoContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hi, I'm Grisel.</h1>
        <h2 className={styles.subtitle}>A Software Engineer.</h2>
        <p>
          I have 5 years of experience developing <span id={styles.purple}>performant</span>,{' '}
          <span id={styles.orange}>responsive</span>, and <span id={styles.pink}>maintainable</span>{' '}
          digital experiences.
        </p>
        <p>
          I'm passionate about user experience, design, creative problem-solving, and mastering the latest technologies.
        </p>
      </div>
      <div className={styles.socialButtonsContainer}>
        <a
          aria-label="linkedin"
          className={styles.secondaryButton}
          href="https://linkedin.com/in/griselsanchez"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a
          aria-label="email"
          className={styles.secondaryButton}
          href="mailto: griselalmasanchez@gmail.com"
        >
          <EnvelopeIcon />
        </a>
      </div>
      <a className={styles.primaryButton} href="Grisel-Sanchez-Resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  )
}
