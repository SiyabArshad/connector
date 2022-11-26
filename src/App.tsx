import React from 'react';
import "./helpers/style"
import Auth from './pages/Auth';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
function App() {
  const user:Boolean=true
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={user?<Home/>:<Auth/>}/>
        <Route path='/' element={user?<Home/>:<Auth/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
