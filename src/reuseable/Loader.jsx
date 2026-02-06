import React from 'react'
import { Lightbulb } from 'lucide-react'

const Loader = ({ variant = 'spinner', fullScreen = true, text = 'Loading...' }) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white z-50 flex items-center justify-center'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        {/* Loader Variants */}
        {variant === 'spinner' && <SpinnerLoader />}
        {variant === 'dots' && <DotsLoader />}
        {variant === 'pulse' && <PulseLoader />}
        {variant === 'bulb' && <BulbLoader />}
        {variant === 'progress' && <ProgressLoader />}
        {variant === 'ring' && <RingLoader />}

        {/* Loading Text */}
        {text && (
          <p
            className="text-[#E48400] font-semibold text-lg tracking-wide animate-pulse"
            style={{ fontFamily: "'Oxanium', sans-serif" }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

// Variant 1: Spinning Circle with Orange Gradient
const SpinnerLoader = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
    <div
      className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
      style={{
        borderTopColor: '#E48400',
        borderRightColor: '#f57c00',
        animationDuration: '800ms',
      }}
    ></div>
  </div>
)

// Variant 2: Animated Dots
const DotsLoader = () => (
  <div className="flex gap-3">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className="w-4 h-4 rounded-full bg-[#E48400]"
        style={{
          animation: 'bounce 1.4s infinite ease-in-out',
          animationDelay: `${index * 0.16}s`,
        }}
      ></div>
    ))}
    <style jsx>{`
      @keyframes bounce {
        0%,
        80%,
        100% {
          transform: scale(0.8);
          opacity: 0.5;
        }
        40% {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    `}</style>
  </div>
)

// Variant 3: Pulsing Rings
const PulseLoader = () => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className="absolute inset-0 border-4 border-[#E48400] rounded-full"
        style={{
          animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          animationDelay: `${index * 0.6}s`,
        }}
      ></div>
    ))}
    <div className="w-8 h-8 bg-[#E48400] rounded-full"></div>
    <style jsx>{`
      @keyframes pulse-ring {
        0% {
          transform: scale(0.5);
          opacity: 1;
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }
    `}</style>
  </div>
)

// Variant 4: Bulb Icon (Perfect for Lighting Company!)
const BulbLoader = () => (
  <div className="relative">
    <Lightbulb
      className="w-16 h-16 text-[#E48400]"
      style={{
        animation: 'bulb-glow 1.5s ease-in-out infinite',
      }}
    />
    <div
      className="absolute inset-0 bg-[#E48400] rounded-full blur-xl opacity-50"
      style={{
        animation: 'bulb-glow 1.5s ease-in-out infinite',
      }}
    ></div>
    <style jsx>{`
      @keyframes bulb-glow {
        0%,
        100% {
          opacity: 0.4;
          transform: scale(0.95);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    `}</style>
  </div>
)

// Variant 5: Progress Bar
const ProgressLoader = () => {
  return (
    <div className="w-64">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#E48400] to-[#f57c00] rounded-full"
          style={{
            animation: 'progress 1.5s ease-in-out infinite',
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 75%;
            margin-left: 0%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  )
}

// Variant 6: Ring Loader
const RingLoader = () => (
  <div className="relative w-16 h-16">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      {/* Animated circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="283"
        strokeDashoffset="75"
        style={{
          animation: 'rotate 1.5s linear infinite',
          transformOrigin: 'center',
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E48400" />
          <stop offset="100%" stopColor="#f57c00" />
        </linearGradient>
      </defs>
    </svg>
    <style jsx>{`
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)

export default Loader
