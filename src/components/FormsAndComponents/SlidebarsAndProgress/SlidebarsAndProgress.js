import React from 'react'
import ProgressBars from './ProgressBars'
import CustomSliders1 from './CustomSliders1'
import CustomSlider2 from './CustomSlider2'
import CustomSlider3 from './CustomSlider3'

const SlidebarsAndProgress = () => {
  return (
    <>
      <div className="pl-4 p-3 sidebarAndProgressTitle border-bottom">
        <h6>Sliders & Progress Bars</h6>
      </div>
      <div className="progressBars p-3 border-bottom">
        <strong className="text-muted">Progress Bars</strong>

        <ProgressBars width="25" bgColor="primary" />
        <ProgressBars width="50" bgColor="success" />
        <ProgressBars width="75" bgColor="info" />
        <ProgressBars width="100" bgColor="danger" />          
      </div>

      <div className="customSliders p-3 border-bottom">
        <strong className="text-muted">Custom Sliders</strong>

        <CustomSliders1/>
        <CustomSlider3 />          
        <CustomSlider2 />          
      </div>
    </>
  )
}

export default SlidebarsAndProgress
