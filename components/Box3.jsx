import { motion } from 'framer-motion'

export default function Box3() {
  const boxVariants = {
    static: {
      x: 1000,
      scale: 1.5
    },
    propagate: {
      x: 100,
      scale: 0.3
    }
  }

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        variants={boxVariants}
        initial='static'
        animate='propagate'
      ></motion.div>
    </div>
  )
}
