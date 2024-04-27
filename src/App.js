
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { CartProvider } from './components/ContextReducer.js';
import Home from './screens/Home';
import Login from './screens/Login';
import MyOrder from './screens/MyOrder.js';
import Signup from './screens/Signup.js';
function App() {
  return (
    <CartProvider>
        <BrowserRouter>
            <Routes> 
              <Route exact path="/" element={<Home/> } />
              <Route exact path="/login" element={<Login/> } />
              <Route exact path="/createuser" element={<Signup/> } />
              <Route exact path="/myorder" element={<MyOrder/> } />
            </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
