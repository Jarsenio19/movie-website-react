import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/Home' element={<Home />} />
        
      </Routes>
    </>
  )
}

export default App
