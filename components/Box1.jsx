import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * When we prepend 'motion', what we are basically doing is injecting it with a bunch of different
 * props that we can define. We can define an animate prop which takes in an object.
 *
 * You could also use style instead of initial prop.
 *
 * When you add transition={{ duration: 2 }}, you loose the spring effect. This is because when we
 * define the duration, we also automatically set the type of animation as 'tween'. And tween is an
 * animation that is just kind of straight.
 *
 * The animation type before was 'spring', but it doesn't work with duration.
 * tween : duration
 * spring : stiffness
 *
 * By making it more stiff, you're actually decreasing the duration of the animation.
 */
export default function Box1() {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        initial={{
          opacity: 0.2
        }}
        animate={{
          x: isAnimating ? 900 : 0,
          opacity: isAnimating ? 1 : 0.2,
          rotate: isAnimating ? 360 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 60
        }}
        onClick={() => setIsAnimating((prevValue) => !prevValue)}
      >
        Box1
      </motion.div>
    </div>
  )
}
