import React from 'react'
import Actions from './Actions'
import Categories from './Categories'

const ActionAndCategories = () => {
  return (
    <div className="actionAndCategories">
      <div className="white-box pb-3">
        <div className="actionTitle border-bottom p-3">
          <h6>Actions</h6>
        </div>
        <div className="actionContainer p-3">
          <Actions value1="Status" value2="Draft" i="flag" />
          <Actions value1="Visibility" value2="Public" i="eye" aClass="text-success"/>
          <Actions value1="Schedule" value2="Now" i="calendar" />
          <Actions value1="Readability" value2="OK" i="book" aClass="text-warning" />      
        </div>
        <div className="actionButtons">
          <button className="btn btn-outline-primary p-1 pl-2 pr-2 ml-3">
            <i className="fa fa-save"></i> Save Draft
          </button>
          <button className="btn btn-primary p-1 pl-2 pr-2 float-right mr-3">
            <i className="fa fa-save"></i> Publish
          </button>
        </div>
      </div>
      <div className="white-box mt-3">
        <div className="categoriesTitle border-bottom p-3">
          <h6>Actions</h6>
        </div>
        <div className="categoriesContainer pl-3 p-2 border-bottom">
          <Categories value1="Uncategorized" id="customCheck1" />
          <Categories value1="Design" id="customCheck2" />
          <Categories value1="Development" id="customCheck3" />
          <Categories value1="Writing" id="customCheck4" />
          <Categories value1="Books" id="customCheck5" />
        </div>
        <div className="newCategory p-3">
          <input placeholder="New category" className="form-control"></input>
          <div className="input-group-append">
            <button className="newCategoryAddBtn px-2 btn btn-white">+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionAndCategories
