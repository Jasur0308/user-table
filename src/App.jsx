import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Profile from './components/profile/Profile'

function App() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile/:id' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
