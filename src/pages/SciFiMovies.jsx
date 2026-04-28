import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import SciFiCard from '../components/Cards/SciFiCard'


const SciFiMovies = () => {
  return (
    <>
      <Header />
      <SciFiCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default SciFiMovies