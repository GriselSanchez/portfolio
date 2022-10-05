import styles from './Header.module.scss'
import InfoContainer from './components/InfoContainer/InfoContainer'
import ConsoleContainer from './components/ConsoleContainer/ConsoleContainer'

export default function Header() {
  return (
    <div className={styles.main}>
      <InfoContainer />
      <ConsoleContainer />
    </div>
  )
}
