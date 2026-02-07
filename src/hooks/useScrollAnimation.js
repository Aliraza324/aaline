import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {boolean} triggerOnce - Whether to trigger animation only once (default: true)
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}, triggerOnce = true) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const defaultOptions = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      ...options
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Unobserve after first trigger if triggerOnce is true
        if (triggerOnce) {
          observer.unobserve(element)
        }
      } else if (!triggerOnce) {
        setIsVisible(false)
      }
    }, defaultOptions)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.threshold, options.rootMargin, triggerOnce])

  return [elementRef, isVisible]
}

/**
 * Hook for counter animation (counting up to a target number)
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Whether to start the animation
 * @returns {number} - Current counter value
 */
export const useCounterAnimation = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start])

  return count
}
