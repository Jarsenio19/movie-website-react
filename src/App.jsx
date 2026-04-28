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
import CrimeMovies from './pages/CrimeMovies'
import DramaMovies from './pages/DramaMovies'
import FamilyMovies from './pages/FamilyMovies'
import FantasyMovies from './pages/FantasyMovies'
import HistoryMovies from './pages/HistoryMovies'
import HorrorMovies from './pages/HorrorMovies'
import MusicMovies from './pages/MusicMovies'
import MysteryMovies from './pages/MysteryMovies'
import RomanceMovies from './pages/RomanceMovies'
import SciFiMovies from './pages/SciFiMovies'
import SportMovies from './pages/SportMovies'
import ThrillerMovies from './pages/ThrillerMovies'
import WesternMovies from './pages/WesternMovies'

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
        <Route path='/crime' element={<CrimeMovies />} />
        <Route path='/drama' element={<DramaMovies />} />
        <Route path='/family' element={<FamilyMovies />} />
        <Route path='/fantasy' element={<FantasyMovies />} />
        <Route path='/history' element={<HistoryMovies />} />
        <Route path='/horror' element={<HorrorMovies />} />
        <Route path='/music' element={<MusicMovies />} />
        <Route path='/mystery' element={<MysteryMovies />} />
        <Route path='/romance' element={<RomanceMovies />} />
        <Route path='/sci-fi' element={<SciFiMovies />} />
        <Route path='/sport' element={<SportMovies />} />
        <Route path='/thriller' element={<ThrillerMovies />} />
        <Route path='/western' element={<WesternMovies />} />

      </Routes>
    </>
  )
}

export default App