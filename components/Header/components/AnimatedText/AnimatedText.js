import React, { useState, useEffect } from 'react'
import { useAnimationControls, motion } from 'framer-motion'

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
    transition: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
  },
}

export default function AnimatedText({ id, text, className, variant }) {
  const sentence = text.split('')

  return (
    <div className={styles.textContainer} id={id}>
      {sentence.map((letter, index) => (
        <AnimatedLetter key={index} className={className} variant={variant}>
          {letter === ' ' ? '\u00A0' : letter}
        </AnimatedLetter>
      ))}
    </div>
  )
}

function AnimatedLetter({ children, className, variant }) {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const MotionComponent = motion[variant]

  const rubberBandAnimation = () => {
    controls.start({
      ...item.rubber,
    })
    setIsPlaying(true)
  }

  useEffect(() => {
    rubberBandAnimation()
  }, [])

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
