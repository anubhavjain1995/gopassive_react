import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/screens/Home';
import Login from './views/screens/Login';
import PrivateLayout from './views/layouts/PrivateLayout';
import PublicLayout from './views/layouts/PublicLayout';
import './style.scss';
import './_common.scss';
import About from './views/screens/about/About';

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route exact path="/login"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          <Route exact path="/"
            element={
              <PrivateLayout>
                <Home />
              </PrivateLayout>
            }
          />
           <Route exact path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
        </Routes>
      </BrowserRouter>
   </>
   
  );
}

export default App;
