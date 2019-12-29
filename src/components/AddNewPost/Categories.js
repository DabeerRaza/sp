import React from 'react'

const Categories = ({value1, id}) => {
  return (
    <div className="mb-2 pl-4">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id={id} />
        <label className="custom-control-label" htmlFor={id}>{value1}</label>
      </div>
    </div>
  )
}

export default Categories
