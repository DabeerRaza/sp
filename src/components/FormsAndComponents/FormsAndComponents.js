import React from 'react'
import Buttons from './Buttons'
import FormInputs from './FormInputs/FormInputs'
import FormExample from './FormExample/FormExample'
import SlidebarsAndProgress from './SlidebarsAndProgress/SlidebarsAndProgress'
import Groups from './Groups/Groups'
import FilesAndDropdowns from './FilesAndDropdowns/FilesAndDropdowns'

const FormsAndComponents = () => {
  return (
    <div className="row">
      <div className="alert-block col-12">
        <div className="alert alert-primary fade show"> 
          <i className="fa fa-info mx-2"></i>
          How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
        </div>
      </div>
      <div className="formsAndComponents pb-4 col-12">
        <span>OVERVIEW</span>
        <h3>Forms & Components</h3>
      </div>
      <div className="formsButtonsContainer col-12">
        <strong>Colors</strong>
        <div className="formsButtons row">
          <Buttons text="Primary" bgClass="primary"/>          
          <Buttons text="Secondary" bgClass="secondary"/>          
          <Buttons text="Success" bgClass="success"/>          
          <Buttons text="Info" bgClass="info"/>          
          <Buttons text="Warning" bgClass="warning"/>          
          <Buttons text="Danger" bgClass="danger"/>          
          <Buttons text="Dark" bgClass="dark"/>          
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="mb-4 col-lg-8">
            <div className="white-box formInputs mb-4">
              <FormInputs />
            </div>
            <div className="white-box formExample">
              <FormExample />
            </div>
          </div>
          <div className="mb-4 col-lg-4">
            <div className="white-box sidebarAndProgress mb-4">
              <SlidebarsAndProgress />
            </div>
            <div className="white-box groups mb-4">
             <Groups />
            </div>
            <div className="white-box filesAndDropdown">
              <FilesAndDropdowns />
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default FormsAndComponents
