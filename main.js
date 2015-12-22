import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrentTemp from './components/CurrentTemp';
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<CurrentTemp />, document.getElementById('current'));