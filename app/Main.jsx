import React from 'react';
import ReactDOM from 'react-dom';
import Current from './Current.jsx';
import Daily from './Daily.jsx';
class Main extends React.Component {

   render(){
      return (
         <div className="row" id="main">
            <Current />
            <Daily />
         </div>
      );
   }
}
//ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
export default Main