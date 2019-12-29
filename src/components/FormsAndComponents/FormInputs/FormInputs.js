import React from 'react'
import Checkboxes from './CheckBoxRow/Checkboxes'
import RadioButtons from './CheckBoxRow/RadioButtons'
import ToggleSwitches from './CheckBoxRow/ToggleSwitches'
import SmallButtons from './SmallButtonRow/SmallButtons'
import SmallOutlineButtons from './SmallButtonRow/SmallOutlineButtons'
import NormalButtons from './NormalButtonRow/NormalButtons'
import NormalOutlineButtons from './NormalButtonRow/NormalOutlineButtons'
import Forms from './Forms/Forms'

const FormInputs = () => {
  return (
    <div>
      <div className="pl-4 p-3 formInputsTitle border-bottom">
        <h6>Form Inputs</h6>              
      </div>
      <div className="row p-3 formInputsRow1">
        <Checkboxes />
        <RadioButtons />
        <ToggleSwitches />
      </div>
      <div className="row p-3 formInputsRow2 border-top">
        <SmallButtons />
        <SmallOutlineButtons />
      </div>
      <div className="row p-3 formInputsRow3">
        <NormalButtons />
        <NormalOutlineButtons />
      </div>
      <div className="row p-3 formInputsRow3">
        <Forms />
      </div>
    </div>
  )
}

export default FormInputs
