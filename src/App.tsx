import React from 'react';
import './App.css';

import Menu from "./components/menu/Menu";
import {HashRouter, Route} from 'react-router-dom';
import OneFour from "./components/Prejunior/OneFour";
import Junior from './components/Junior/Junior';


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Menu/>
                <Route path={'/Prejunior'} component={OneFour}/>
                <Route path={'/Junior'} component={Junior}/>
            </div>
        </HashRouter>
    );
}

export default App;
