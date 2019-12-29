import React from 'react'

const FormExample = () => {
  return (
    <div>
      <div className="pl-4 p-3 formExampleTitle border-bottom">
        <h6>Form Example</h6>
      </div>
      <form className="p-3">
        <div className="form-row mb-3">
          <div className="form-group col-md-6 pr-2">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control pl-2 mt-2" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6 pl-2">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control pl-2 mt-2" id="inputPassword4" />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control pl-2 mt-2" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control pl-2 mt-2" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-md-6 pr-1">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control mt-2" id="inputCity" />
          </div>
          <div className="form-group col-md-4 pl-2 pr-2">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control mt-2">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control mt-2" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">            
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label mt-3" htmlFor="gridCheck">
              I agree with your Privacy Policy.
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary pl-3 pr-3 p-1 mt-2">Create New Account</button>
      </form>
    </div>
  )
}

export default FormExample
