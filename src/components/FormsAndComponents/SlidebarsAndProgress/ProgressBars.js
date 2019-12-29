import React from 'react'

const ProgressBars = ({bgColor, width}) => {
  return (
    <div className="progress mt-2 mb-3">
        <div className={`progress-bar bg-${bgColor}`} style={{width: `${width}%`}} ></div>
    </div>
  )
}

export default ProgressBars
