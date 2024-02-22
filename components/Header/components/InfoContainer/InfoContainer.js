import { GithubIcon, LinkedinIcon, EnvelopeIcon } from 'assets'
import AnimatedText from '../AnimatedText/AnimatedText'

import styles from './InfoContainer.module.scss'

export default function InfoContainer() {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.titleContainer}>
        <AnimatedText text="Hi, I'm Grisel." variant="h1" className={styles.title} />
        <AnimatedText text="A Software Engineer." variant="h2" className={styles.subtitle} />
        <div className={styles.description}>
          <span>I have 5 years of experience developing</span>{' '}
          <AnimatedText text="performant" variant="p" id={styles.purple} />
          <span>,</span>
          <AnimatedText text="scalable" variant="p" id={styles.orange} />
          <span>, and </span>
          <AnimatedText text="maintainable" variant="p" id={styles.pink} />{' '}
          <span>digital experiences.</span>
          <p>
            I'm passionate about user experience, design, creative problem-solving, and mastering
            the latest technologies.
          </p>
        </div>
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
        <a
          aria-label="github"
          className={styles.secondaryButton}
          href="https://github.com/griselsanchez"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </div>
      <a className={styles.primaryButton} href="Grisel-Sanchez-Resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  )
}
