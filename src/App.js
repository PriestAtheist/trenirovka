import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Exercises from './pages/Exercises/Exercises';
import {Routes, Route} from 'react-router-dom';
import Programms from './pages/Programms/Programms';
import Profile from './pages/Profile/Profile';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from './components/Layout/Layout';

import './App.scss';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ="exercises" element={<Exercises/>}/>
          <Route path ="programms" element={<Programms/>}/>
          <Route path ="profile" element={<Profile/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
