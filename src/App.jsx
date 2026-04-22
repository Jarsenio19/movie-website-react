import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import TopIMDb from './pages/TopIMDb'
import Film from './pages/Film'
import { Routes, Route } from 'react-router'
import SearchResult from './components/Common/SearchResult'
import { MovieData } from './Data/MovieData'

// OFFICIAL API: api.imdbapi.dev

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TvSeries />} />
        <Route path='/topimdb' element={<TopIMDb />} />
<<<<<<< HEAD
        <Route path='/film' element={<Film />} />
=======
>>>>>>> 37d5255898d41984716e77ccefef658d18aeaf3e
        <Route path='/film/:id' element={<Film />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/data' element={<MovieData />} />
      </Routes>
    </>
  )
}

export default App