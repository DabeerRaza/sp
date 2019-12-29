import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
export default class CustomSlider2 extends React.Component {
  render() {
    return (
      <div className="mt-3 mb-5 CustomSlider2">
        <Nouislider
          connect
          start={[25, 73]}
          behaviour="tap"
          range={{
            min: [0],
            max: [100]
          }}
          pips= {{
            mode: 'positions',
            values: [0, 25, 50, 75, 100],
            density: 5,
            stepped: true
          }}
        />        
      </div>
    );
  }
}