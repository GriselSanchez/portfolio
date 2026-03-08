import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

import styles from './Header.module.scss'
import InfoContainer from './components/InfoContainer/InfoContainer'
import ConsoleContainer from './components/ConsoleContainer/ConsoleContainer'

export default function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -800])
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 800])

  return (
    <div ref={ref} className={styles.main}>
      <InfoContainer x={xLeft} />
      <ConsoleContainer x={xRight} />
    </div>
  )
}
