'use client'
import * as React from 'react'
import { motion } from 'framer-motion'

import { NAV_CONFIG } from '@/constants/Nav.constants'
import { MenuItem } from '..'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul className="p-[25px] absolute top-[100px] w-[230px] m-0" variants={variants}>
    {NAV_CONFIG.map((conf, i) => (
      <MenuItem key={i} config={conf} />
    ))}
  </motion.ul>
)
