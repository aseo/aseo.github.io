import React from 'react';
import ReactDOM from 'react-dom';
import Daily from './Daily.jsx';
import HeaderForecast from './HeaderForecast.jsx';
var Forecast = React.createClass ({

  getInitialState:function() {
    return {
      isHourly: true
    };
  },

  handleDailyClick:function(){
    this.setState({isHourly: false});
  },

  handleTodayClick:function(){
    this.setState({isHourly: true});
  },

  render:function(){

    var dailyNodes = this.props.dailyData.map(function(daily) {
      return (
        <Daily key={daily.id} type={daily.type} dayClass={daily.dayClass} day={daily.day} precip={daily.precip} tempHigh={daily.tempHigh} tempFeelHigh={daily.tempFeelHigh} tempLow={daily.tempLow} tempFeelLow={daily.tempFeelLow} />
      );
    });

    var hourlyNodes = this.props.hourlyData.map(function(hourly) {
      return (
        <Daily key={hourly.id} type={hourly.type} dayClass={hourly.dayClass} day={hourly.day} precip={hourly.precip} tempHigh={hourly.tempHigh} tempFeelHigh={hourly.tempFeelHigh} tempLow={hourly.tempLow} tempFeelLow={hourly.tempFeelLow} />
      );
    });

    return (
      <div>
        <div id="forecast" className="col-sm-5">

        <div id="header" className="row no-margin">
          <div id="header-forecast" className="col-md-5 text-left">
            <p className="p-header"><a onClick={this.handleTodayClick}>Today</a></p>
            <p className="p-header" id="p-divider">|</p>
            <p className="p-header"><a onClick={this.handleDailyClick}>Next Days</a></p>
          </div>
        </div>

          <div id="content-forecast" className="no-gutter-mobile">
            {this.state.isHourly ? hourlyNodes : dailyNodes}
          </div>
        </div>
      </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Forecast