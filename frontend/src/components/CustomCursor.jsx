import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorScaleRef = useRef(null)
  let timeout

  useEffect(() => {
    const cursorScaleRef = cursorScaleRef.current

    gsap.set(cursorScaleRef,{
      xPercent:-50,
      yPercent:-50,
      scale:0.3
    })
  })
  
  const handleMouseMove = (e) => {
    clearTimeout(timeout)

    gsap
  }
  return (
    <div ref={cursorScaleRef} className='cursor-element'>CustomCursor</div>
  )
}

export default CustomCursor