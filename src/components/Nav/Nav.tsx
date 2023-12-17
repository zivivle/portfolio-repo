'use client'
import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@/hooks/usedimensions'
import { MenuToggle, Navigation } from './components'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at calc(100% - 54px) 40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 100,
      damping: 25,
    },
  },
}

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      className="absolute top-0 right-0 bottom-0 w-[300px] z-30"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background absolute top-0 right-0 bottom-0 w-[300px] bg-white" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
