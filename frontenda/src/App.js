import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header'
import Login from './Login';

function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="container">
        <Route exact path="/" component={Home} />
        
        <Route exact path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
