import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Toast from './components/Tools/Toast';
import {useSelector} from 'react-redux';
import AddForm from './components/ExpAdd/AddForm';

function App() {
  /* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": false
    }
}]*/

  const toast = useSelector((state) => {
    return state.snack;
  });

  return (
    <>
      <Toast value={toast}></Toast>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route
            path="/home"
            element={
              <div>
                <Navbar></Navbar>
                <Home></Home>
              </div>
            }
          ></Route>

          <Route
            path="/add"
            element={
              <div>
                <Navbar></Navbar>
                <AddForm></AddForm>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
