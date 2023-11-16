import React from 'react';
import './App.css';
import Auth from "../components/authorization/auth";
import Header from "../components/header/header";

function App() {
  return (
      <div>
          <Header/>
          <Auth/>
      </div>
  );
}

export default App;