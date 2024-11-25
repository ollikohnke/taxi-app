import React from 'react';
import './App.css';
import Driver from './components/Driver.js'
import Login from './components/Login.js'
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./components/AuthContext.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 
function App() {

    return (
        <div id="main">
            <AuthProvider>
                <BrowserRouter basename='/driver'>
                    <Routes>
                        <Route path="/" element={<PrivateRoutes Component={Driver} />} />
                        <Route path="/login" Component={Login} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>                        
    );
}   

 
export default App;