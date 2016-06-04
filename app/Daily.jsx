import React from 'react';
import ReactDOM from 'react-dom';
var Daily = React.createClass ({

  render:function(){

    var pmAm;
    var pDay = <p className="p-day">{this.props.day}</p>;
    var type = this.props.type;
    var day = this.props.day;
    var tempDiv = 
        <div className="hour-temp col-sm-6 hourly-temp-margin">
          <div className="day-temp-h text-center">
            <p className="p-temp display-inline">{this.props.tempHigh}</p>
            <p className="p-temp display-inline p-temp-feel">({this.props.tempFeelHigh})</p>
          </div>
        </div>;
    if (type=="daily"){
      pmAm = "";
      tempDiv = <div className="day-temp col-sm-6">
          <div className="day-temp-h text-center">
            <p className="p-temp display-inline p-temp-hl">H</p>
            <p className="p-temp display-inline">{this.props.tempHigh}</p>
            <p className="p-temp display-inline p-temp-feel">({this.props.tempFeelHigh})</p>
          </div>
          <div className="day-temp-l text-center">
            <p className="p-temp display-inline p-temp-hl">L</p>
            <p className="p-temp display-inline">{this.props.tempLow}</p>
            <p className="p-temp display-inline p-temp-feel">({this.props.tempFeelLow})</p>
          </div>
        </div>;
    }
    else if (day > 12){
      day = day - 12;
      pDay = <p className="p-day p-hour-margin">{day}</p>;
      pmAm = <p>PM</p>;
    }
    else{
      pDay = <p className="p-day p-hour-margin">{day}</p>;
      pmAm = <p>AM</p>;
    }

    return (
      <div className="daily row col-xs-3 col-sm-12 no-gutter" id={this.props.dayClass}>
        <div className="day col-sm-3 text-center">
          {pDay}
          {pmAm}
        </div>
        <div className="day-icon col-sm-3 text-center">
          <div className="img-daily-wrapper">
            <img className="img-daily" src="https://api.icons8.com/download/02b49eb213f67d9fb2c8753c368b275d2ef4c1c8/Color/PNG/512/Weather/sun-512.png" title="Sun" />
          </div>
          <p>{this.props.precip}%</p>
        </div>
        {tempDiv}
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Daily