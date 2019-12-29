import React from 'react'

const AToggleSwitch = ({id, value, disabled, checked}) => {
  return (
      <div className="custom-control custom-switch ml-2 mb-2">
        <input type="checkbox" className="custom-control-input" id={id} disabled={disabled} defaultChecked={checked}/>
        <label className="custom-control-label pl-2" htmlFor={id}>{value}</label>
      </div>
  )
}

export default AToggleSwitch
