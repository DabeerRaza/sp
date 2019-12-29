import React from 'react'

const ButtonGroups = () => {
  return (
    <div>
      <div className="buttonGroupTitle pl-3 mt-2">
        <strong className="text-muted">Button Groups</strong>
      </div>
      <div className="buttonGroup btn-group m-3" role="group">
        <button type="button" className="btn btn-primary p-2 pl-3 pr-3">Fizz</button>
        <button type="button" className="btn btn-default p-2 pl-3 pr-3">Buzz</button>
        <button type="button" className="btn btn-default p-2 pl-3 pr-3">Foo</button>
        <button type="button" className="btn btn-default p-2 pl-3 pr-3">Bar</button>
      </div>
    </div>
  )
}

export default ButtonGroups
