import React from 'react';
import ReactDOM from 'react-dom';
import Current from './Current.jsx';
import Forecast from './Forecast.jsx';
import Header from './Header.jsx';
var Main = React.createClass ({

   render:function(){
      return (
         <div id="main">
            <Header />
            <div id="content" className="row">
               <Current source="localhost:8080" />
               <Forecast />
            </div>
         </div>
      );
   }
});
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Main