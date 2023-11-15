import React from 'react';
import './App.css';
import InfoGuest from "../components/info_about_gest/InfoGuest";

function App() {
  return (
    <div className="App">
      <InfoGuest visible={true} name={'Andrey'} surname={'Gerasimov'}></InfoGuest>
    </div>
  );
}

export default App;
