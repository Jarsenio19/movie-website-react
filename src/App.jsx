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
import ActionMovies from './pages/ActionMovies'
import AdventureActionMovies from './pages/AdventureActionMovies'
import BiographyMovies from './pages/BiographyMovies'
import ComedyMovies from './pages/ComedyMovies'

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
        <Route path='/film' element={<Film />} />
        <Route path='/film/:id' element={<Film />} />
        <Route path='/search' element={<SearchResult />} />
        {/* //* Delete the moviedata later  */}
        <Route path='/data' element={<MovieData />} />
        <Route path='/actionmovies' element={<ActionMovies />} />
        <Route path='/adventure&action' element={<AdventureActionMovies />} />
        <Route path='/biography' element={<BiographyMovies />} />
        <Route path='/comedy' element={<ComedyMovies />} />

      </Routes>
    </>
  )
}

export default App