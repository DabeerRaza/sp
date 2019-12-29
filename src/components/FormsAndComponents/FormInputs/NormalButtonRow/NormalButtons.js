import React from 'react'

const NormalButtons = () => {
  return (
    <div>
      <div className="smallButtonTitle">
        <strong className="text-muted">Small Buttons</strong>
      </div>
      <div className="row mt-2">
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-primary">Primary</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-secondary">Secondary</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-success">Success</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-danger">Danger</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-warning">Warning</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-info">Info</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-default">White</button>
        <button type="button" className="p-2 pl-3 pr-3 mr-1 mt-2 btn btn-dark">Dark</button>
      </div>
    </div>
  )
}

export default NormalButtons
