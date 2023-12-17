'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { initialTabs as tabs } from '@/utils/getNextIngredient'

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const animationVariants = {
    offscreen: {
      opacity: 0, // 초기에는 투명
      scale: 0.5, // 초기에는 축소된 상태
    },
    onscreen: {
      opacity: 1, // 서서히 나타남
      scale: 1.9, // 원래 크기로 확대
      transition: {
        duration: 0.5, // 애니메이션 지속 시간
        ease: 'easeInOut', // 애니메이션 효과
      },
    },
  }

  return (
    <>
      <div className="absolute left-[4rem] top-[223rem] text-black text-[2.5rem] font-semibold ml-[2.7rem] mb-[4rem]">
        <motion.div
          key={selectedTab.label}
          className="w-[13.5rem] h-[16.5rem] bg-white p-5"
          variants={animationVariants}
          initial="offscreen"
          whileInView="onscreen"
          exit="offscreen" // 탭 변경 시 사라지는 애니메이션
          viewport={{ once: true, amount: 0.8 }}
        >
          <p>{selectedTab.label}</p>
        </motion.div>
      </div>
      <div className="w-[70rem] h-[40rem] mb-[6rem] mt-[2rem] ml-[28rem] rounded-[10px] bg-white overflow-hidden shadow-lg flex flex-col">
        <nav className="bg-[#fdfdfd] p-[5px] rounded-t-[10px] border-b border-[#eeeeee] h-[44px]">
          <ul className="flex w-full list-none p-0 m-0 font-poppins font-medium text-[14px]">
            {tabs.map((item) => (
              <li
                key={item.label}
                className={`rounded-[5px] rounded-b-none w-full p-[10px 15px] relative bg-white cursor-pointer h-[24px] flex justify-between items-center flex-1 min-w-0 relative select-none ${
                  item === selectedTab ? 'bg-[#eee]' : ''
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab && (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[var(--accent)]"
                    layoutId="underline"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex justify-center items-center text-[128px] flex-grow select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : '😋'}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  )
}

export default Projects
