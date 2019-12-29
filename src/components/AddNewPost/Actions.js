import React from 'react'
import { Link } from 'react-router-dom'

const Actions = ({value1, value2, i, aClass}) => {
  return (
    <div className="mb-2">
      <span className={aClass}>
        <span className="mr-1 dg">
          <i className={`fa fa-${i} mr-2`}></i>
          {value1}:
        </span>
        {value2}
      </span>
      <span className="float-right">
        <Link to="/#">Edit</Link>
      </span>
    </div>
  )
}

export default Actions