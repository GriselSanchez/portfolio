import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from 'components/Header/components/AnimatedText/AnimatedText'

import styles from './Skills.module.scss'

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML / CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'SCSS', 'Framer Motion', 'Figma'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Jira', 'VS Code'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const xLeft = useTransform(scrollYProgress, [0, 1], [-800, 0])
  const xRight = useTransform(scrollYProgress, [0, 1], [800, 0])

  return (
    <div ref={ref} className={styles.main}>
      <motion.div className={styles.leftContainer} style={{ x: xLeft }}>
        <div className={styles.titleContainer}>
          <AnimatedText text="My Skills." variant="h1" className={styles.title} />
          <p className={styles.description}>
            A collection of technologies and tools I&apos;ve worked with throughout my career.
          </p>
        </div>
      </motion.div>
      <motion.div className={styles.rightContainer} style={{ x: xRight }}>
        <div className={styles.cardsGrid}>
          {skills.map((skill, index) => (
            <div key={skill.category} className={styles.card}>
              <AnimatedText text={skill.category} variant="h2" className={styles.cardTitle} />
              <ul className={styles.cardList}>
                {skill.items.map(item => (
                  <li key={item} className={styles.cardItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
