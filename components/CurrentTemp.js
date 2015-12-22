import React from 'react';
class CurrentTemp extends React.Component {

   updateWeather(event){
      console.log("button clicked");
      var url = "https://api.forecast.io/forecast/94ccca721c20d8f61c8277044ecdc3d8/43.472,-80.533?units=si&exclude=minutely&callback=parseResponse";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      console.log("opened");

      var parseResponse = function (data){
         console.log(data.latitude);
      }

      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.send();
      console.log("sent");
      // var json = JSON.parse(xhr);
      //console.log(json);
   }

   render(){
      return (
         <div>Hellooooo
            <button id="btnUpdate" onClick={this.updateWeather}>Weather Update</button>
         </div>
      );
   }
}

export default CurrentTemp