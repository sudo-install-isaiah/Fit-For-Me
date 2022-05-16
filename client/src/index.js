import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import { CookiesProvider } from 'react-cookie';
import UserProvider from './components/providers/UserProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <UserProvider>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
