'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { initialTabs as tabs } from '@/utils/getNextIngredient'

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="w-[1000px] h-[520px] mr-8 rounded-[10px] bg-white overflow-hidden shadow-lg flex flex-col">
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
  )
}

export default Projects
