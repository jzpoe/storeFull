import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {RenderImage}  from './components/renderImage/RenderImage';
import {UpdateImage} from './components/updateImge/UpdateImage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        
        <Routes>
        <Route path='/' element={<RenderImage />} />

          <Route path='/update' element={<UpdateImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;