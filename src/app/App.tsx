import React from 'react';
import './App.css';
import InfoGuest from "../components/info_about_gest/InfoGuest";
// import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        {/*<Router>*/}
        {/*  <Routes>*/}
        {/*    <Route path="/take-photo" element={<TakePhoto />} />*/}
        {/*    /!* Добавьте другие маршруты здесь *!/*/}
        {/*  </Routes>*/}
        {/*</Router>*/}
        <InfoGuest visible={true} name={'Andrey'} surname={'Gerasimov'}></InfoGuest>
        {/*<TakePhoto></TakePhoto>*/}
      </div>
  );
}

export default App;
