import React from 'react';
import './App.css';
import QrScan from "./pages/QrScan/QrScan";

// import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";


function App() {
  return (
      <div className="App">
        <QrScan></QrScan>

        {/*<TakePhoto></TakePhoto>*/}
      </div>
  );
}

export default App;
