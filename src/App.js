import React from "react";
import {Routes, Route} from 'react-router';

import PagesOne from "./pages/page1";
import PagesTwo from "./pages/page2";
import PagesThree from "./pages/page3";

import './App.css';
import Header from "./components/header/header";

function App() {

  return (
    <div className='container'>
      <Header/>

      <Routes>
        <Route path='/' element={<PagesOne/>}/>
        <Route path='/two' element={<PagesTwo/>}/>
        <Route path='/three' element={<PagesThree/>}/>
      </Routes>
    </div>
  );
}

export default App;
