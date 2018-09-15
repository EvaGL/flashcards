import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const decks = [{title: "AAAA"}, {title: "BBBB"}, {title: "CCCC"}, {title: "DDDD"}, {title: "LLLLL"}];
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
