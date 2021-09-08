import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import AddNew from './views/add-new/Add-New';
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
      <Route path="/add-new" component={AddNew} />
      </Switch>
       </Router>
    </AuthProvider>
  );
}

export default App;
