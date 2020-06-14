import React from 'react';
import './App.css';
import {FirstName} from "./components/FirstName";
import {LastName} from "./components/LastName";
import {Messages} from "./components/Messages";
import Tasks from './components/Tasks';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <FirstName value={"Maks"}/>
      <LastName value={"Fesenko"}/>
      <Messages name={'Vova Putin'} text={"where's the money? where's the money?where's the money?where's the money?мwhere's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?where's the money?"} time={'20:55'}/>
      <Tasks/>
      <Input/>
    </div>
  );
}



export default App;
