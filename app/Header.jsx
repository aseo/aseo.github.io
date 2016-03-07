import React from 'react';
import ReactDOM from 'react-dom';
var Header = React.createClass ({

  render:function(){
    return (
      <div id="header" className="row no-margin">
        <div id="header-current" className="col-md-7">
          <div id="time-updated" className="col-md-6 text-left">
            <p className="p-header">Last updated 6:00pm</p>
          </div>
          <div id="city-current" className="col-md-6 text-right">
            <p className="p-header">Waterloo, ON</p>
          </div>
        </div>
        <div id="header-forecast" className="col-md-5 text-left">
          <p className="p-header">Today</p>
          <p className="p-header" id="p-divider">|</p>
          <p className="p-header">Next Days</p>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Header