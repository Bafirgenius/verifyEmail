import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Screens/Register';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route
        path="/register"
        render={(props) => <Register {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
