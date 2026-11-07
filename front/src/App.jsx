import './App.css'
//import {axios} from axios
import Home from './pages/Home/index.js'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     
    </>
  )
}

export default App