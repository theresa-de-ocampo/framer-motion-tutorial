import { motion } from 'framer-motion'

/**
 * When you have a motion child, it's going to inherit the same properties except variant.
 * So you need to define another variant with the same key names.
 *
 * beforeChildren - We want to complete this animation before the children begin to animate.
 */
export default function Box3() {
  const boxVariants = {
    start: {
      x: '-100vw'
    },
    end: {
      x: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const listVariants = {
    start: {
      x: -10,
      opacity: 0
    },
    end: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        variants={boxVariants}
        initial='start'
        animate='end'
      >
        {[...Array(3)].map((_, i) => {
          return (
            <motion.li
              key={i}
              className='box-item'
              variants={listVariants}
            ></motion.li>
          )
        })}
      </motion.div>
    </div>
  )
}
