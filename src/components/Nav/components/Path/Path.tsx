import React, { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { SVGProps } from 'react'

type PathProps = SVGProps<SVGPathElement> & MotionProps

const Path = forwardRef<SVGPathElement, PathProps>((props, ref) => (
  <motion.path
    ref={ref as any}
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
))

export default Path
