import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'
import Search from "./Pages/Search/Search";
import reportWebVitals from './reportWebVitals';
import SidebarLayout from './Pages/SidebarLayout/SidebarLayout';
import CreatePost from './Pages/CreatePost/CreatePost';
import Profile from './Pages/Profile/Profile'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>   
      <Route index element={<Login />} />  
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<SidebarLayout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
