import React from 'react'

const SeamlessInputGroups = () => {
  return (
    <div>
      <div className="InputGroupTitle pl-3">
        <strong className="text-muted">Seamless Input Groups</strong>
      </div>
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2">
          <div className="input-group mb-3">
              <i className="fa fa-user userIcon"></i>
              <input type="text" className="form-control pl-4" placeholder="Username" defaultValue="design.revision" />
          </div>
        </div>
      </div>      
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2">
          <div className="input-group mb-3">
              <input type="Password" className="form-control pl-3" placeholder="Password" defaultValue="design.revision" />
              <i className="fa fa-lock passIcon"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col buttonGroup btn-group ml-3 mr-3 mt-2 mb-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control pl-3" placeholder="Recipient's username" />
            <div className="input-group-append">
              <button className="input-group-text pl-3 pr-3">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeamlessInputGroups
