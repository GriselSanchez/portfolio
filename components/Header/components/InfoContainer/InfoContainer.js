import { GithubIcon, LinkedinIcon, EnvelopeIcon } from 'assets'

import styles from './InfoContainer.module.scss'

export default function InfoContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hi, I'm Grisel.</h1>
        <h2 className={styles.subtitle}>A Frontend Engineer.</h2>
        <p>
          I have four years of experience developing <span id={styles.purple}>performant</span>,{' '}
          <span id={styles.orange}>responsive</span>, and <span id={styles.pink}>maintainable</span>{' '}
          digital experiences.
        </p>
        <p>
          I'm passionate about user interaction, animation, design, problem-solving, and mastering
          the latest frontend technologies.
        </p>
      </div>
      <div className={styles.socialButtonsContainer}>
        <a
          aria-label="github"
          className={styles.secondaryButton}
          href="https://github.com/griselsanchez"
          target="_blank"
        >
          <GithubIcon />
        </a>
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
      <a className={styles.primaryButton} href="Grisel-Sanchez-CV.pdf" target="_blank">
        Resume
      </a>
    </div>
  )
}
