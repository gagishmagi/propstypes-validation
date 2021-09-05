import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App propString={false} propNum={1} propBool={true} propArray={['asdasd,',1123,',true']} propFunc={function(name) { return `Hello ${name}`}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

