import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import PageRenderer from './page-renderer';

//import components
import Nav from './components/Nav.js';

function App() {

  const user = {
    firstName: 'Cameron',
    lastName: 'Glowicki'
  }

  return (
    <Router>
    <div className="App">
      <Nav user={user}/>
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render= {() => <Redirect to="/home" />} />
        <Route component={() => 404} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
