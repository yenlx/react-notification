import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {registerFirebase} from './config-firebase'
ReactDOM.render(<App />, document.getElementById('root'));
registerFirebase();
