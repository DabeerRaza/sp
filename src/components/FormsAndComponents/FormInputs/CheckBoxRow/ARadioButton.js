import React from 'react'

const ARadioButton = ({id, value, disabled, checked}) => {
  return (
    <label className="custom-control custom-radio mb-2">
      <input id={id} type="radio" className="custom-control-input" disabled={disabled} defaultChecked={checked}/>
      <label id={id} className="custom-control-label" aria-hidden="true"></label>
      <span className="custom-control-description">{value}</span>
    </label>
  )
}

export default ARadioButton
