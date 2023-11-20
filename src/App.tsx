import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from './components/Layout';
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import QrScan from "./pages/QrScan/QrScan";

// import TakePhoto from "../components/info_about_gest/take_photo/TakePhoto";

export const allRoutes = [
    {
        component: () => <div className="p3">Main</div>,
        path: '/',
    },
    {
        component: () => <div className="p3">About</div>,
        path: '/about',
    },
    {
        component: () => <QrScan/>,
        path: '/qr'
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
