import React from 'react';
import './App.css';
import {FirstName} from "./components/FirstName";
import {LastName} from "./components/LastName";
import {Messages} from "./components/Messages";

function App() {
  return (
    <div className="App">
      <FirstName value={"Maks"}/>
      <LastName value={"Fesenko"}/>
      <Messages name={'Vova Putin'} text={"where's the money?"} time={'20:55'}/>
    </div>
  );
}



export default App;
