// ============================================
// AALINE - Framer Motion Animation Variants
// Premium, client-wowing animations
// ============================================

// --- FADE ANIMATIONS ---
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// --- SLIDE ANIMATIONS ---
export const slideFromLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
})

export const slideFromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
})

// --- SCALE ANIMATIONS ---
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: 'spring', stiffness: 100, damping: 15 }
  }
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', stiffness: 200, damping: 15 }
  }
}

// --- STAGGER CONTAINERS ---
export const staggerContainer = (staggerTime = 0.12) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerTime, delayChildren: 0.1 }
  }
})

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// --- IMAGE REVEAL ---
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// --- CLIP PATH REVEAL ---
export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
  }
}

// --- SECTION HEADER COMBO ---
export const sectionBadge = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 150, damping: 12 }
  }
}

export const sectionHeading = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// --- CARD HOVER ---
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// --- FLOAT ANIMATION (for hero image, middle image) ---
export const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

// --- PULSE ANIMATION ---
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

// --- ACCORDION (for FAQ) ---
export const accordionContent = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { height: { duration: 0.3 }, opacity: { duration: 0.3, delay: 0.1 } }
  }
}

// --- TESTIMONIAL SLIDE ---
export const testimonialSlide = (direction = 1) => ({
  enter: { opacity: 0, x: direction * 100 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0,
    x: direction * -100,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
})

// --- PROGRESS BAR ---
export const progressBar = (width, delay = 0) => ({
  hidden: { width: '0%' },
  visible: {
    width: `${width}%`,
    transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
})

// --- MOBILE MENU ---
export const mobileMenu = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
}

export const mobileMenuItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
}

// --- HEADER ---
export const headerAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// --- FOOTER ---
export const footerReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

// --- VIEWPORT CONFIG (reusable) ---
export const viewport = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -50px 0px'
}

export const viewportEager = {
  once: true,
  amount: 0.1
}
