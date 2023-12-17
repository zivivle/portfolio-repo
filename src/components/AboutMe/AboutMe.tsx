'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { AboutMeStep1, AboutMeStep2, AboutMeStep3 } from './components'

const cardVariants = (hueA: number, hueB: number) => ({
  offscreen: {
    y: 120,
    rotate: 0,
  },
  onscreen: {
    y: [hueA - 100, hueA, 120], // hueA를 y축 이동 값으로 사용
    rotate: hueB, // hueB를 회전 각도 값으로 사용
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
})

const containerVariants = {
  offscreen: {
    y: 350, // 초기 y축 위치
  },
  onscreen: {
    y: 0, // 뷰포트에 들어왔을 때 y축 위치
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
}

const steps: [ReactNode, number, number][] = [
  [<AboutMeStep1 />, 200, -10],
  [<AboutMeStep2 />, 120, -10],
  [<AboutMeStep3 />, 120, -10],
]

export const AboutMe = () => {
  return (
    <div className="flex justify-center items-center relative">
      <motion.div
        className="w-[98%] h-[300vh] bg-slate-50 rounded-tl-[10rem] rounded-tr-[10rem]"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div className="text-[2.5rem] text-black font-semibold left-[7rem] top-[6.98rem] absolute">🍅 About Me!</div>
        {steps.map(([StepComponent, hueA, hueB], index) => (
          <motion.div
            key={index}
            variants={cardVariants(hueA, hueB)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="mb-6 ml-[4rem] w-[100%]"
          >
            {StepComponent}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
