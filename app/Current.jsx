import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import HeaderCurrent from './HeaderCurrent.jsx';
var $ = require ('jquery');
var Current = React.createClass ({

  // updateWeather:function(event){
  //   console.log("button clicked");
  //   var url = "https://api.forecast.io/forecast/94ccca721c20d8f61c8277044ecdc3d8/43.472,-80.533?units=si&exclude=minutely&callback=parseResponse";
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", url, true);

  //   var parseResponse = function (data){
  //      console.log(data.latitude);
  //   }

  //   xhr.onload = function (e) {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         console.log(xhr.responseText);
  //       } else {
  //         console.error(xhr.statusText);
  //       }
  //     }
  //   };
  //   xhr.send();
  //   console.log("sent");
  //   // var json = JSON.parse(xhr);
  //   //console.log(json);
  // },

  componentDidMount:function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  getInitialState: function() {
    return {
      precip: 10,
      tempCurrent: 23,
      tempApparent: 26
    };
  },

  render:function() {
    return (
      <div>
        <div id="current" className="col-sm-7">
           {/* <Button bsStyle="success" bsSize="small" id="btnUpdate" onClick={this.updateWeather}>
              Weather Updated
            </Button> */}
            <HeaderCurrent />
            <div id="content-current">
              <img id="icon-current" src="https://api.icons8.com/download/02b49eb213f67d9fb2c8753c368b275d2ef4c1c8/Color/PNG/512/Weather/sun-512.png" title="Sun" />
              <p className="precip-curr">{this.state.precip}%</p>
              <p className="temp-curr">{this.state.tempCurrent}</p>
              <p className="feels-curr">feels like</p>
              <p className="app-temp-curr">{this.state.tempApparent}</p>
              <p className="quote-curr">"hello, sunshine"</p>
            </div>
         </div>
       </div>
    );
  }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Current