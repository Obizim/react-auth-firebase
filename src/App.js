import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/Home';

function App() {
  return (
    <AuthProvider>
    <Router >
      <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      </Switch>
       </Router>
    </AuthProvider>
  );
}

export default App;
