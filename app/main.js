import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import './style/main.css';
import './style/bootstrap/css/bootstrap.min.css';

main();

function main() {
   ReactDOM.render(<Main />, document.getElementById('wrapper'));
}