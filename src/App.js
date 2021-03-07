import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//import components
import Nav from './components/Nav.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    </div>
    </Router>
  );
}

export default App;
