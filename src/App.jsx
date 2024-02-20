
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import NotFound from './components/NotFound';
import Track from './components/Track';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import Private from './components/Private';
import Diet from './components/Diet';

function App() {


    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("nutrify-user")));

    

  return (
    <>
    <UserContext.Provider value={{loggedUser, setLoggedUser}}>

       <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/track' element={<Private component={Track}/>}/>
        <Route path='/diet' element={<Private component={Diet}/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
        
       </UserContext.Provider>
    </>
  )
}

export default App
