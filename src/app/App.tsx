import React from 'react';
import './App.css';
import InfoGuest from "../pages/InfoGuest/InfoGuest";
import {Route, Routes} from "react-router-dom";
import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";
// import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";


function App() {
  return (
      <div className="App">
          <Routes>
            <Route element = {<InfoGuest visible={true} name={'Andrey'} surname={'Gerasimov'}></InfoGuest>}>
              <Route path="/take_photo" element={<TakePhoto></TakePhoto>}/>
            </Route>
          </Routes>

        {/*<TakePhoto></TakePhoto>*/}
      </div>
  );
}

export default App;
