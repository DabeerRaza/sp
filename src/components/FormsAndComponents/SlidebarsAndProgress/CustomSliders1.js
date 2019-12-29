import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${value}.00`}>
      {children}
    </Tooltip>
  );
}

export default function CustomSliders1() {

  return (
    <div>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={85}
        valueLabelDisplay="on"
      />
      
    </div>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};