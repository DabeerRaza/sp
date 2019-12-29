import React from 'react'

const Forms = () => {
  return (
    <>
      <div className="forms col-lg-6">
        <div className="formsTitle">
          <strong className="text-muted">Forms</strong>
        </div>
        <form>
          <div className="input-group mb-3 pr-4 mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text pl-2 pr-2" id="basic-addon1">@</span>
            </div>
            <input type="text" className="form-control pl-2" placeholder="Username" />          
          </div>
          <div className="input-group mb-3 pr-4 mt-2">
            <input type="password" className="form-control pl-2" placeholder="Password"   defaultValue="somePassword"/>
          </div>
          <div className="input-group mb-3 pr-4 mt-2">
            <input type="text" className="form-control pl-2" placeholder="Address" defaultValue="7898 Kensington Junction, New York, USA"/>
          </div>
          <div className="row">
            <div className="col mb-3 mt-2 mr-2">
              <input type="text" className="form-control pl-2" placeholder="City" defaultValue="New York"/>
            </div>
            <div className="col mb-3 mt-2 ml-2 pr-4">
              <select className="custom-select pl-3">
                <option defaultValue>Choose...</option>
                <option value="1">...</option>
              </select>
            </div>
          </div>          
        </form>
      </div>
      <div className="FormValidation col-lg-6">
        <div className="formsValidationTitle">
          <strong className="text-muted">Forms Validation</strong>
        </div>
        <form>
          <div className="row">
            <div className="col mb-3 mt-2 mr-2">
              <input type="text" className="form-control pl-2 is-valid" placeholder="Vasile" defaultValue="Vasile"/>
              <div className="valid-feedback">
                The first name looks good!
              </div>
            </div>
            <div className="col mb-3 mt-2 ml-2 pr-4">
              <input type="text" className="form-control pl-2 is-valid" placeholder="Catalin" defaultValue="Catalin"/>
              <div className="valid-feedback">
                The last name looks good!
              </div>
            </div>                       
          </div>          
          <div className="input-group mb-3 pr-4 mt-2">
            <input type="Username" className="form-control pl-2 is-invalid" placeholder="Username" />
            <div className="invalid-feedback">
              The username is taken.
            </div>
          </div>
          <div className="col mb-3 mt-2 pr-4">
            <select className="custom-select pl-3 is-invalid">
              <option defaultValue>Choose...</option>
              <option value="1">...</option>
            </select>
            <div className="invalid-feedback">
              Please select your state.
            </div>
          </div>                 
        </form>      
      </div>
    </>
  )
}

export default Forms
