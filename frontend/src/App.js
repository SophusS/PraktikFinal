import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import About from './pages/About';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar';
//Login and register

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/skabbegivenhed' element={<CreateEvent/>} />
            <Route path='/About' element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;