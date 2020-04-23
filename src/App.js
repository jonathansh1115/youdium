import React from 'react';
import './App.css';

import { Route } from 'react-router'

// components
import Navbar from './components/navbar.jsx'
import Homepage from './pages/homepage.jsx'
import G from './pages/graphpage.jsx'


function App() {
  return (
    <div className="App">

      <Route path='/' component={Navbar} />

      <Route exact path='/' component={Homepage} />
      
      <Route exact path='/home' component={Homepage} />
      <Route exact path='/login' component={Homepage} />
      <Route exact path='/signup' component={Homepage} />

      <Route exact path='/g' component={G} />
      
    </div>
  );
}

export default App;
