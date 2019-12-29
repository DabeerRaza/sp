import React from 'react'

const ToolBarForm = () => {
  return (
    <div className="white-box p-3 toolBarForm">
      <form className="postForm">
        <input type="text" className="form-control pl-3 pt-4 pb-4 mb-3" placeholder="Your Post Title" />
        <div>
          <div className="toolbar">
            <span>
              <select>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Normal</option>
              </select>
            </span>
            <span><i className="fa fa-bold"></i></span>
            <span><i className="fa fa-italic"></i></span>
            <span><i className="fa fa-underline"></i></span>
            <span><i className="fa fa-link"></i></span>
            <span><i className="fa fa-list-ol"></i></span>
            <span><i className="fa fa-list"></i></span>
            <span><i className="fa fa-text-width"></i></span>
          </div>
          <textarea className="form-control" rows="21"></textarea>
        </div>
      </form>
    </div>
  )
}

export default ToolBarForm
