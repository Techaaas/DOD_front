import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from './components/Layout';
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import QrScan from "./pages/QrScan/QrScan";
import TakePhoto from "./pages/TakePhoto/TakePhoto";
// import InfoGuest from "./pages/InfoGuest/InfoGuest";
import Authorization from "./pages/Authorization/Authorization";

// import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";

export const allRoutes = [
  {
    component: () => <QrScan/>,
    path: '/',
  },
  {
    component: () => <TakePhoto/>,
    path: 'take_photo',
  },
  {
    component: () => <Authorization/>,
    path: 'authorization'
  }

] as const;

function App() {
  return (
      <BrowserRouter basename="/DOD_front">

        <Routes>
          {allRoutes.map((route) => {
            const Component = 'component' in route ? route.component :
                () => <ErrorPage children={<>router hasn't component</>}/>;

            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <MainLayout>
                        <Component/>
                      </MainLayout>
                    }
                />
            );
          })}
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
