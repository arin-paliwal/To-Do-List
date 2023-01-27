import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToDoApp from './ToDoApp'
ReactDOM.render(<ToDoApp/>
,
document.getElementById('root')
);
serviceWorker.unregister();