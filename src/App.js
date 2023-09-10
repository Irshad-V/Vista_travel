import React from 'react'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Notfound from './routes/Not_found';

const App = () => {
  return (
    <div className='App'>
      
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
 
    </div>
  )
}

export default App
