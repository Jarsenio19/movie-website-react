import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import TopIMDb from './pages/TopIMDb'
import Film from './pages/Film'
import { Routes, Route } from 'react-router'
import SearchResult from './components/Common/SearchResult'
import Genre from './pages/Genre'
import ReleaseYear from './pages/ReleaseYear'
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
        <Route path='/film/:id' element={<Film />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/genre/:genre' element={<Genre />} />
        <Route path='/release/:year' element={<ReleaseYear />} />
      </Routes>
    </>
  )
}

export default App
