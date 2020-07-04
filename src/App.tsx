import React from 'react';
import './App.css';

import Menu from "./components/menu/Menu";
import {HashRouter, Route} from 'react-router-dom';
import OneFour from "./components/OneFour";


function App() {
  return (
      <HashRouter>
    <div className="App">
        <Menu/>
        <Route path={'/TaskOneFour'} component={OneFour}/>
    </div>
      </HashRouter>
  );
}

export default App;
