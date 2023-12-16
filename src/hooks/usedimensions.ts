import { useEffect, useRef } from 'react'

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    function updateDimensions() {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth
        dimensions.current.height = ref.current.offsetHeight
      }
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [ref, ref.current]) // 의존성 배열에 ref.current 추가

  return dimensions.current
}
