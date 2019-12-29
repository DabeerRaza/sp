import React from 'react'

const InputGroups = () => {
  return (
    <div>
      <div className="InputGroupTitle pl-3">
        <strong className="text-muted">Input Group</strong>
      </div>
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text pl-3 pr-3" id="basic-addon1">@</span>
            </div>
            <input type="text" className="form-control pl-3 " placeholder="Username" />
          </div>
        </div>
      </div>      
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2">
          <div className="input-group mb-3">
            <input type="text" className="form-control pl-3" placeholder="Your Email" />
            <div className="input-group-append">
              <span className="input-group-text pl-3 pr-3">@designrevision.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text pl-3 pr-3" id="basic-addon1">$</span>
            </div>
            <input type="text" className="form-control pl-3" placeholder="Amount" defaultValue="1000" />
            <div className="input-group-append">
              <span className="input-group-text pl-3 pr-3">.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputGroups
