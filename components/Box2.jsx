import { motion } from 'framer-motion'

/**
 * If you just use drag without setting an explicit value, you'll get a free range dragging.
 * You can constrict it like so: drag='x' or drag='y'
 */
export default function Box2() {
  return (
    <div className='box-container'>
      <motion.div
        className='box'
        drag
        dragConstraints={{
          top: 5,
          bottom: 5,
          left: 5,
          right: 5
        }}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        Box2
      </motion.div>
    </div>
  )
}
