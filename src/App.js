import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Toast from './components/Tools/Toast';
import { useSelector } from 'react-redux';

function App() {

  const toast = useSelector((state) => {
    return state.snack;
  })

  return (
    <>
    <Toast value={toast}></Toast>
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
    </>
  );
}

export default App;
