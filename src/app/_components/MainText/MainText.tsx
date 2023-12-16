'use client'

import { motion } from 'framer-motion'

const text = 'Hello, World!'
const textArray = text.split('')

const text2 = 'This is Zoey`s Portfolio!'
const textArray2 = text2.split('')

export const MainText = () => {
  return (
    <div className="text-[4rem] font-bold ml-[2rem] mb-[14rem] flex flex-col" style={{ overflow: 'hidden' }}>
      <div>
        {textArray.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.05 * index, type: 'spring', stiffness: 260, damping: 20 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div>
        {textArray2.map((char, index) => (
          <motion.span
            key={`second-${index}`}
            initial={{ opacity: 0, scale: 0, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.05 * (textArray.length + index), type: 'spring', stiffness: 260, damping: 20 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
