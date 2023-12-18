'use client'

import Image from 'next/image'
import mainImage from '/public/images/main02.png'
import { motion } from 'framer-motion'
import { AboutMe, ContactMe } from '@/components'
import Projects from '@/components/Projects/Projects'
import MainText from './_components/MainText/MainText'
import { useEffect, useState } from 'react'

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

const bounceAnimation = {
  y: [0, -20, 0, -20, 0], // 위아래로 움직이는 애니메이션 값
  transition: {
    duration: 2, // 애니메이션 지속 시간
    ease: 'easeInOut', // 애니메이션 효과
    repeat: Infinity, // 무한 반복
    repeatType: 'reverse', // 반복 유형 (loop, reverse, mirror 중 하나)
  },
}

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollPosition)

  return (
    <main className="w-full overflow-x-hidden relative">
      <div className="w-full h-[100vh] flex flex-row items-center">
        <div>
          <p
            className=" text-[1.2rem] fixed top-[42rem] left-[48.1%] z-40"
            style={{
              color: scrollPosition >= 420 ? 'black' : 'white',
            }}
          >
            Scroll Down!
          </p>
          <motion.span
            className="material-icons fixed top-[44rem] left-[50%] transform-gpu -translate-x-[50%] -translate-y-[50%] z-40"
            style={{
              fontSize: '4rem',
              color: scrollPosition >= 420 ? 'black' : 'white', // 조건부 스타일 적용
            }}
            animate={bounceAnimation as any}
          >
            keyboard_double_arrow_down
          </motion.span>
        </div>

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
        <ContactMe />
      </div>
    </main>
  )
}
