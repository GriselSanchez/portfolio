import styles from './Header.module.scss'
import GithubIcon from 'assets/github.svg'
import LinkedinIcon from 'assets/linkedin.svg'
import EnvelopeIcon from 'assets/envelope.svg'
import Speakers from 'assets/speakers.svg'
import { usePixelArt } from 'hooks/usePixelArt'

export default function Header() {
  const table = usePixelArt(64, 64)

  return (
    <div className={styles.main}>
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
      <div className={styles.consoleContainer}>
        <div className={styles.console}>
          <div className={styles.topContainer}>
            <table className={styles.pixelArtTable}>
              <tbody>{table}</tbody>
            </table>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.fakeButtons}>
              <div>
                <div className={styles.fakeRoundedButton} />
                <div className={styles.fakeLongButton} />
              </div>
              <div>
                <div className={styles.fakeLongButton} />
                <div className={styles.fakeLongButton} />
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div>
                <button className={styles.saveButton}>Save</button>
              </div>
              <div className={styles.consoleButtonsContainer}>
                <button
                  className={styles.consoleActionButton}
                  style={{ gridColumn: 2, gridRow: 1 }}
                >
                  X
                </button>
                <button
                  className={styles.consoleActionButton}
                  style={{ gridColumn: 3, gridRow: 2 }}
                >
                  Y
                </button>
                <button
                  className={styles.consoleActionButton}
                  style={{ gridColumn: 2, gridRow: 3 }}
                >
                  W
                </button>
                <button
                  className={styles.consoleActionButton}
                  style={{ gridColumn: 1, gridRow: 2 }}
                >
                  Z
                </button>
              </div>
            </div>
            <Speakers className={styles.speakers} />
          </div>
        </div>
      </div>
    </div>
  )
}
