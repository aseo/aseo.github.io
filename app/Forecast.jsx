import React from 'react';
import ReactDOM from 'react-dom';
import Daily from './Daily.jsx';
import HeaderForecast from './HeaderForecast.jsx';
var Forecast = React.createClass ({

  render(){
    return (
      <div>
        <div id="forecast" className="col-sm-5">
          <HeaderForecast />
          <div id="content-forecast" className="no-gutter-mobile">
            <Daily day="day1" />
            <Daily day="day2" />
            <Daily day="day3" />
            <Daily day="day4" />
          </div>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Forecast