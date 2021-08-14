import React from 'react';
// import Navbar from "./components/Navbar";
import { AuthProvider } from './context/AuthContext';
// import Login from './views/auth/Login';
import Signup from './views/auth/Signup';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      {/* <Navbar /> */}
      {/* <Login /> */}
       <Signup />
    </div>
    </AuthProvider>
  );
}

export default App;
