import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import HorrorCard from '../components/Cards/HorrorCard'


const HorrorMovies = () => {
  return (
    <>
      <Header />
      <HorrorCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default HorrorMovies