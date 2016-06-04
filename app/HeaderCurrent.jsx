import React from 'react';
import ReactDOM from 'react-dom';
var HeaderCurrent = React.createClass ({

  render:function(){
    return (
      <div id="header" className="row no-margin">
        <div id="header-current" className="row">
          <div id="time-updated" className="col-xs-6 text-left">
            <p className="p-header">Last updated 10:00am</p>
          </div>
          <div id="city-current" className="col-xs-6 text-right">
            <p className="p-header">Waterloo, ON</p>
          </div>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default HeaderCurrent