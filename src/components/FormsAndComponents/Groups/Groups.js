import React from 'react'
import ButtonGroups from './ButtonGroups/ButtonGroups'
import InputGroups from './InputGroups/InputGroups'
import SeamlessInputGroups from './SeamlessInputGroups/SeamlessInputGroups'

const Groups = () => {
  return (
    <div>
      <div className="pl-3 p-3 groupsTitle border-bottom">
        <h6>Groups</h6>
      </div>      
      <ButtonGroups />
      <InputGroups />
      <SeamlessInputGroups />
    </div>
  )
}

export default Groups
