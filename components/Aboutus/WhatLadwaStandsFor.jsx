'use client'

import React, { useEffect, useRef, useState, memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const TextRevealCard = ({
  text,
  revealText,
  className
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef(null)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    if (cardRef.current) {
      const updateDimensions = () => {
        const { left, width: localWidth } = cardRef.current.getBoundingClientRect()
        setLeft(left)
        setLocalWidth(localWidth)
      }
      
      updateDimensions()
      window.addEventListener('resize', updateDimensions)
      
      return () => {
        window.removeEventListener('resize', checkMobile)
        window.removeEventListener('resize', updateDimensions)
      }
    }
  }, [])

  const updatePosition = useCallback((clientX) => {
    if (cardRef.current && localWidth > 0) {
      const relativeX = clientX - left
      const percentage = Math.max(0, Math.min(100, (relativeX / localWidth) * 100))
      setWidthPercentage(percentage)
    }
  }, [left, localWidth])

  const mouseMoveHandler = useCallback((event) => {
    if (!isMobile) {
      event.preventDefault()
      updatePosition(event.clientX)
    }
  }, [isMobile, updatePosition])

  const touchMoveHandler = useCallback((event) => {
    if (isMobile && event.touches[0]) {
      event.preventDefault()
      updatePosition(event.touches[0].clientX)
    }
  }, [isMobile, updatePosition])

  const mouseLeaveHandler = useCallback(() => {
    setIsMouseOver(false)
    if (!isMobile) {
      setWidthPercentage(0)
    }
  }, [isMobile])

  const mouseEnterHandler = useCallback(() => {
    setIsMouseOver(true)
  }, [])

  const touchStartHandler = useCallback((event) => {
    if (isMobile) {
      setIsMouseOver(true)
      if (event.touches[0]) {
        updatePosition(event.touches[0].clientX)
      }
    }
  }, [isMobile, updatePosition])

  const touchEndHandler = useCallback(() => {
    if (isMobile) {
      setIsMouseOver(false)
      setTimeout(() => {
        setWidthPercentage(0)
      }, 1000)
    }
  }, [isMobile])

  const rotateDeg = (widthPercentage - 50) * 0.05 

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#097362] border-2 border-[#a2fff0] w-full max-w-6xl rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl touch-none",
        className
      )}
      style={{ touchAction: 'none' }}
    >
      <div className="h-32 md:h-48 relative flex items-center overflow-hidden">
        {/* Revealed Text */}
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={
            isMouseOver 
              ? { duration: isMobile ? 0.1 : 0 } 
              : { duration: isMobile ? 0.6 : 0.4 }
          }
          className="absolute bg-[#097362] z-20 will-change-transform"
        >
          <p className="text-sm md:text-2xl lg:text-3xl xl:text-4xl font-black text-white text-center leading-tight px-2">
            {revealText}
          </p>
        </motion.div>

        {/* Scratch Line */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={
            isMouseOver 
              ? { duration: isMobile ? 0.1 : 0 } 
              : { duration: isMobile ? 0.6 : 0.4 }
          }
          className="h-32 md:h-48 w-[6px] md:w-[8px] bg-gradient-to-b from-transparent via-[#a2fff0] to-transparent absolute z-50 will-change-transform"
        />

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] mx-auto w-full">
          <p className="text-3xl md:text-6xl lg:text-8xl font-black text-white text-center leading-tight opacity-20 px-2">
            {text}
          </p>
          <MemoizedStars isMobile={isMobile} />
        </div>
      </div>
    </div>
  )
}

const Stars = ({ isMobile }) => {
  const randomMove = () => Math.random() * 4 - 2
  const randomOpacity = () => Math.random() * 0.7 + 0.3
  const random = () => Math.random()
  
  const starCount = isMobile ? 60 : 120
  
  return (
    <div className="absolute inset-0">
      {[...Array(starCount)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 15 + 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: isMobile ? `3px` : `5px`,
            height: isMobile ? `3px` : `5px`,
            backgroundColor: "#a2fff0",
            borderRadius: "50%",
            zIndex: 1,
            opacity: 0.7,
          }}
          className="inline-block"
        />
      ))}
    </div>
  )
}

const MemoizedStars = memo(Stars)

const WhatLadwaStandsFor = () => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20'>
      <div className='text-center mb-8 md:mb-16'>
        <h1 className='text-3xl md:text-6xl lg:text-7xl font-black text-black mb-4 md:mb-6'>
          What <span className="text-[#097362] text-3xl md:text-6xl lg:text-8xl ">Ladwa </span>Stands For
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-[#097362] opacity-60 max-w-2xl mx-auto px-4'>
    {typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window) 
            ? 'Touch and drag across the card' 
            : 'Hover over the card'} to reveal the Secret.
        </p>
      </div>

      <TextRevealCard
        text="L • A • D • W • A"
        revealText="Leadership, Assurance, Dependability, Worldwide, Accountability"
        className="mx-auto"
      />

      <div className='text-center mt-8 md:mt-12'>
        <p className='text-sm md:text-base lg:text-lg text-[#097362] opacity-60 px-4'>
          {typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window)
            ? 'Touch and drag your finger across the card to reveal the meaning': ""}
        </p>
      </div>
    </div>
  )
}

export default WhatLadwaStandsFor