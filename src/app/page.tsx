'use client'

import Image from 'next/image'
import mainImage from '/public/images/main02.png'
import { motion } from 'framer-motion'
import { AboutMe } from '@/components'
import Projects from '@/components/Projects/Projects'
import MainText from './_components/MainText/MainText'

const animationVariants = {
  offscreen: {
    scale: 1,
    rotate: 0,
    borderRadius: '50%',
  },
  onscreen: {
    scale: [1.5, 1, 1.5, 1.5, 1, 1, 1.3],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ['50%', '50%', '0%', '0%', '50%'],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative">
      <div className="relative w-full h-[100vh] flex flex-row items-center">
        <div className="absolute left-0 mb-[4rem] ml-[4rem]">
          <Image src={mainImage} width={500} height={400} alt="main 이미지" />
        </div>
        <MainText />
      </div>
      <div className="h-auto">
        <AboutMe />
      </div>
      <div className="h-auto mt-[10rem] flex flex-row justify-between">
        <div className="absolute left-0 top-[204rem] text-black text-[2.5rem] font-semibold ml-[2.7rem] mb-[4rem]">
          <motion.div
            className="w-50 h-50 bg-white p-5"
            variants={animationVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <p>🥬 Projects</p>
          </motion.div>
        </div>
        <Projects />
      </div>
    </main>
  )
}
