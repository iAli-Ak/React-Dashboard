import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, width, height}) => {
  return (
    <button type='button'
    style={{backgroundColor: bgColor, color, borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-2xl w-${width} h-${height}`}>
      {text}
    </button>
  )
}

export default Button