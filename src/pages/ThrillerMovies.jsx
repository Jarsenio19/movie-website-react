import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import ThrillerCard from '../components/Cards/ThrillerCard'


const ThrillerMovies = () => {
  return (
    <>
      <Header />
      <ThrillerCard />
      <Pagination />
      <Footer />
    </>
  )
}

export default ThrillerMovies