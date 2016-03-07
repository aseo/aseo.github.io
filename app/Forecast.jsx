import React from 'react';
import ReactDOM from 'react-dom';
import Daily from './Daily.jsx';
var Forecast = React.createClass ({

  render(){
    return (
      <div id="forecast" className="col-md-5">
        <div id="content-forecast">
          <Daily day="day1" />
          <Daily day="day2" />
          <Daily day="day3" />
          <Daily day="day4" />
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Forecast