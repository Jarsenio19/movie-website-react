import { StrictMode } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import { createBrowserHistory } from 'history'
import Search from './pages/Search'
import Home from './pages/Home'



function App() {
  return (

    <>
      <Router history={history} >
        <Routes>
          <Routes path='/' elements={<Search />} />
          <Routes path='/Home' elements={<Home />} />
        </Routes>
      </Router >
    </>
  )
}

export default App