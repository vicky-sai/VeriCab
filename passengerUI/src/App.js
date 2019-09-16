import React from 'react';

import './App.css';
import  Navigation  from './Navigation/Navigation.react';
import Home from './Home/Home.react';
import GoBack from './GoBack/GoBack.react';

function App() {
  return (
    <div className="App">
      <Home></Home>
     
      <Navigation></Navigation>
    </div>
  );
}

export default App;
