import React from 'react';
import ReactDOM from 'react-dom';
import TestCounter from './components/TestCounter';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(TestCounter),
    document.getElementById('app')
  );
});