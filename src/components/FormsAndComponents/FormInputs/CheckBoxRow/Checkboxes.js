import React from 'react'
import ACheckBox from './ACheckBox'

const Checkboxes = () => {
  return (
    <div className="col">
      <strong className="text-muted d-block mb-2">Checkboxes</strong>
      <fieldset className="ml-4">
        <ACheckBox id="dr-checkbox-icOsahl7F" value="Default"/>
        <ACheckBox id="dr-checkbox-YVQ-fd9Z6i" value="Checked" checked={true}/>
        <ACheckBox id="dr-checkbox-si-TxIddvz" value="Disabled" disabled={true}/>
        <ACheckBox id="dr-checkbox-clamSaAlgf" value="Disabled Checked" disabled={true} checked={true}/>
      </fieldset>            
    </div>
  )
}

export default Checkboxes
