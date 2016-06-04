import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import './style/main.css';
import './style/bootstrap/css/bootstrap.min.css';

main();

function main() {
   
   var dailyData = [
      {id: 1, type: "daily", dayClass:"day1", day:"W", precip:"15", tempHigh:"30", tempFeelHigh:"32", tempLow:"17", tempFeelLow:"15"},
      {id: 2, type: "daily", dayClass:"day2", day:"T", precip:"10", tempHigh:"28", tempFeelHigh:"29", tempLow:"16", tempFeelLow:"15"},
      {id: 3, type: "daily", dayClass:"day3", day:"F", precip:"25", tempHigh:"25", tempFeelHigh:"27", tempLow:"16", tempFeelLow:"14"},
      {id: 4, type: "daily", dayClass:"day4", day:"S", precip:"20", tempHigh:"29", tempFeelHigh:"30", tempLow:"18", tempFeelLow:"16"}
   ];

   var hourlyData = [
      {id: 1, type: "hourly", dayClass:"day1", day:"14", precip:"15", tempHigh:"30", tempFeelHigh:"32", tempLow:"17", tempFeelLow:"15"},
      {id: 2, type: "hourly", dayClass:"day2", day:"18", precip:"10", tempHigh:"28", tempFeelHigh:"29", tempLow:"16", tempFeelLow:"15"},
      {id: 3, type: "hourly", dayClass:"day3", day:"22", precip:"25", tempHigh:"25", tempFeelHigh:"27", tempLow:"16", tempFeelLow:"14"},
      {id: 4, type: "hourly", dayClass:"day4", day:"2", precip:"20", tempHigh:"29", tempFeelHigh:"30", tempLow:"18", tempFeelLow:"16"}
   ];

   ReactDOM.render(<Main dailyData={dailyData} hourlyData={hourlyData} />, document.getElementById('wrapper'));
}