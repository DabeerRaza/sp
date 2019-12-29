import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
export default class CustomSlider3 extends React.Component { 
  render() {
    return (
      <div className="mt-4 mb-4 CustomSlider3">
        <Nouislider
          connect="upper"
          start={80}
          behaviour="tap"
          range={{
            min: [0],
            max: [100]
          }}
        />        
      </div>
    );
  }
}