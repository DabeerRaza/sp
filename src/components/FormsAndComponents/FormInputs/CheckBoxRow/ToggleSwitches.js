import React from 'react'
import AToggleSwitch from './AToggleSwitch'

const ToggleSwitches = () => {
  return (
    <div className="col">
      <strong className="text-muted d-block mb-2">ToggleSwitches</strong> 
      <fieldset className="ml-4">
        <AToggleSwitch id="customSwitch1" value="Default" />
        <AToggleSwitch id="customSwitch2" value="Checked" checked={true}/>
        <AToggleSwitch id="customSwitch3" value="Disabled" disabled={true}/>
        <AToggleSwitch id="customSwitch4" value="Disabled Checked" disabled={true} checked={true}/>
      </fieldset>            
    </div>
  )
}

export default ToggleSwitches
