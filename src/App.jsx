import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';

import { Navbar } from './components/navbar/Navbar';
import {RenderImage}  from './components/renderImage/RenderImage';
import {UpdateImage} from './components/updateImge/UpdateImage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContent } from './components/cartContent/CartContent';
import { DataProvider } from './components/context/DataContext';

function App() {

  return (
    
    <div >
      <DataProvider>
      <Router>
        <Navbar />
        
        <Routes>
        <Route path='/' element={<RenderImage/>} />

          <Route path='/update' element={<UpdateImage />} />
          <Route path='/content' element={<CartContent />} />

        </Routes>
        
      </Router>
      <Footer/>
      </DataProvider>
    </div>
   
  );
}

export default App;