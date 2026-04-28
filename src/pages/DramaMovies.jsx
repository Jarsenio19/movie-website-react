import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import DramaCard from '../components/Cards/DramaCard'


const DramaMovies = () => {
  return (
    <>
      <Header />
      <DramaCard />
      <Pagination />
      <Footer />
    </>

  )
}

export default DramaMovies