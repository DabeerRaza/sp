import React from 'react'

const Buttons = ({text, bgClass}) => {
  return (
    <div className="mb-4 mt-2 col">
      <div className={`bg-${bgClass} text-white text-center rounded p-3`} style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px inset"}}>
        {text}
      </div>
    </div>
  )
}

export default Buttons
