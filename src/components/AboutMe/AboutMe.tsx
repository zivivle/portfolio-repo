'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { AboutMeStep1, AboutMeStep2, AboutMeStep3 } from './components'

interface Props {
  step: ReactNode
  hueA: number
  hueB: number
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const steps: [ReactNode, number, number][] = [
  [<AboutMeStep1 />, 340, 10],
  [<AboutMeStep2 />, 20, 40],
  [<AboutMeStep3 />, 60, 90],
]

export const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[98%] h-[300vh] bg-slate-50 rounded-tl-[10rem] rounded-tr-[10rem] p-4">
        {steps.map(([StepComponent, hueA, hueB], index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="mb-6 ml-[4rem] w-[100%]"
          >
            {StepComponent}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
