import React from 'react';
import ReactDOM from 'react-dom';
import CurrentTemp from './CurrentTemp.jsx';

main();

function main() {
   ReactDOM.render(<CurrentTemp />, document.getElementById('current'));
}