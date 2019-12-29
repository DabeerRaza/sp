import React from 'react'
import ARadioButton from './ARadioButton'

const RadioButtons = () => {
  return ( 
    <div className="col">
      <strong className="text-muted d-block mb-2">RadioButtons</strong>
      <fieldset className="ml-4">
        <ARadioButton id="dr-checkbox-icOsahl7F" value="Default"/>
        <ARadioButton id="dr-checkbox-YVQ-fd9Z6i" value="Checked" checked={true}/>
        <ARadioButton id="dr-checkbox-si-TxIddvz" value="Disabled" disabled={true}/>
        <ARadioButton id="dr-checkbox-clamSaAlgf" value="Disabled Checked" disabled={true} checked={true}/>
      </fieldset>          
    </div>
  )
}

export default RadioButtons
