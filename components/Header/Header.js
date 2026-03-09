import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform } from 'framer-motion'

import styles from './Header.module.scss'
import InfoContainer from './components/InfoContainer/InfoContainer'
import ConsoleContainer from './components/ConsoleContainer/ConsoleContainer'

const MOBILE_BREAKPOINT = 768

export default function Header() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -800])
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 800])

  return (
    <div ref={ref} className={styles.main}>
      <InfoContainer x={xLeft} />
      <ConsoleContainer x={isMobile ? undefined : xRight} />
    </div>
  )
}
