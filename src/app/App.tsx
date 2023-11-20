import React from 'react';
import './App.css';
// import Auth from "../components/authorization/auth";
import Header from "../components/authorization/header/header";
import QrScan from "../pages/QrScan/QrScan";

function App() {
  return (
      <div>
        <Header/>
        {/*<Auth/>*/}
        <QrScan></QrScan>
      </div>
  );
}

export default App;