import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

const Loader = ({ variant = 'spinner', fullScreen = true, text = 'Loading...' }) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white z-50 flex items-center justify-center'
    : 'flex items-center justify-center p-8'

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 150 }}
      >
        {variant === 'spinner' && <SpinnerLoader />}
        {variant === 'dots' && <DotsLoader />}
        {variant === 'pulse' && <PulseLoader />}
        {variant === 'bulb' && <BulbLoader />}
        {variant === 'progress' && <ProgressLoader />}
        {variant === 'ring' && <RingLoader />}

        {text && (
          <motion.p
            className="text-[#E48400] font-semibold text-lg tracking-wide"
            style={{ fontFamily: "'Oxanium', sans-serif" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const SpinnerLoader = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
    <motion.div
      className="absolute inset-0 border-4 border-transparent rounded-full"
      style={{ borderTopColor: '#E48400', borderRightColor: '#f57c00' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
    />
  </div>
)

const DotsLoader = () => (
  <div className="flex gap-3">
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="w-4 h-4 rounded-full bg-[#E48400]"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.16
        }}
      />
    ))}
  </div>
)

const PulseLoader = () => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="absolute inset-0 border-4 border-[#E48400] rounded-full"
        animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: index * 0.6
        }}
      />
    ))}
    <motion.div
      className="w-8 h-8 bg-[#E48400] rounded-full"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </div>
)

const BulbLoader = () => (
  <div className="relative">
    <motion.div
      animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Lightbulb className="w-16 h-16 text-[#E48400]" />
    </motion.div>
    <motion.div
      className="absolute inset-0 bg-[#E48400] rounded-full blur-xl"
      animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
)

const ProgressLoader = () => (
  <div className="w-64">
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#E48400] to-[#f57c00] rounded-full"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '60%' }}
      />
    </div>
  </div>
)

const RingLoader = () => (
  <div className="relative w-16 h-16">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="283"
        strokeDashoffset="75"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E48400" />
          <stop offset="100%" stopColor="#f57c00" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default Loader
