import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing></Landing>}>
        </Route>
        
        <Route path="/home" element={
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
                                    }>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
