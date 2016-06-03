import React from 'react';
import ReactDOM from 'react-dom';
var Daily = React.createClass ({

  render:function(){
    return (
      <div className="daily row col-xs-3 col-sm-12 no-gutter" id={this.props.day}>
        <div className="day col-sm-3 text-center">
          <p className="p-day">W</p>
        </div>
        <div className="day-icon col-sm-3 text-center">
          <div className="img-daily-wrapper">
            <img className="img-daily" src="https://api.icons8.com/download/02b49eb213f67d9fb2c8753c368b275d2ef4c1c8/Color/PNG/512/Weather/sun-512.png" title="Sun" />
          </div>
          <p>10%</p>
        </div>
        <div className="day-temp col-sm-6">
          <div className="day-temp-h text-center">
            <p className="p-temp display-inline p-temp-hl">H</p>
            <p className="p-temp display-inline">27</p>
            <p className="p-temp display-inline p-temp-feel">(28)</p>
          </div>
          <div className="day-temp-l text-center">
            <p className="p-temp display-inline p-temp-hl">L</p>
            <p className="p-temp display-inline">21</p>
            <p className="p-temp display-inline p-temp-feel">(19)</p>
          </div>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Daily