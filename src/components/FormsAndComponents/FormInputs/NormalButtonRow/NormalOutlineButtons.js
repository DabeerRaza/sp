import React from 'react'

const NormalOutlineButtons = () => {
  return (
    <div className="mt-4">
      <div className="smallButtonTitle">
        <strong className="text-muted">Small Outline Buttons</strong>
      </div>
      <div className="row mt-2">
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-primary">Primary</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-secondary">Secondary</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-success">Success</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-danger">Danger</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-warning">Warning</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-info">Info</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-default">White</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-outline-dark">Dark</button>
      </div>
    </div>
  )
}

export default NormalOutlineButtons
