import React from 'react';
import ReactDOM from 'react-dom';
var HeaderForecast = React.createClass ({

  render:function(){
    return (
      <div id="header" className="row no-margin">
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
export default HeaderForecast