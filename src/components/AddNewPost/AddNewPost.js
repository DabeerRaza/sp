import React from 'react'
import ActionAndCategories from './ActionAndCategories'
import ToolBarForm from './ToolBarForm'

const AddNewPost = () => {
  return (
    <div className="row">
      <div className="addNewPost pb-4 col-12">
        <span>BLOG POSTS</span>
        <h3>Add New Post</h3>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-lg-9">
            <ToolBarForm />
          </div>
          <div className="col-lg-3">
            <ActionAndCategories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewPost
