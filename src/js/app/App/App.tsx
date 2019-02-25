import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Weather from '../Weather/pages/Weather';
import withAuthorized from '../Authentication/hoc/withAuthorized';
import withUnAuthorized from '../Authentication/hoc/withUnAuthorized';
import Login from '../Authentication/pages/Login';
import Register from '../Authentication/pages/Register';
import { AuthProvider } from '../Authentication/context/AuthContext';

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <>
            <Route exact path="/" component={withAuthorized(Weather)} />
            <Route exact path="/login" component={withUnAuthorized(Login)} />
            <Route
              exact
              path="/register"
              component={withUnAuthorized(Register)}
            />
          </>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
