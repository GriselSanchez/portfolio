import React, { useState, useEffect } from 'react'
import { useAnimationControls, motion, useInView } from 'framer-motion'

import styles from './AnimatedText.module.scss'

const item = {
  rubber: {
    transform: [
      'scale3d(1, 1, 1)',
      'scale3d(1.4, .55, 1)',
      'scale3d(.75, 1.25, 1)',
      'scale3d(1.25, .85, 1)',
      'scale3d(.9, 1.05, 1)',
      'scale3d(1, 1, 1)',
    ],
    transition: { duration: 0.5 },
  },
}

export default function AnimatedText({ id, text, className, variant }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: false })
  const sentence = text.split('')

  return (
    <div ref={ref} className={styles.textContainer} id={id}>
      {sentence.map((letter, index) => (
        <AnimatedLetter
          key={index}
          className={className}
          variant={variant}
          animateWhen={inView}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </AnimatedLetter>
      ))}
    </div>
  )
}

function AnimatedLetter({ children, className, variant, animateWhen }) {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const MotionComponent = motion[variant]

  const rubberBandAnimation = () => {
    controls.start('rubber')
    setIsPlaying(true)
  }

  const runMountAnimation = () => {
    controls.start({ transform: item.rubber.transform, transition: { duration: 0.8 } })
  }

  useEffect(() => {
    if (animateWhen) {
      runMountAnimation()
    }
  }, [animateWhen])

  return (
    <MotionComponent
      variants={item}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBandAnimation()
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
