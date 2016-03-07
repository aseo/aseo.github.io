import React from 'react';
import ReactDOM from 'react-dom';
var Daily = React.createClass ({

  render:function(){
    return (
      <div className="daily row" id={this.props.day}>
        <div className="day col-md-3 text-center">
          <p className="p-day">W</p>
        </div>
        <div className="day-icon col-md-3 text-center">
          <img className="icon-daily" src="https://api.icons8.com/download/02b49eb213f67d9fb2c8753c368b275d2ef4c1c8/Color/PNG/512/Weather/sun-512.png" title="Sun" />
          <p>10%</p>
        </div>
        <div className="day-temp col-md-6">
          <div className="day-temp-h text-center">
            <p className="p-temp display-inline p-temp-hl">H</p>
            <p className="p-temp display-inline">4</p>
            <p className="p-temp display-inline p-temp-feel">(2)</p>
          </div>
          <div className="day-temp-l text-center">
            <p className="p-temp display-inline p-temp-hl">L</p>
            <p className="p-temp display-inline">2</p>
            <p className="p-temp display-inline p-temp-feel">(0)</p>
          </div>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Daily