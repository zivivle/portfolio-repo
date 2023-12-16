'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { IMenuItem } from './MenuItem.types'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ config }: React.PropsWithChildren<IMenuItem>) => {
  const { title } = config
  return (
    <motion.li
      className="list-none mb-[20px] flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder w-[40px] h-[40px] rounded-full flex-none mr-[20px] bg-slate-200" />
      <div className="rounded-[5px] w-[200px] h-[20px] font-semibold mb-6 flex-grow text-black text-[1.4rem]">
        {title}
      </div>
    </motion.li>
  )
}
