import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
          <BrowserRouter>
          <Routes>
            <Route  element={<Home />} path='/'/>
            <Route  element={<Login />} path='/login'/>
            <Route  element={<Signup />} path='/signup'/>
      
          </Routes>
          </BrowserRouter>  


    </div>
  );
}

export default App;
